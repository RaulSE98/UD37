import { Component } from '@angular/core';
import { ItemsService } from './items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD37-Rick&Morty';

  items: any = null;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(){
    this.items=this.itemsService.retornar().subscribe( result => this.items = result);
  }
}
