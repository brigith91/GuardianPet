// src/modules/chat/chat.service.js
const HOST   = process.env.OLLAMA_HOST  || 'https://ollama.com';
const MODEL  = process.env.OLLAMA_MODEL || 'gpt-oss:120b';
const APIKEY = process.env.OLLAMA_API_KEY || '';
const TIMEOUT = Number(process.env.OLLAMA_TIMEOUT_MS || 45000);

const SYSTEM_PROMPT = `
Eres GuardianPet Bot. Da consejos básicos y seguros sobre cuidado y alimentación de mascotas (perros y gatos).
Responde en español, breve y claro. No des diagnósticos ni tratamientos médicos; sugiere acudir a un veterinario cuando corresponda.
`.trim();

function buildHeaders() {
  const h = { 'Content-Type': 'application/json' };
  // Para host cloud directo (https://ollama.com) agrega Bearer
  if (HOST.startsWith('https://') && APIKEY) h.Authorization = `Bearer ${APIKEY}`;
  return h;
}

export async function chatWithOllama({ userMessage, history = [] }) {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.slice(-10),
    { role: 'user', content: userMessage }
  ];

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const res = await fetch(`${HOST}/api/chat`, {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify({ model: MODEL, messages, stream: false, options: { temperature: 0.3 } }),
      signal: controller.signal
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Ollama error ${res.status}: ${txt}`);
    }
    const data = await res.json();
    return data?.message?.content ?? '';
  } finally {
    clearTimeout(t);
  }
}
