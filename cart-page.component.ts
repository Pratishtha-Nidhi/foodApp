import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
cart!:Cart;
constructor(private cartService:CartService,private foodService:FoodService){
  this.setcart();
 
}
setcart(){
  this.cart=this.cartService.getCart();
}
removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id);
this.setcart();
}
changeQuantity(cartItem:CartItem,QunatityInString:string){
const qunatity=parseInt(QunatityInString);
this.cartService.changeQuantity(cartItem.food.id,qunatity);
this.setcart();
}
}

