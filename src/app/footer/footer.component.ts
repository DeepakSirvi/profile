import { Component } from '@angular/core';
import helper from '../helper';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear!: string;
  constructor(private http: HttpClient) { }
  data:any;
  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.currentYear = new Date().getFullYear().toString();

    this.http.get(helper).subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      this.data=data;
      
    });
  }



}
