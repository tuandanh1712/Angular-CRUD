import { contact } from './../contact.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  data: undefined | contact[];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getcontact();
  }
  getcontact() {
    this.api.getContact().subscribe((res) => {
      this.data = res as contact[];
      this.data.shift();
      console.log(this.data);
    });
  }
  delete(id: number | undefined) {
    this.api.deleteContact(id).subscribe((item) => {
      alert('Contact deleted successly');
      this.getcontact();
    });
  }
  logout() {
    localStorage.removeItem('logindata');
    localStorage.removeItem('userData');
  }
}
