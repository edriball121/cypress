import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PlaceholderService } from 'src/app/services/placeholders/placeholder.service';

@Component({
  selector: 'app-list-placeholders',
  templateUrl: './list-placeholders.component.html',
  styleUrls: [ './list-placeholders.component.css' ]
})
export class ListPlaceholdersComponent implements OnInit {
  User: any;
  Comments: any;
  form: FormGroup;
  //paginación
  p: number = 1;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _PlaceholderService: PlaceholderService,
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this._PlaceholderService.getUsers().subscribe(respuesta => {
      console.log(respuesta);
      this.User = respuesta;
    });

    this._PlaceholderService.getComments().subscribe(respuesta => {
      console.log(respuesta);
      this.Comments = respuesta;
    });
  }
}
