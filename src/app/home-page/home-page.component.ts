import { Component } from '@angular/core';

export interface Article {
  auteur : string;
  titre : string;
  content: string;
  modificationDate: Date | undefined;
  users : string[];
}

export const articles: Article[] = [
  {
    auteur: "Begimay",
    titre: "Article1",
    content : "Content",
    modificationDate: undefined,
    users : []
  },
  {
    auteur: "Begimay",
    titre: "Article2",
    content : "Content",
    modificationDate: undefined,
    users : []
  },
  {
    auteur: "Begimay",
    titre: "Article2",
    content : "Content",
    modificationDate: undefined,
    users : []
  },
  {
    auteur: "Begimay",
    titre: "Article2",
    content : "Content",
    modificationDate: undefined,
    users : []
  },
  {
    auteur: "Begimay",
    titre: "Article2",
    content : "Content",
    modificationDate: undefined,
    users : []
  },
  {
    auteur: "Begimay",
    titre: "Article2",
    content : "Content",
    modificationDate: undefined,
    users : []
  }
]
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  readonly articles = articles;
}
