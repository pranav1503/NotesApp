import { EventEmitter } from "@angular/core";
import { NotesModel } from "./notes.model";

export class NotesService{

    noteAddedEvent: EventEmitter<string> = new EventEmitter<string>();

    private notes: NotesModel[] = [
        new NotesModel(
            'This is new note 1',
            'This is some note with some big length and all so idk what it is all about just for the sake of the length',
            new Date('2019-05-21 8:25')
        ),
        new NotesModel(
            'This is new note 2',
            'This is some note with some big length and all so idk what it is all about just for the sake of the length',
            new Date('2021-12-18 21:30')
        ),  
        new NotesModel(
            'This is new note 3',
            'This is some note with some big length and all so idk what it is all about just for the sake of the length',
            new Date('2021-12-24 21:30')
        ),      
    ];

    getNotes(){
        return this.notes.slice();
    }

    addNewNote(title: string, note: string){
        this.notes.push(
            new NotesModel(
                title,
                note,
                new Date()
            )
        );
        this.noteAddedEvent.emit('A new note was added.');
    }

    getOneNote(id: number){
        return this.notes.slice(id, id+1)[0];
    }

    editNote(id: number, title:string, note:string){
        this.notes[id] = new NotesModel(
            title,
            note,
            new Date()
        );
        this.noteAddedEvent.emit('The note was successfully edited.');
    }

    deleteNote(id: number){
        this.notes.splice(id,1);
        this.noteAddedEvent.emit('The note was successfully deleted.');
    }
}