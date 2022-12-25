import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Resume';
  visitors: BehaviorSubject<any>;

  constructor(private resumeService: ResumeService) {
    this.visitors = new BehaviorSubject<any>(null);
  }
  ngOnInit(): void {
    this.resumeService.getVisitors().subscribe(visitor => {
      this.visitors.next(visitor.count);
      this.resumeService.updateVisitors(visitor);
    });
  }

}
