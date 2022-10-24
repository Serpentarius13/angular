import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-component',
  templateUrl: './collection-component.component.html',
  styleUrls: ['./collection-component.component.css']
})
export class CollectionComponentComponent implements OnInit {

  data = [
    {name: 'James', age: 24, profession: 'Designer'},
    {name: 'Martha', age: 23, profession: 'Knopkokras'},
    {name: 'Eloise', age: 22, profession: 'HR'},

  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'profession', label: 'Profession'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
