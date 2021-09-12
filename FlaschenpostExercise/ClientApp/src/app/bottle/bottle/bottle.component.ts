import { Component, Input, OnInit } from '@angular/core';
import { BottleInfoDTO } from 'src/app/_model/bottleInfoDTO';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.css']
})
export class BottleComponent implements OnInit {

  @Input() bottle: BottleInfoDTO
  @Input() viewMode: boolean;

  constructor() { }

  ngOnInit() {

    
  }

}
