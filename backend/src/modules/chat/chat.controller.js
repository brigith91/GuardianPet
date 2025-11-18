import { chatWithOllama } from './chat.service.js';

export default {
  send: async (req, res, next) => {
    try {
      const { message, history } = req.body || {};
      const text = typeof message === 'string' ? message.trim() : '';
      if (text.length < 2) return res.status(400).json({ error: 'Mensaje inválido' });

      // “defensa” simple del historial
      const safeHistory = Array.isArray(history)
        ? history.slice(-10).map(m => ({ role: (m?.role === 'assistant' ? 'assistant' : 'user'), content: String(m?.content || '').slice(0, 2000) }))
        : [];

      const reply = await chatWithOllama({ userMessage: text.slice(0, 2000), history: safeHistory });
      res.json({ reply });
    } catch (e) { next(e); }
  }
};
