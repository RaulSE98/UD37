import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = null;
  arrayCharacter:Array<any> = new Array();
  arrayCharacterAux:Array<any> = new Array();

  id: number = 0;
  character: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character").subscribe(
      result =>{
        this.characters = result;
        this.arrayCharacterAux = Object.keys(this.characters).map(key => ({type: key, value: this.characters[key]}));
        this.arrayCharacter = this.arrayCharacterAux[1].value;
        console.log("ArrayCharacter: " + this.arrayCharacter);
        console.log(this.arrayCharacter[0]);
      },
      error => {
        console.log('problemas');
      }
    );
  }

  getChar(id:number){
    this.http.get("https://rickandmortyapi.com/api/character/" + id).subscribe(
      result =>{
        this.character = result});
  }

}
