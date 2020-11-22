import { Component } from '@angular/core';
    //imports the Component functionality from @angular/core so we can use it as a decorator

@Component({
    selector: 'app-server',
        //name of the HTML tag that allows us to reference this component elsewhere
    templateUrl: './server.component.html'
        //points to corresponding html file for this component
})

export class ServerComponent {
}