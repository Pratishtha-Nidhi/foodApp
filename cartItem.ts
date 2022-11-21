import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
        this.price;
    }
    food:Foods
    Quantity:number=1;
get price():number{
    return this.food.price * this.Quantity;
}
}