import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',

  // selector: '[app-server]',
  // selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 19;
  serverStatus = 'offline';
   getServerStatus() {
    return this.serverStatus;
   }
   getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
   }
constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

}
ngOnInit() : void {

}
}
