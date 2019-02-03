import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular Project',
    click: 0
  }
  
  onLogoClicked(){
    this.data.click++;
  }

  onKeyUp(newClick: string){
    this.data.title = newClick;
  }
}
