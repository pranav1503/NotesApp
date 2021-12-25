import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canDeactivateGuardService } from "./notes-list/can-deactivate-guard.service";
import { NotSelectedComponent } from "./notes-list/not-selected/not-selected.component";
import { NoteEditComponent } from "./notes-list/note-edit/note-edit.component";
import { NotesListComponent } from "./notes-list/notes-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoute: Routes = [
    {path: '', redirectTo: 'notes', pathMatch: 'full'},
    {path: 'notes', component: NotesListComponent, children:[
      {path: '', component: NotSelectedComponent},
      {path: 'new', component: NoteEditComponent},
      {path: ':id', component: NoteEditComponent, canDeactivate: [canDeactivateGuardService]}
    ]},  
    {path: '**', component: PageNotFoundComponent}
 ]

 @NgModule({
   imports: [
     RouterModule.forRoot(appRoute)
   ],
   exports: [
     RouterModule
   ]
 })
 export class AppRoutingModule{

 }