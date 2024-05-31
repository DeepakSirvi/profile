import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,HttpClientModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private http: HttpClient) { }
  data:any;
  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.http.get('../assets/data.json').subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      this.data=data;
      
    });
  }
}
