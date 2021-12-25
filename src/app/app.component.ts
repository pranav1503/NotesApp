import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NotesService } from './notes-list/notes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService]  
})
export class AppComponent implements OnInit{

  constructor(){ }
  ngOnInit(): void {
            
  }
}
