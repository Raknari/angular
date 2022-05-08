import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Melissa";
  userData = {
    email: "melissa@gmail.com",
    role: 'Admin'
  }

  title = 'angular';
}
