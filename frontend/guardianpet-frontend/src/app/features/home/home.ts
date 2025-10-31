import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
 
})
export class HomeComponent implements OnInit{
  me?: User;
  constructor(private auth: AuthService){}
  ngOnInit(){ this.auth.me().subscribe({ next: u => this.me = u, error: ()=> this.me = undefined }); }
}
