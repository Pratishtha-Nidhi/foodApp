import { Component, Input } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string ='center';
tags:Tag[]=[];
constructor(private fs:FoodService){}
ngOnInit():void{
 if(!this.foodPageTags) 
  this.tags=this.fs.getAlltag();
}
}
