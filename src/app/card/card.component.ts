import {Component, Input} from '@angular/core';
import {Article} from "../home-page/home-page.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  article!: Article;



}
