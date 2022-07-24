import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  @Input() selectedElement: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { // tai sao lai dung onInit
    
    this.recipeService.selectedRecipe.subscribe(newRecipe => {
      console.log("🚀 ~ file: recipes.component.ts ~ line 22 ~ RecipesComponent ~ transferData ~ newRecipe", newRecipe)
        this.selectedElement = newRecipe;
      })
  } 
  
}
