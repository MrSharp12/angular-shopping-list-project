import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//make it private so you can directly access this array from outside
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - super yum', 
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Schnitzel-Restaurant-Wiener-Schnitzel-Dinner-356436.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe(
            'Big Ol\' Burger',
             'Classic heart attack inducer', 
             'https://c.pxhere.com/photos/f8/cf/beef_burger_fries_yummy_delicious_dinner_tasty_cuisine-1386769.jpg!d',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Ground Beef', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) {}
//added getRecipes so we can get access to it from outside
//if we change something on this array, we will change it on the array in the service
//add slice, it will add a new array, which is an exact copy in this service file
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}