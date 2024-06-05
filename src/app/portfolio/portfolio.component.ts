import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import helper from '../helper';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent,HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [];

  constructor(private titleService: Title,private http: HttpClient) {
    this.titleService.setTitle('DC | Portfolio')
  }

  ngOnInit() {
    // Fetch the JSON data using HttpClient
    this.http.get(helper).subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      this.projects=data.projects;
      
    });
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
