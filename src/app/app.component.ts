import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import {SampleService} from './sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  allUser: any
  userObj={
    name:'',
    mobile:'',
    email:'',
    bus:'',
    address:'',
    state:'',
    district:'',
    pin:'',
    stop:'',
    adhar:'',
    pan:''
  }
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z]*$")]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    bus:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
    address:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
    state:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
    district:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
    pin:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}$")]),
    stop:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*$")]),
    adhar:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{16}$")]),
    pan:new FormControl('',[Validators.required,Validators.pattern("^[0-9a-zA-Z]*$")]),
  })
  formObj: any;
  myForm: any;
    
  get name(){return this.loginForm.get('name')}
  get email(){return this.loginForm.get('email')}
  get mobile(){return this.loginForm.get('mobile')}
  get bus(){return this.loginForm.get('bus')}
  get address(){return this.loginForm.get('address')}
  get state(){return this.loginForm.get('state')}
  get district(){return this.loginForm.get('district')}
  get pin(){return this.loginForm.get('pin')}
  get stop(){return this.loginForm.get('stop')}
  get adhar(){return this.loginForm.get('adhar')}
  get pan(){return this.loginForm.get('pan')}

  constructor(private sampleService:SampleService){}
ngOnInit(){
  
}

addUser(formObj:any){
    
  console.log(formObj)
  this.sampleService.createUser(formObj).subscribe((response)=>{
    console.log("user added")
    this.loginForm.reset()

  })

}
}

