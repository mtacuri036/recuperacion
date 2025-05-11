import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.page.html',
})
export class HomePage {
  form: FormGroup;
  categorias = ['Conferencia', 'Taller', 'Seminario', 'Networking'];
  etiquetas = ['Tecnología', 'Negocios', 'Salud', 'Educación'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      categoria: ['', Validators.required],
      etiquetas: [[]],
      ubicacion: [''],
      gratuito: [false],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
      // Aquí puedes enviar a Firebase si lo deseas
    }
  }
}

