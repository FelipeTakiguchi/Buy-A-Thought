import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BuyAThought';
  @Input() LinkPage: string = "";
  @Input() HeaderStyle: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      let isNavEnd = val instanceof NavigationEnd;
      if (!isNavEnd)
        return;
      console.log(location.pathname);
      if (location.pathname == "/SAC")
        this.LinkPage = "SAC"
        
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

    })
  }
}
