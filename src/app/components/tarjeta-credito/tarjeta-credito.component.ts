import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: [ './tarjeta-credito.component.css' ]
})
export class TarjetaCreditoComponent implements OnInit {
  /*listTarjetas: any[] = [];*/
  form: FormGroup;
  Tarjetas: any;
  TituloAccion = 'Agregar';
  //declarar la variable id para poder completar el metodo de update
  Id: number | undefined;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    //Vamos a agregar el servicio
    private _TarjetaService: TarjetaService,
  ) {
    //restricciones del formulario de agregar tarjeta
    this.form = this.fb.group({
      titular: [ '', Validators.required ],
      numeroTarjeta: [ '', [ Validators.required, Validators.maxLength(16), Validators.minLength(16) ] ],
      fechaExpiracion: [ '', [ Validators.required, Validators.maxLength(5), Validators.minLength(5) ] ],
      cvv: [ '', [ Validators.required, Validators.maxLength(3), Validators.minLength(3) ] ],
      id: [ '' ]
    });

  }

  ngOnInit(): void {
    //Listar tarjetas
    this._TarjetaService.getTarjetas().subscribe(respuesta => {
      //console.log(respuesta);
      this.Tarjetas = respuesta;
      this.toastr.success("Se cargaron los registros de la base de datos correctamente", "Listar");
    });
  }

  //Agregar tarjetas
  saveTarjeta() {
    //Se obtienen los valores de la tarjeta del formulario
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
      id: this.form.get('id')?.value
    }
    //si el id es indefinido se entiende como que es un usuario nuevo e ingresa por esta opción que seria crear
    if (this.Id == undefined) {
      tarjeta.id = undefined;
      //se agrega una nueva tarjeta
      this._TarjetaService.AddTarjeta(tarjeta).subscribe(respuesta => {
        this.ngOnInit();
        this.form.reset();
        this.toastr.success("Se Agrego la tarjeta correctamente", "Guardar");
      });
      //sino, osea si el Id contiene valor quiere decir que lo que se quiere es realizar un editar
    } else {
      //Se edita una tarjeta
      this._TarjetaService.editTarjeta(this.Id, tarjeta).subscribe(respuesta => {
        this.TituloAccion = 'Editar';
        this.form.reset();
        this.ngOnInit();
        this.Id = undefined;
      });
    }
  }

  //Actualizar tarjeta
  selectTarjeta(tarjeta: any) {
    this.TituloAccion = 'Editar';
    this.Id = tarjeta.id;
    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv,
      id: tarjeta.id
    });
    this.toastr.success("Se cargaron los registros correctamente", "Editar");
  }

  //eliminar tarjetas
  deleteTarjeta(id: number, iControl: any) {
    if (window.confirm("¿Esta seguro que desea borrar el regsitro?"))
      this._TarjetaService.deleteTarjeta(id).subscribe((respuesta) => {
        this.Tarjetas.splice(iControl, 1);
        this.toastr.success("Se elimino la tarjeta correctamente", "Eliminación");
      });
  }
}
