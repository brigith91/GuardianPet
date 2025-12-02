import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  OperacionService,
  CrearOperacionDto,
  OperacionCatalog
} from '../../../../core/api/operacion.service';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  imports: [ CommonModule, ReactiveFormsModule],
  styleUrls: ['./operacion.component.scss'] // crea el archivo aunque esté vacío
})
export class OperacionComponent implements OnInit {

  fOperacion!: FormGroup;
  operaciones: OperacionCatalog[] = [];
  cargando = false;
  error = '';
  editando = false;
  idEditando: number | null = null;

  constructor(
    private fb: FormBuilder,
    private operacionService: OperacionService
  ) {}

  ngOnInit(): void {
    this.fOperacion = this.fb.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

    this.cargar();
  }

  cargar() {
    this.cargando = true;
    this.operacionService.listAll().subscribe({
      next: (data: OperacionCatalog[]) => {
        this.operaciones = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error cargando operaciones';
        this.cargando = false;
      }
    });
  }

  crear() {
    if (this.fOperacion.invalid) return;
    const dto: CrearOperacionDto = this.fOperacion.value;

    this.operacionService.create(dto).subscribe({
      next: () => {
        this.fOperacion.reset();
        this.cargar();
      },
      error: () => (this.error = 'Error creando operación')
    });
  }

  editar(op: OperacionCatalog) {
    this.editando = true;
    this.idEditando = op.id;
    this.fOperacion.patchValue({
      tipo: op.tipo,
      descripcion: op.descripcion
    });
  }

  guardarEdicion() {
    if (this.fOperacion.invalid || this.idEditando === null) return;
    const dto: CrearOperacionDto = this.fOperacion.value;

    this.operacionService.update(this.idEditando, dto).subscribe({
      next: () => {
        this.editando = false;
        this.idEditando = null;
        this.fOperacion.reset();
        this.cargar();
      },
      error: () => (this.error = 'Error actualizando operación')
    });
  }

  cancelarEdicion() {
    this.editando = false;
    this.idEditando = null;
    this.fOperacion.reset();
  }

  eliminar(id: number) {
    this.operacionService.delete(id).subscribe({
      next: () => this.cargar(),
      error: () => (this.error = 'Error eliminando operación')
    });
  }
}
