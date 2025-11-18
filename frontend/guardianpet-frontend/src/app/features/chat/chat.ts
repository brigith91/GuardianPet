import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService, ChatMessage } from '../../core/services/chatbot.service';

@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss']
})
export class ChatComponent {
  private api = inject(ChatbotService);

  input = '';
  loading = false;

  history: ChatMessage[] = [
    { role: 'assistant', content: '¡Hola! Soy GuardianPet Bot 🐾 ¿En qué te ayudo?' }
  ];

  send() {
    const text = this.input.trim();
    if (!text || this.loading) return;

    this.history.push({ role: 'user', content: text });
    this.input = '';
    this.loading = true;

    // Mandamos últimas interacciones para contexto (no crecer infinito)
    this.api.send(text, this.history.slice(-10)).subscribe({
      next: ({ reply }) => {
        this.history.push({ role: 'assistant', content: reply || 'No pude responder.' });
        this.loading = false;
      },
      error: () => {
        this.history.push({ role: 'assistant', content: 'Hubo un problema al conectar.' });
        this.loading = false;
      }
    });
  }

  onEnter(e: Event) {
    const k = e as KeyboardEvent;
    if (!k.shiftKey) { e.preventDefault(); this.send(); }
  }
}
