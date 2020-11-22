import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
    //you must always have a templateURL or template property!
  // template: '<app-server></app-server>',
  //   //alternative to templateURL: path; this method defines the html within this .ts file; not best practice
  //   //can also use backticks to create multi-line code here with JS template literal format
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'A new server was created!';
    // this.allowNewServer = false
  }

}
