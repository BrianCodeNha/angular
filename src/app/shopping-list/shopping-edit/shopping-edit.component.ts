import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amountInput') amountElement: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewIngridient() {
    const nameValue = this.nameElement.nativeElement.value;
    const amountValue = this.amountElement.nativeElement.value;

    const newIngredient =  new Ingredient( nameValue, amountValue)
    this.ingredientAdded.emit(newIngredient);
  }

}
