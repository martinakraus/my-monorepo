import { Component } from '@angular/core';
import { HeaderComponent } from "@my-monorepo/ui";

@Component({
  standalone: true,
  imports: [ HeaderComponent ],
  selector: 'my-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'my-second-app';
}
