import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipewasSelected = new EventEmitter<Recipe>();

   recipes: Recipe[] = [
    new Recipe('A test Recipe' , 'This is a Test Recipe' , 'https://unsplash.com/photos/iNwCO9ycBlc'),
    new Recipe('A Second Recipe' , 'This is a Second Recipe' , 'https://unsplash.com/photos/iNwCO9ycBlc')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipewasSelected.emit(recipe)
  }

}
