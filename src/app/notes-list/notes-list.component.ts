import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NotesModel } from './notes.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private notesService: NotesService, private render: Renderer2) { }

  notes: NotesModel[] = [];

  @ViewChild('successAlert', {static: true}) successAlert: ElementRef;  
  @ViewChild('openNoteButton') openBtb: ElementRef;
  @ViewChild('navElement') navElement: ElementRef;

  alertMsg: string = "";
  showAlert: boolean = false;
  ngOnInit(): void {
    this.notes = this.notesService.getNotes();        
    this.notesService.noteAddedEvent.subscribe(
      (msg: string) => {
        this.notes = this.notesService.getNotes();
        this.alertMsg = msg;
        this.showAlert = true
      }
    )
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if(!this.openBtb.nativeElement.contains(event.target)){
      this.closeNav(this.navElement.nativeElement);
    }
        
  }

  openNav(element: HTMLDivElement){
    element.style.width = "100%";    
  }

  closeNav(element: HTMLDivElement){
    element.style.width = "0%";
  }

}
