import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import helper from '../helper';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    AccordionModule,HttpClientModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  providers: [BrowserAnimationsModule]
})
export class AccordionComponent {
  customClass = 'customClass';
  education:any;
  technology:any;
  language:any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.http.get(helper).subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      console.log(data)
      this.education=data.education;
      this.language=data.language;
      this.technology=data.technology;
    });
  }
}
