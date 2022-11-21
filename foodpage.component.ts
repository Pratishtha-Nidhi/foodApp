import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
// import { Router } from 'express';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
food!:Foods;
constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartservice:CartService,private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    this.food=foodService.getfoodById(params['id'])
  })
}
addToCart(){
  this.cartservice.addToCart(this.food)
  this.router.navigateByUrl('/cart-page')
}
}
 