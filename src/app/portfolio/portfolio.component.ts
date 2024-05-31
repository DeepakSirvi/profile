import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'CICO web UI',
      summary: 'Developed CICO, a comprehensive coaching institute management system leveraging Angular. Enhanced user experience by facilitating attendance tracking, course management, quizzes, assignments, and notes.',
      description: 'CICO(Check-In Check-Out), designed for a coaching institute, streamlines institute management tasks. Utilizing Angular, the frontend ensures a seamless user interface. It enables attendance tracking, course details management, and access to quizzes, assignments, and notes for students and instructors, integrated Google APIs, and utilized Apex charts.',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", "../../assets/portfolio_05.png"]
    },
    {
      id: 2,
      name: 'CICO Restful API',
      summary: "Implemented CICO backend using Spring Boot and MySQL, ensuring reliability and efficiency. Provided APIs for app Smart Tracko. Additional features include announcements, notifications, and functionalities for class, batch, subject, quiz test results, assignment management, attendance tracking, and fee management.",
      description: "The backend of Smart Tracko and CICO was developed with Spring Boot and MySQL to establish a robust and efficient system. APIs were provided for app developers to integrate with external applications. Google APIs and Apex charts were integrated to enhance functionality and visualization. Various features such as announcements, notifications, and management functionalities for classes, batches, subjects, quizzes, test results, assignments, attendance, and fees were implemented to comprehensively meet the needs of coaching institutes.",
      projectLink: '',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SQL, Tag.SPRINGJWT, Tag.LOMBOK, Tag.POSTMAN, Tag.GIT, Tag.JPA],
      pictures: ["../../assets/dou_01.png", "../../assets/dou_02.png", "../../assets/dou_03.png"]
    }];


  constructor(private titleService: Title) {
    this.titleService.setTitle('DC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
