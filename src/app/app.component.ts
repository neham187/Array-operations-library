import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericComponentComponent } from "./generic-component/generic-component.component";
import { GenericArrayOperations } from './generic-array-operations/generic-array-operations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'array-operations-lib';

  constructor() {
  }
}
