import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import{RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the LogicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogicProvider {
  apiBaseurl:string='';
  auth:string='';
  SubUrl:string='';
  apiUrl:string='';
  std_id;
  key;
  token;
  constructor(public http: HttpClient,private storage: Storage) {
    this.storage.get('std_id').then((std_id) => { 
      this.std_id=std_id;
    });
    this.storage.get('key').then((key) => { 
      this.key=key;
    });
      this.storage.get('token').then((token) => { 
      this.token=token;
    });
    this.apiBaseurl=' https://demo/api';
    this.auth='https://demo/api_auth';
    this.apiUrl='https://demo/hr_grades/';
   
   

  }
 log(saves){
 
   return new Promise(resolve =>{
     this.http.post(this.apiBaseurl+'/login/check',saves).subscribe(data=>{
       resolve(data);
     },err=>{
       console.log(err); 
     })
   });
 }
 check_id(reg){ 
  const headers = new HttpHeaders().set('Authorization', 'auth-token');
  return new Promise(resolve =>{
    // this.http.post(this.apiBaseurl+'/login/newlogin',reg,{ headers, withCredentials: true  } ).subscribe(data=>{
      //headers.append('Content-Type', 'application/json');  
    this.http.post(this.apiBaseurl+'/login/newlogin',reg,{ headers, withCredentials: true,responseType: 'text'  } ).subscribe(data=>{
      resolve(data);
     
    },err=>{
      console.log(err);
      console.log('avijeet');
    })
  });
}
otp_sbmt(otp_data){
  const headers = new HttpHeaders().set('Authorization', 'auth-token');
  return new Promise(resolve =>{
    this.http.post(this.apiBaseurl+'/login/newlogin',otp_data, { headers, withCredentials: true,responseType: 'text'   }).subscribe(data=>{
      resolve(data);
    },err=>{
      console.log(err);
    })
  });
}
getData(){
    return new Promise(resolve =>{
      let headers = new HttpHeaders();//.set('Access-Control-Allow-Origin','*');//.set('Content-Type', 'application/json');
      //let headers = new RequestOptions({ headers: headers, withCredentials: true });
     // let options = new RequestOptions({ headers: headers, withCredentials: false });

      //let headers = new Headers({});
      this.http.get(this.apiUrl,{ headers, withCredentials: true  }).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    }); 
  }
  news(){
     return new Promise(resolve =>{
      this.SubUrl='?std_id='+this.std_id+'&key='+this.key+'&token='+this.token;
      let headers = new HttpHeaders();
      this.http.get(this.apiBaseurl+'/web_news/view'+this.SubUrl,{ headers, withCredentials: true  }).subscribe(data=>{
        resolve(data);
        console.log(this.apiBaseurl+'/web_news/view'+this.SubUrl);
        
      },err=>{
        console.log('err');
      })
    });
  }

  homework(){
    return new Promise(resolve =>{
     this.SubUrl='?std_id='+this.std_id+'&key='+this.key+'&token='+this.token;
     let headers = new HttpHeaders();
     this.http.get(this.apiBaseurl+'/homework/view'+this.SubUrl,{ headers, withCredentials: true  }).subscribe(data=>{
       resolve(data);
       console.log(this.apiBaseurl+'/homework/view'+this.SubUrl);
       
     },err=>{
       console.log('err');
     })
   });
 }
 NewPassword(saves){
  const headers = new HttpHeaders().set('Authorization', 'auth-token');
  return new Promise(resolve =>{
    this.http.post(this.apiBaseurl+'/login/create_password',saves, { headers, withCredentials: true,responseType: 'text'   }).subscribe(data=>{
      resolve(data);
    },err=>{
      console.log(err);
    })
  });

 }

}
