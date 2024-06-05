import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import helper from '../helper';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
    '/src/styles.css'
  ]
})
export class ContactComponent {
  constructor(private titleService: Title,private http:HttpClient) {
    this.titleService.setTitle('DC | Contact')
  }
  user:any;
  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.http.get(helper).subscribe((data: any) => {
    this.user=data
    });
  }
}
