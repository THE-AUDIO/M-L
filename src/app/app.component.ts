import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'multilanguage';
  constructor(
    private titleService:Title
  ){
    this.titleService.setTitle($localize`${this.title}`)
  }
  isDarkMode = true;
  isHidden = false;
    toggleMode(){
      this.isDarkMode =!this.isDarkMode
      console.log(this.isDarkMode);
      
      if(this.isDarkMode){
        document.body.classList.add('dark')
        localStorage.setItem('theme','dark');
      } else{
        localStorage.removeItem('theme');
        document.body.classList.remove('dark')
      }
    }  
    toggleMenu(){
      this.isHidden =!this.isHidden
      console.log(this.isHidden);
      
    }
    

    ngOnInit(): void {
      const theme = localStorage.getItem('theme');
      if(theme == "dark"){
        document.body.classList.add('dark')
        this.isDarkMode = true;
      } else{
        this.isDarkMode = false;
        document.body.classList.remove('dark')
      }
  }
}