import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          src="https://getbootstrap.com/{{ imgUrl }}"
          alt=""
          width="30"
          height="24"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px;"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              {{homePageName}}</a>
          </li>
          <li class="nav-item">
          <a class="nav-link orange-item" [routerLinkActive]="['active']" [routerLink]="['/simplepage']">{{ SPA }}</a>
          </li>
          <li class="nav-item">
          <a class="nav-link orange-item" [routerLinkActive]="['active']" [routerLink]="['/forexample']">{{ngForExample}}</a>
          </li>
          <li class="nav-item">
          <a class="nav-link orange-item" [routerLinkActive]="['active']" [routerLink]="['/ifexample']">{{ ngIfExample }}</a>
          </li>
          <li class="nav-item">
          <a class="nav-link orange-item" [routerLinkActive]="['active']" [routerLink]="['/bmiexample']">{{ BMI }}</a>
          </li>
        </ul>
        <button class="btn btn-warning" (click)="handleClick($event)">
          Turn ON
        </button>
        <button class="btn btn-warning" (click)="handleClick($event)">
          Turn OFF>
        </button>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            style="color: {{ navlinkColor }}"
          >
            Search
          </button>
          <button (click)="handleClick($event)" class="btn btn-outline-success">
            X
          </button>
        </form>
      </div>
    </div>
  </nav>`,

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  homePageName = 'My Home Page';
  SPA = 'SPA';
  ngForExample = 'FOR';
  ngIfExample = 'IF';
  BMI = 'BMI';
  imgUrl = 'docs/5.0/assets/brand/bootstrap-logo.svg';
  navlinkColor = 'red';


  handleClick($event: MouseEvent): void {
    //this.homePageName = this.homePageName == "My Home Page" ? "Home" : "My Home Page";
    // this.navlinkColor = this.navlinkColor == "red" ? "blue" : "red";
    if (this.homePageName == 'My Home Page') this.homePageName = 'Home';
    else this.homePageName = 'My Home Page';

    if ((this.navlinkColor = 'red')) this.navlinkColor = 'blue';
    else this.navlinkColor = 'red';
  }
}


  //handleAnotherClick($event: MouseEvent): void {
  //this.homePageName = "My Home Page";
  //this.navlinkColor = "red";
  //}

