import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private msgRoot=new BehaviorSubject<any>("Default Subject");
  singlePostData=this.msgRoot.asObservable();
  isLoggedIn:boolean=false;


  constructor(private _http:HttpClient) { }
  getLoginData(){
    return this._http.get('https://637f37105b1cc8d6f93dbaf1.mockapi.io/login');
  }

  getPostData(){
   return this._http.get('https://637f37105b1cc8d6f93dbaf1.mockapi.io/blog-posts');
  }
  getCategories(){
    return this._http.get('https://637f37105b1cc8d6f93dbaf1.mockapi.io/categories')
  }
  getSinglePost(id:number){
    this.singlePostData=this._http.get('https://637f37105b1cc8d6f93dbaf1.mockapi.io/blog-posts/'+id)
  }

  uploadPostData(post:{headline: string, description:string, images:string}){
    this._http.post<any>('https://637f37105b1cc8d6f93dbaf1.mockapi.io/blog-posts', post)
    .subscribe((res)=>{
      console.log(res);
    });
    }

  updatePost(id:string, post:{headline: string, description:string, images:string}){
    this._http.put('https://637f37105b1cc8d6f93dbaf1.mockapi.io/blog-posts/'+id, post)
    .subscribe();
  }

  deletePostData(id: number) {
    console.log("M kaam kr rha hu: service"+id);
    return this._http.delete(
      'https://637f37105b1cc8d6f93dbaf1.mockapi.io/blog-posts/'+id
    );
  }

  //categories wala
  uploadCategoryData(CategoryObj:{category: string}){
    this._http.post<any>('https://637f37105b1cc8d6f93dbaf1.mockapi.io/categories', CategoryObj)
    .subscribe((res)=>{
      console.log(res);
    });
    }

  updateCategory(id:string, CategoryObj:{category: string}){
    this._http.put('https://637f37105b1cc8d6f93dbaf1.mockapi.io/categories/'+id,CategoryObj)
    .subscribe();
  }

  deleteCategoryData(id: number) {
    console.log("M kaam kr rha hu: service"+id);
    return this._http.delete(
      'https://637f37105b1cc8d6f93dbaf1.mockapi.io/categories/'+id
    );
  }
}

