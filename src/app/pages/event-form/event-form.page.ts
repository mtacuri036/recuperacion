import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
})
export class EventFormPage {
  form: FormGroup;
  categorias = ['Conferencia', 'Taller', 'Webinar'];
  etiquetas = ['Online', 'Presencial', 'Gratuito', 'Pagado'];

  constructor(private fb: FormBuilder, private firestore: Firestore) {
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

  async onSubmit() {
    if (this.form.valid) {
      const ref = collection(this.firestore, 'eventos');
      await addDoc(ref, this.form.value);
      alert('Evento guardado con éxito');
      this.form.reset();
    }
  }
}
