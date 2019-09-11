import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../shared/providers/application.service';
import {Observable} from 'rxjs';
import {Application} from '../../shared/models/application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applicationList$: Observable<Application[]>;

  constructor(private applicationService: ApplicationService) {
    this.applicationList$ = this.applicationService.getApplicationList();
  }

  ngOnInit() {
  }

}
