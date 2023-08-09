import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
postData:any;
categoriesData:any;
singlePostData:any;
datasearch!:string;

  constructor(private connect:ConnectService) { }

  ngOnInit(): void {
    this.getPostData();
    this.getCategories();
  }
  getPostData(){
    this.connect.getPostData().subscribe(res=>{
      this.postData=res;
      for(var post of this.postData)
      {
        post.datetime=new Date(post.datetime).toLocaleString();
      }
    })
  }

  categoryClick(category: string){
    this.connect.getPostData().subscribe(res=>{
      var tempData=res;
      for(var i=0; i<Object.values(tempData).length; i++)
      {
        if(category===tempData[i].category)
        {
          this.postData.push(tempData[i]);
          console.log(i+" Added Successfully");
        }
      }
      console.log(this.postData);
    })
  }

getCategories(){
  this.connect.getCategories().subscribe(res=>{
    this.categoriesData=res;
  })
}
getSinglePost(id:number){
  this.connect.getSinglePost(id);
}



}
