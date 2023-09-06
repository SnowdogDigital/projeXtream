import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Note } from '../interfaces/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = 'http://localhost:3000/notes'

  constructor(private host: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.host.get<Note[]>(this.apiUrl);
  }

  getNote(id: number): Observable<Note> {
      return this.host.get<Note>(`${this.apiUrl}/${id}`);
}
}
