import { Component } from '@angular/core';
// import { read } from 'fs';
    //imports the Component functionality from @angular/core so we can use it as a decorator

@Component({
    selector: 'app-server',
        //name of the HTML tag that allows us to reference this component elsewhere
    templateUrl: './server.component.html',
        //points to corresponding html file for this component
    styles: [`
        .online {
            color: white;
        }
    `],
    
})

export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        //investigate this syntax, which means choose a random number, and if it is greater than 0.5, set the value to online, otherwise set it to offline
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        
        if(this.serverStatus === 'online'){
            return 'green';
        } else {
            return 'red';
        }
        // return this.serverStatus ==='online' ? 'green' : 'red';
        //  //alternative syntax from lecture:
    }
}