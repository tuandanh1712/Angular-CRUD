import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './component/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //post Method
  addContact(data: contact) {
    return this.http.post<contact>(`http://localhost:3000/posts`, data);
  }
  //get Method
  getContact() {
    return this.http.get<contact>('http://localhost:3000/posts');
  }
  //delete Method
  deleteContact(id: number | undefined) {
    return this.http.delete<contact>(`http://localhost:3000/posts/` + id);
  }
  //fecth data for edit
  fecthData(id: number) {
    return this.http.get<contact>('http://localhost:3000/posts/' + id);
  }
  //update data
  updateContact(data: contact, id: number) {
    return this.http.put<contact>('http://localhost:3000/posts/' + id, data);
  }
}
