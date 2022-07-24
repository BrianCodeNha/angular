import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('a test recipe', 'simply recipe description', 'https://farm6.staticflickr.com/5612/15804454782_1ec16c5de5.jpg'),
        new Recipe('another recipe', 'simply recipe description', 'https://farm8.staticflickr.com/7490/15617061369_4a35c6f24c.jpg'),
      ];


    getRecipes () {
        return this.recipes.slice(); // return a copy of recipes not original
    }
    
}