import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
//here we impliment onSelect, the click event from the header html
//also have to emit our own event
//first add a new property, featureSelected
//add a string, which was the feature added at the end
//also have to set it up so that this event can be listend to
//from outside of this component
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
//use the new property that hold the EventEmitter as a value
//this will emit a new event whenever we click one of the header buttons
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}