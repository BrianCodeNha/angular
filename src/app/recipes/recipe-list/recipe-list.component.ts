import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeElementSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('a test recipe', 'simply recipe description', 'https://farm6.staticflickr.com/5612/15804454782_1ec16c5de5.jpg'),
    new Recipe('another recipe', 'simply recipe description', 'https://farm8.staticflickr.com/7490/15617061369_4a35c6f24c.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSeleted (recipe: Recipe) {
    this.recipeElementSelected.emit(recipe);
  }

}
