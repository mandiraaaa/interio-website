import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../users';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<User>();
  
  @Output()
  formSubmitted = new EventEmitter<User>();

  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({});
  constructor(private router: Router,private fb: FormBuilder, private userService: UserService) { }
 
  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }
  get phone() { return this.registerForm.get('phone')!; }
  get city() { return this.registerForm.get('city')!; }
  
  ngOnInit() {
    this.initialState.subscribe(user => {
      this.registerForm = this.fb.group({
        email: [ user.email, [ Validators.required, Validators.minLength(5) ] ],
        password: [ user.password, [ Validators.required] ],
        phone: [ user.phone, [Validators.required] ],
        city: [ user.city, [Validators.required] ],
      });
      this.loginForm = this.fb.group({
        email: [ user.email, [ Validators.required, Validators.minLength(5) ] ],
        password: [ user.password, [ Validators.required] ]
      });
    });
  
    this.registerForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
    this.loginForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.addEmployee(this.registerForm.value);
    //this.formSubmitted.emit(this.loginForm.value);
  }

  
  submitFormLogin() {
    this.find(this.loginForm.value);
    this.router.navigateByUrl('/productdetails');
    //this.formSubmitted.emit(this.loginForm.value);
  }

  addEmployee(user: User) {
    console.log(user)
    this.userService.createEmployee(user)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/productdetails');
         // this.router.navigate(['/employees']);
         alert(" create employee");
        },
        error: (error) => {
          alert("Failed to create employee");
          console.error(error);
        }
      });
  }

  find(user: User) {
    console.log(user)
    this.userService.getUserByEmailAndPassword(user)
      .subscribe({
        next: () => {
        this.router.navigate(['/productdetails']);
         alert(" login successfully");
        },
        error: (error) => {
          alert("Failed to login");
          console.error(error);
        }
      });
  }
}
