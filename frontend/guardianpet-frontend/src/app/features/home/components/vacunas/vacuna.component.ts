import {
  CommonModule
} from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Mascota } from '../../../../core/api/pet.service';
import {
  VacunaService,
  VacunaCatalog,
  CrearVacunaDto
} from '../../../../core/api/vacuna.service';

@Component({  
  selector: 'app-vacuna',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacuna.component.html',
  styleUrls: ['./vacuna.component.scss']
})
export class VacunaComponent implements OnChanges {
  private vacunaApi = inject(VacunaService);

  @Input() pet!: Mascota;

  vacunas: VacunaCatalog[] = [];
  cargando = false;
  error?: string;

  nueva: {
    nombre: string;
    descripcion: string;
    
  } = {
    nombre: '',
    descripcion: '',
  };

  editando: VacunaCatalog | null = null;
  editModel: {
    nombre: string;
    descripcion: string;
  
  } = {
    nombre: '',
    descripcion: ''   ,
  };

  submitEditar(form: NgForm) {
    this.guardarEdicion();
  }

  cancelar() {
    this.editando = null;
  }
  
  cancelarEdicion() {
    this.editando = null;
    // this.editando.reset();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet'] && this.pet?.id)  {
      this.cargarVacunas();
    }
  }

  cargarVacunas() {
    this.cargando = true;
    this.error = undefined;

    this.vacunaApi.listAll().subscribe({
      next: (list: VacunaCatalog[]) => (this.vacunas = list || []),
      error: (e) => {
        this.error = e?.error?.message || 'No se pudieron cargar las vacunas';
        this.vacunas = [];
      },
      complete: () => (this.cargando = false)
    });
  }


  
  onSubmitNueva(form: NgForm) {
    if (!this.pet?.id || form.invalid) return;

    const payload: CrearVacunaDto = {
      nombre: this.nueva.nombre,
      descripcion: this.nueva.descripcion,
      
    };

    this.vacunaApi.create(payload).subscribe({
      next: (vacuna) => {
        this.vacunas = [...this.vacunas, vacuna];
        this.nueva = { nombre: '', descripcion: '' };
        form.resetForm();
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo crear la vacuna';
      }
    });
  }

    editar(v: VacunaCatalog) {
    this.editando = v;
    this.editModel = {
      nombre: v.nombre,
      descripcion: v.descripcion
    };
  }

  guardarEdicion() {
    if (!this.editando) return;

    const payload: CrearVacunaDto = {
      nombre: this.editModel.nombre,
      descripcion: this.editModel.descripcion,
    };

    this.vacunaApi.update(this.editando.id, payload).subscribe({
      next: (updated) => {
        this.vacunas = this.vacunas.map(v =>
          v.id === updated.id ? updated : v
        );
        this.editando = null;
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo actualizar la vacuna';
      }
    });
  }

  
  eliminar(id: number) {
    this.vacunaApi.delete(id).subscribe({
      next: () => {
        this.vacunas = this.vacunas.filter(v => v.id !== id);
      },
      error: (e) => {
        this.error = e?.error?.message || 'No se pudo eliminar la vacuna';
      }
    });
  }
}