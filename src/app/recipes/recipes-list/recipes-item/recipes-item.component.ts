import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
//recipe is no longer in the recipe item component html
//we add it here
//no value assigned to recipe because we will get it from outside
//we add @Input so we can bind this component property from outside
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
//we need to call a method in the service which will transfer data
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
