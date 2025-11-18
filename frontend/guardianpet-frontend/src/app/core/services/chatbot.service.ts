import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';

export type Role = 'user' | 'assistant';
export interface ChatMessage { role: Role; content: string; }

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  private http = inject(HttpClient);
  private base = environment.apiUrl; // ej: http://localhost:3000/api

  // El interceptor ya adjunta Authorization: Bearer <token>
  send(message: string, history: ChatMessage[] = []) {
    return this.http.post<{ reply: string }>(`${this.base}/chat`, { message, history });
  }
}
