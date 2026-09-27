import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { validate, ValidationError } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-form-login',
  styleUrl: './reactive-form-login.css',
  templateUrl: './reactive-form-login.html',
})
export class ReactiveFormLogin {
  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.minLength(6),
    ]),
  }, {
    validators: this.passwordMatchValidator
  });
  // confirmPasswordStatus = 'DISABLED'; //stauts display in UI

  checkpassword() {
     

    const password = this.LoginForm.get('password')?.value;
    const confirmPassword = this.LoginForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      this.LoginForm.get('confirmPassword')?.setErrors({
        passwordMismatch: true
      });
    } else {
      this.LoginForm.get('confirmPassword')?.setErrors(null);
    }
  
  }

  Onsubmit() {
    console.log(this.LoginForm.value);
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors| null {

    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  constructor(){

    const password =this.LoginForm.get('password');
    const confirmpassword=this.LoginForm.get('confirmPassword');

    console.log(confirmpassword);
    
  password?.valueChanges.subscribe(passwords=>{
    
    if(passwords){
      //Enable confirm password;
      confirmpassword?.enable()
      console.log('msg',passwords)
    }
    else{
      //clear the confirm password
      confirmpassword?.reset();

      //disable the confirm password
      confirmpassword?.disable();
    }

  })
}

}
  //  passwordnotMatch(){
  //   const password=this.LoginForm.get('password')?.value;
  //   const ConfirmPassword=this.LoginForm.get('confirmPassword')?.value;
  //   return password!==ConfirmPassword

  //  }


