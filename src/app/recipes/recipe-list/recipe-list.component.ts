import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('A test recipe', 'A simple test', 'https://assets.epicurious.com/photos/59e8f2efd0709e43c9418b02/1:1/w_400%2Cc_limit/monkfish-and-cauliflower-chowder-recipe-BA-101917.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
