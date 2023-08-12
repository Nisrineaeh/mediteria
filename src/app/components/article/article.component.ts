import { Component, Input } from '@angular/core';
import { TechniqueMeditation } from 'src/app/models/technique-meditation';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input()  TechArticles!: TechniqueMeditation;
}
