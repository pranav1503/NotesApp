import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canDeactivateComponent } from '../can-deactivate-guard.service';
import { NotesModel } from '../notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit, canDeactivateComponent {

  constructor(private notesService: NotesService, private route: ActivatedRoute, private router: Router) { }

  noteId: number;
  noteTitleInp: string;
  noteNoteInp: string;
  note: NotesModel = new NotesModel('', '', null);  
  isEditMode: boolean = false;
  changesSaved: boolean = false;

  ngOnInit(): void {     
    this.route.params.subscribe(
      (params: Params) => {
        this.noteId = +params['id'];        
        this.note = this.notesService.getOneNote(this.noteId);   
        this.noteTitleInp = this.note.title;
        this.noteNoteInp = this.note.note;     
        this.isEditMode = params['id'] != null;       
      }
    )      
  }

  onNoteEdit(title: string, note: string){
    this.notesService.editNote(this.noteId, title, note);    
    this.changesSaved = true;
    this.router.navigate(['/']);
  }

  onNoteDelete(){
    this.notesService.deleteNote(this.noteId);
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onNewNoteAdd(title: string, note: string){
    this.notesService.addNewNote(title, note);    
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean>{    
    if(this.changesSaved){
      return true;
    }
    if(!this.changesSaved && (this.note.title != this.noteTitleInp || this.note.note != this.noteNoteInp)){
      return confirm("Do you want to exit without saving?");
    }   
    return true; 
  }

}
