import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree today',
    },
    {
      title: 'Bike',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'autos',
      content: 'I rode a bike today',
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mount',
      content: 'I climbed a mountain today',
    },
  ];
}
