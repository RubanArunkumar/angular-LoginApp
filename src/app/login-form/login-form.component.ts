import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public errorMessage: string;
  constructor(private router: Router,
              private _userService: UserService) { }

  ngOnInit(): void {
  }
  public loginUser(e)
  {
      e.preventDefault();
      var userName = e.target.elements[0].value;
      var password = e.target.elements[1].value;

      if (userName.toLowerCase() == 'admin' && password.toLowerCase() == 'admin')
      {
        this._userService.setUserLoggedIn();
        this.router.navigate(['/home']);
      }
      else
      {
        this.errorMessage = "Oops!! Invalid Credentials";
      }
      return false;
  }

  public RedirectToLoginApp()
  {
    this.router.navigate(['']);
    return false;
  }

  public clearForm(form: FormGroup) {
    document.getElementById('error').innerHTML = null;
    form.reset();
    }
}
