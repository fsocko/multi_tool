import { Component, OnInit } from '@angular/core';


interface TallyObject {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-tab-multi-tally',
  standalone: true,
  imports: [],
  templateUrl: './tab-multi-tally.component.html',
  styleUrls: ['./tab-multi-tally.component.css']
})
export class TabMultiTallyComponent implements OnInit {
  

  constructor() {}
  ngOnInit(): void {
   
  }
  
  
  myMap: Map<number, TallyObject> = new Map<number, TallyObject>();


  addTally(tallyObject : TallyObject) {
    this.myMap.set(tallyObject.id, tallyObject );
  }



}