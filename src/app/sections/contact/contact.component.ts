import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  project = '';
  message = '';
  status = '';

  onInput(field: HTMLInputElement | HTMLTextAreaElement): void {
    const parent = field.closest('.form-field');
    if (parent) {
      parent.classList.toggle('filled', field.value.length > 0);
    }
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    const n = this.name.trim();
    const em = this.email.trim();
    const msg = this.message.trim();

    if (!n || !em || !msg) {
      this.status = 'Please fill in your name, email and message.';
      return;
    }

    const subject = encodeURIComponent('Project inquiry from ' + n);
    const body = encodeURIComponent(msg + '\n\n— ' + n + ' (' + em + ')');
    this.status = 'Opening your email client to send this message…';
    window.location.href = `mailto:hello@arijesama.dev?subject=${subject}&body=${body}`;
  }
}
