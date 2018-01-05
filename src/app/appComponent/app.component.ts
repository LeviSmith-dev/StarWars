import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'Star Wars Characters!';
  aFunction(): void{
    console.log('this is awesome');
  }
}
