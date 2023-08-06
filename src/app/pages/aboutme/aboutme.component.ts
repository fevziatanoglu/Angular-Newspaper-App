import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  skills: string[] = [
    "React.js",
    "Next.js",
    "Angular",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap",
    "CSS",
    "Javascript",
    "HTML"];

  ngOnInit(): void {
  }

}
