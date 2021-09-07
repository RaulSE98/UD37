import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { keyframes } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: any = null;
  arrayHome:Array<any> = new Array();
  arrayHomeAux:Array<any> = new Array();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/episode").subscribe(
      result =>{
        this.home = result;
        this.arrayHomeAux = Object.keys(this.home).map(key => ({type: key, value: this.home[key]}));
        this.arrayHome = this.arrayHomeAux[1].value;
        console.log("ArrayHome: " + this.arrayHome);
        console.log(this.arrayHome[1]);
      },
      error => {
        console.log('problemas');
      }
    );
  }

}
