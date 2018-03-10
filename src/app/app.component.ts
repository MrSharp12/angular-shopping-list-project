import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//we add onNavigate to activate the event in app component html
//loadedFeature is the stored feature that onNavigate refers to
  export class AppComponent {
    loadedFeature = 'recipe';

    onNavigate(feature: string) {
      this.loadedFeature = feature;
    }
}
