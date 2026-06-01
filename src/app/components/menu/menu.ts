import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  desserts = [
    {
      name: 'Chocolate Brownie',
      price: 'Rs. 120',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    },
    {
      name: 'Strawberry Shake',
      price: 'Rs. 150',
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767',
    },
    {
      name: 'Cup Cake',
      price: 'Rs. 90',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    },
    {
      name: 'Ice Cream Sundae',
      price: 'Rs. 180',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
    },
  ];
}
