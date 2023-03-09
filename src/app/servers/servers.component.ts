import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  //selector: 'app-servers',

 // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;

    }, 2000);
  
  }
  
  ngOnInit() : void {
  
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Server name is '+ this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  }
