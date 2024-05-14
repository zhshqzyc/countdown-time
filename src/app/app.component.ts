import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownTimeComponent } from "./countdown-time/countdown-time.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CountdownTimeComponent, FormsModule ]
})
export class AppComponent {

  parentTime: string = "2024-05-14T12:00:00"; // Set the time value here
  changeParentTime(newTime: string) {
    this.parentTime = newTime;
  }
}
