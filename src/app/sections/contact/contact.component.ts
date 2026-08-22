import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { I18nService } from '../../core/services/i18n.service';
import { environments } from '../../../environments/environment';

const EMAILJS_SERVICE_ID = environments.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = environments.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = environments.EMAILJS_PUBLIC_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  project = '';
  message = '';
  status = '';

  isLoading = false;
  isSubmitted = false;
  sendError: string | null = null;

  notification: { type: 'success' | 'error'; message: string } | null = null;
  private notificationTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(public i18n: I18nService) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  onInput(field: HTMLInputElement | HTMLTextAreaElement): void {
    const parent = field.closest('.form-field');
    if (parent) {
      parent.classList.toggle('filled', field.value.length > 0);
    }
  }

  async onSubmit(e: Event): Promise<void> {
    e.preventDefault();
    this.sendError = null;

    const n = this.name.trim();
    const em = this.email.trim();
    const msg = this.message.trim();

    // if (!n || n.length < 2 || !em || !EMAIL_REGEX.test(em) || !msg || msg.length < 20) {
    //   this.status = this.i18n.t('contact.statusEmpty');
    //   return;
    // }

    if (this.isLoading) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS config manquante:', {
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY,
      });
      this.sendError = this.i18n.t('contact.error');
      this.status = this.sendError;
      this.showNotification('error', this.sendError);
      return;
    }

    this.isLoading = true;
    this.status = this.i18n.t('contact.statusOpening');

    const proj = this.project.trim();

    const templateParams: Record<string, string> = {
      name: proj ? `${n} (${proj})` : n,
      email: em,
      contact: '—',
      subject: proj || this.i18n.t('contact.subjectPrefix') + n,
      message: msg,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      this.isSubmitted = true;
      this.status = this.i18n.t('contact.statusSent');
      this.showNotification('success', this.i18n.t('contact.statusSent'));
      this.resetForm();
    } catch (err: any) {
      console.error('EmailJS error:', err?.status, err?.text ?? err);
      this.sendError = this.i18n.t('contact.error');
      this.status = this.sendError;
      this.showNotification('error', this.sendError);
    } finally {
      this.isLoading = false;
    }
  }

  dismissNotification(): void {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
      this.notificationTimeout = null;
    }
    this.notification = null;
  }

  private showNotification(type: 'success' | 'error', message: string): void {
    this.notification = { type, message };

    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
    this.notificationTimeout = setTimeout(() => {
      this.notification = null;
      this.notificationTimeout = null;
    }, 5000);
  }

  private resetForm(): void {
    this.name = '';
    this.email = '';
    this.project = '';
    this.message = '';
  }
}
