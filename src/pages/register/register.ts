import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginPage } from '../login/login';
// import { EmailValidator } from '../../validators/email';
import { RestUserProvider } from '../../providers/rest-user'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('signup') signup: any;
  submitAttemp: boolean = false;
  user = { username:'', name:'', cpf:'', email:'', birth:'', address:'', password:'', region:'', preference:'', howDidYouKnow:'', want_ongs:'', ddd:'', whatsapp:'', genre:''};

  constructor(public navCtrl: NavController, public RestProvider: RestUserProvider) {

  }
  // constructor(public navController: NavController,  public formBuilder: FormBuilder, public RestUserProvider: RestUserProvider) {
  //   this.signupOne = formBuilder.group({
  //     login: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
  //     nameFull: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
  //     cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('([0-9]).{11,11}$')])],
  //     email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
  //     birth: ['', Validators.compose([Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$')])],
  //     cities:[''],
  //     ddd: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('([0-9]).{3,3}$')])],
  //     hospitais:[''],
  //     whatsapp: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('([0-9]).{9,9}$')]) ],
  //     endereco: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required]) ],
  //     comoConheceu:[''],
  //     participar:[''],
  //     sexo:[''],
  //     password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
  //     confirmPassword: ['', Validators.required],
  //   }, { validator: this.matchingPasswords('password', 'confirmPassword')})
  // }
  // matchingPasswords(passwordKey: string, confirmPasswordKey: string){
  //   return (group: FormGroup): {[key: string]: any} => {
  //     let password = group.controls[passwordKey];
  //     let confirmPassword = group.controls[confirmPasswordKey];

  //     if(password.value !== confirmPassword.value){
  //       return {
  //         mismatchedPasswords: true
  //       };
  //     }
  //   }
  // }
  saveUser() {
    this.RestProvider.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  /*BtnSend(){
    this.submitAttemp = true;

    if(!this.signupOne.valid){
      this.navController.push(LoginPage);
    }
    else{
      console.log("Success!");
      console.log(this.signupOne.value);
    }
  }*/

}
