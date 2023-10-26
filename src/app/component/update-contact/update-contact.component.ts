import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contact.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  public contacid!: number;
  public contactdata: contact = {} as contact;
  constructor(
    private api: ApiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param: Params) => {
      this.contacid = param['id'];
    });
    console.log(this.contacid);
    this.api.fecthData(this.contacid).subscribe((data: contact) => {
      this.contactdata = data;
      console.log(this.contactdata);
    });
  }
  update() {
    this.api
      .updateContact(this.contactdata, this.contacid)
      .subscribe((res: contact) => {
        alert('Data Update Successly!!');
        this.router.navigate(['/contactlist']);
      });
  }
}
