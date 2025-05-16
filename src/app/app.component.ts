import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'M&L';
  isDarkMode = false;
  isHidden = false;
    toggleMode(){
      this.isDarkMode =!this.isDarkMode
      console.log(this.isDarkMode);
      
      if(this.isDarkMode){
        document.body.classList.add('dark')
      } else{
        document.body.classList.remove('dark')
      }
    }  
    toggleMenu(){
      this.isHidden =!this.isHidden
      console.log(this.isHidden);
      
    }


    ngOnInit(): void {
  }
}