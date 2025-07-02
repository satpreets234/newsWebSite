'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add API call to send the message
  };

  return (
    <section className="container my-5">
      <h2>{t('contactUs')}</h2>
      {submitted ? (
        <div className="alert alert-success">Thank you for contacting us!</div>
      ) : (
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">{t('name')}</label>
            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">{t('email')}</label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">{t('message')}</label>
            <textarea className="form-control" id="message" name="message" rows={4} value={form.message} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">{t('send')}</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactUs;
