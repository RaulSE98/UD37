import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/location").subscribe(
      result =>{
        this.about = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
