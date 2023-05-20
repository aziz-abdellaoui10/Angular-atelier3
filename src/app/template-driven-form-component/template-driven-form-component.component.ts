import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponent {
  formData = {
    name: '',
    email: '',
    cardType: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  };

  submitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // Logique de soumission du formulaire ici
    console.log(this.formData);
  }
}
