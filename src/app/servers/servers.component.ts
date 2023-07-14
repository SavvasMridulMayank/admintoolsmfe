import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server Name';
  userName = '';
  resetUserButton = false;
  serverIsCreated = false;
  servers = [];
  showDetails = false;
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverIsCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with the name ' + this.serverName;
  }

  onupdateServerName(event) {
    console.log(event)
    this.serverName = event.target.value;
  }

  resetUserName() {
    console.log("inside method");
    this.userName = '';
  }

  toggeleShowDetails() {
    this.showDetails = !this.showDetails
    this.logs.push(new Date());
  }
  
}
