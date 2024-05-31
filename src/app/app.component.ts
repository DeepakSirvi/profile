import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deepak-portfolio';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.http.get('../assets/data.json').subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      console.log(data.users)
    });
  }
}
