import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './notes-list/note-item/note-item.component';
import { FormsModule } from '@angular/forms';
import { NoteEditComponent } from './notes-list/note-edit/note-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotSelectedComponent } from './notes-list/not-selected/not-selected.component';
import { AppRoutingModule } from './app-routing.module';
import { canDeactivateGuardService } from './notes-list/can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NoteItemComponent,
    NoteEditComponent,
    PageNotFoundComponent,
    NotSelectedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [canDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
