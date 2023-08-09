import { Component } from '@angular/core';
import { ConnectService } from './service/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog_project';
  constructor(private connect: ConnectService){
  
  }
}
