import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() LinkPage: string = "";
  @Input() HeaderStyle: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (location.pathname == "/")
      this.LinkPage = "Menu";
    else if (location.pathname.includes("Idea"))
      this.LinkPage = "Idea";
    else if (location.pathname.includes("Secret"))
      this.LinkPage = "Secret";

    if (location.pathname.includes("Sell"))
      this.HeaderStyle = "Sell";
    else
      this.HeaderStyle = "Buy";
  }
}
