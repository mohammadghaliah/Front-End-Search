import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arr: any[] = [];
  arr2: any[] = ['ahmad', 'mohammad'];
  search(e) {
    this.arr = this.arr2.filter((att) =>
      att.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    );
  }
}
