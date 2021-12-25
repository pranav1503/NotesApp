import { Component, Input, OnInit } from '@angular/core';
import { NotesModel } from '../notes.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: NotesModel;  
  @Input() id: number;    
  noteItem: NotesModel = new NotesModel("","",null);
  maxLength: number = 60;
  dateString: string;
  constructor() { }

  ngOnInit(): void {               
      this.noteItem.note = this.ellipsesString(this.note.note, this.maxLength);
      this.noteItem.title = this.ellipsesString(this.note.title, this.maxLength);
      this.dateString = this.timeDiff();                    
  }

  ellipsesString(data: string, maxLength: number){
    if (data.length >  maxLength){
      data = data.substring(0, maxLength) + "...";
    } 
    return data;
  }

  timeDiff(){
    let currDate = new Date()
    let dateString = "";    
    let diff = Math.floor((currDate.getTime() - this.note.date.getTime())/1000);
    if(diff < 60 * 60){
      dateString = Math.floor(diff/60) + " minutes ago";
    }else if(diff < 24 * 60 * 60){
      dateString = Math.floor(diff/(60*60)) + " hours ago";
    }else if(diff < 30 * 24 * 60 * 60){
      dateString = Math.floor(diff/(24*60*60)) + " days ago";
    }else if(diff < 12 * 30 * 24 * 60 * 60){
      dateString = Math.floor(diff/(30*24*60*60)) + " months ago";
    }else{
      dateString = Math.floor(diff/(12*30*24*60*60)) + " years ago";
    }
    return dateString;
  }

}
