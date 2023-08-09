import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  singlePostData:any;
  constructor(private connect: ConnectService) { }

  ngOnInit(): void {
    this.singlePostData=this.connect.singlePostData.subscribe(res=>(
      this.singlePostData=res
    ));
  }

}
