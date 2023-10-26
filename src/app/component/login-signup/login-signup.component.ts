import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../contact.model';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  constructor(
    private formbuidel: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  signupform!: FormGroup;
  loginform!: FormGroup;
  ngOnInit(): void {
    this.signupform = this.formbuidel.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginform = this.formbuidel.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  isShow = false;
  signup() {
    this.isShow = true;
  }
  login() {
    this.isShow = false;
  }
  submitsignup() {
    this.http
      .post<signup>('http://localhost:3000/signup', this.signupform.value)
      .subscribe((res) => {
        alert('User sigup Sucessly!!');
        this.signupform.reset();
      });
  }
  loginuser() {
    this.http.get<login[]>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginform.value.email &&
            a.password === this.loginform.value.password
          );
        });
        if (user) {
          alert('Sucessly login in');
          this.loginform.reset();
          this.router.navigate(['/contactlist']);
          localStorage.setItem('logindata', JSON.stringify(user));
        } else {
          alert('user not found');
          this.loginform.reset();
        }
      },
      (errpr) => {
        alert('Something sai');
        this.loginform.reset();
      }
    );
  }
}
