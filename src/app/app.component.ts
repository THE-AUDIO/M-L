import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'M&L';
  isDarkMode = true;

    toogleMode(){
      this.isDarkMode =!this.isDarkMode
      console.log(this.isDarkMode);
      
      if(this.isDarkMode){
        document.body.classList.add('dark')
      } else{
        document.body.classList.remove('dark')
      }
    }  

    ngOnInit(): void {
  }
}