import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'multilanguage';
  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.titleService.setTitle($localize`${this.title}`);
  }
  isDarkMode = true;
  isHidden = false;
  languageForm!: FormGroup;
  initForm() {
    const lang = window.location.href.split('/')[3] ;
    console.log(lang);
    this.languageForm = this.formBuilder.group({
      locale: lang
    });

    // Écoute les changements
    this.languageForm.get('locale')?.valueChanges.subscribe(locale => {
      console.log(locale);
      this.switchLanguage(locale)
    });
  }
  switchLanguage(locale: string) {
    window.location.href = `/${locale}`;
    console.log( window.location.href);
    
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode
    console.log(this.isDarkMode);

    if (this.isDarkMode) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
      document.body.classList.remove('dark')
    }
  }
  toggleMenu() {
    this.isHidden = !this.isHidden
    console.log(this.isHidden);

  }
 



  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme == "dark") {
      document.body.classList.add('dark')
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
      document.body.classList.remove('dark')
    }
    this.initForm()
  }
}