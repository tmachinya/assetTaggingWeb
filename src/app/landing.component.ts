import { Component, OnInit } from '@angular/core';
import {Session} from './auth.component';
import {JarvisService} from "./services/jarvis.service";

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private  Jarvis: JarvisService,
  ) {
  }

  public onAuthenticated(session: Session): void {
  }

  ngOnInit() {
    this.Jarvis.depreciation().subscribe();
  }

}
