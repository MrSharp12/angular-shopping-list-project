import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';


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
  //adding @Output so we can listen from outside
  //void is in the tag since we are not passing information
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
