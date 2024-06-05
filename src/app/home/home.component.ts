import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import helper from '../helper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '/src/styles.css'
  ]
})

export class HomeComponent implements OnInit {

  dynamicText: string = "";
  phrases: string[] = [
    "Team Player.",
    "Software Developer.",
    "Backend Engineer.",
    "Software Engineer.",
    "Problem Solver"
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('DC | Home')
  }

  data: any;
  ngOnInit(): void {
    this.type();
    // Fetch the JSON data using HttpClient
    this.http.get(helper).subscribe((data: any) => {
      // Parse the JSON data and assign it to the users property
      this.phrases=data.phrases;
      this.data=data;
    });
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }


}
