import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectService } from '../service/connect.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  @ViewChild('postUploadForm') form!: NgForm;
  @ViewChild('categoryUploadForm') form1!: NgForm;
  editMode:boolean=false;
  editMode1:boolean=false;
  display: string="none";
  hide:number=0;
  hide1:number=0;
  postData:any;
  categoriesData:any;
  currentPostId: string="";
  currentCategoryId: string="";
  display1:string="none";

  
  constructor(private connect: ConnectService) { }

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

  getCategories(){
    this.connect.getCategories().subscribe(res=>{
      this.categoriesData=res;
    })
  }

  buttonCategory(){
    this.hide=1;
  }



  buttonPosts(){
    this.hide1=1;
  }

  backToDashboard(){
    this.hide=0;
    this.hide1=0;
  }

  onAddPost(){
    this.display="block";
    this.form.reset();
    this.editMode=false;
    this.getPostData();
  }

  onCloseHandled(){
    this.display="none"
  }

  uploadPostData(post:{headline: string, description:string, images:string}){
    if(!this.editMode)
      this.connect.uploadPostData(post);
    else
      this.connect.updatePost(this.currentPostId, post);
    this.getPostData();
    this.display="none";
    this.ngOnInit();  
      console.log("M kaam kr rha hu");
  }

  onEditPostClicked(id:string){
    this.display="block";
    this.currentPostId=id;
    //get the product based on id
    let currentPost= this.postData.find((p: { id: string; })=>{return p.id===id});
    console.log(currentPost);
    
    //populate the form with the product details 
    this.form.setValue({
      headline:currentPost.headline,
      description:currentPost.description,
      images:currentPost.images
    });
    this.editMode=true;
    
        //change the button value to update 
  }

  deletePostData(id: number){
    console.log("M kaam kr rha hu: component"+id)
    this.connect.deletePostData(id).subscribe(data=>
      {      
        this.getPostData();
      })
  }

  onCloseHandled1(){
    this.display1="none"
  }

  onAddCategory(){
    this.display1="block";
    this.form1.reset();
    this.editMode1=false;
    this.getCategories();
  }

  uploadCategoryData(categoryObj:{category: string}){
    if(!this.editMode1)
      this.connect.uploadCategoryData(categoryObj);
    else
      this.connect.updateCategory(this.currentCategoryId, categoryObj);
    this.getCategories();
    this.display1="none";
    this.ngOnInit();  
      console.log("M kaam kr rha hu");
  }


  onEditCategoryClicked(id:string){
    this.display1="block";
    this.currentCategoryId=id;
    //get the product based on id
    let currentCategory= this.categoriesData.find((p: { id: string; })=>{return p.id===id});
    console.log(currentCategory);
    
    //populate the form with the product details 
    this.form1.setValue({
      category:currentCategory.category
    });
    this.editMode1=true;
    
        //change the button value to update 
  }

  deleteCategoryData(id: number){
    console.log("M kaam kr rha hu: component"+id)
    this.connect.deleteCategoryData(id).subscribe(data=>
      {      
        this.getCategories();
      })
  }

}
