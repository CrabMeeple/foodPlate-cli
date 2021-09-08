import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-protein-detail',
  templateUrl: './protein-detail.component.html',
  styleUrls: ['./protein-detail.component.css']
})
export class ProteinDetailComponent implements OnInit {

  proteinSample = {
    'calories': 120,
    'protein': 9
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
