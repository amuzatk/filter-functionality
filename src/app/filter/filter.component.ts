import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  groceryItems: string[] = ['Beans','Rice & Grain', 'Lentils','Peas',];
  expressDeliveryItems: string[] = ['Jumia Express'];
  shippedFromItems: string[] = ['Shipped from abroad', 'Shipped from Nigeria'];
  brandItems: string[] = ['915 Generation', 'Big Bull', "Bob's Red Mill", 'Chi', 'Double T', 'EBBOS', "Endy'S", "Generic", 'GERBS', 'Jumia Bundles','Lamis', "Mama'S Choice", "Mama'S Pride", "Mama Gold", 'North Bay', 'Pride of India', 'Royal','Tropical Sun'];

  selectedItems: { [category: string]: string[] } = {};

  @Output() filterSubmitted = new EventEmitter<{ [category: string]: string[] }>();

  selectedGroceryItem: string | null = null;
  showGroceryItems: boolean = true;

  toggleCheckbox(category: string, item: string) {
    if (category === 'Grocery') {
      this.selectedGroceryItem = item;
      this.showGroceryItems = false;
    } else {
      this.updateSelectedItems(category, item);
    }
  }
  
  updateSelectedItems(category: string, item: string) {
    this.selectedItems[category] = this.selectedItems[category] || [];
    const index = this.selectedItems[category].indexOf(item);
    if (index > -1) {
      this.selectedItems[category].splice(index, 1);
    } else {
      this.selectedItems[category].push(item);
    }
  }
  
  isSelected(category: string, item: string): boolean {
    if (category === 'Grocery') {
      return this.selectedGroceryItem === item;
    } else {
      return this.selectedItems[category]?.includes(item);
    }
  }
  
  

  // toggleCheckbox(category: string, item: string) {
  //   this.selectedItems[category] = this.selectedItems[category] || [];
  //   const index = this.selectedItems[category].indexOf(item);
  //   if (index > -1) {
  //     this.selectedItems[category].splice(index, 1);
  //   } else {
  //     this.selectedItems[category].push(item);
  //   }
  // }
  

  // isSelected(category: string, item: string): boolean {
  //   return this.selectedItems[category]?.includes(item);
  // }

  submitFilters() {
    this.filterSubmitted.emit(this.selectedItems);
  }
}

