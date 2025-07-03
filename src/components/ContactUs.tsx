'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Tab, Tabs } from 'react-bootstrap';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('contact');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [feedbackForm, setFeedbackForm] = useState({ name: '', feedback: '', rating: 0 });
  const [contactErrors, setContactErrors] = useState<any>({});
  const [feedbackErrors, setFeedbackErrors] = useState<any>({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFeedbackForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
  });

  const feedbackSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    feedback: yup.string().min(5, 'Feedback must be at least 5 characters'),
    rating: yup.number().min(1, 'Please provide a rating').max(5),
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactSchema.validate(contactForm, { abortEarly: false });
      setContactErrors({});
      setContactSubmitted(true);
      // API call for contact
    } catch (err: any) {
      const errObj: any = {};
      err.inner?.forEach((e: any) => {
        errObj[e.path] = e.message;
      });
      setContactErrors(errObj);
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await feedbackSchema.validate(feedbackForm, { abortEarly: false });
      setFeedbackErrors({});
      setFeedbackSubmitted(true);
      // API call for feedback
    } catch (err: any) {
      const errObj: any = {};
      err.inner?.forEach((e: any) => {
        errObj[e.path] = e.message;
      });
      setFeedbackErrors(errObj);
    }
  };

  return (
    <section className="container my-5">
      <h2>{t('contactUs')}</h2>
      <Tabs activeKey={tab} onSelect={eventKey => setTab(eventKey || 'contact')} className="mb-3">
        <Tab eventKey="contact" title={t('contactUs')}>
          {contactSubmitted ? (
            <div className="alert alert-success">Thank you for contacting us!</div>
          ) : (
            <form onSubmit={handleContactSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">{t('name')}</label>
                <input type="text" className="form-control" id="name" name="name" value={contactForm.name} onChange={handleContactChange} required />
                {contactErrors.name && <div className="text-danger small">{contactErrors.name}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">{t('email')}</label>
                <input type="email" className="form-control" id="email" name="email" value={contactForm.email} onChange={handleContactChange} required />
                {contactErrors.email && <div className="text-danger small">{contactErrors.email}</div>}
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">{t('message')}</label>
                <textarea className="form-control" id="message" name="message" rows={4} value={contactForm.message} onChange={handleContactChange} required />
                {contactErrors.message && <div className="text-danger small">{contactErrors.message}</div>}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">{t('send')}</button>
              </div>
            </form>
          )}
        </Tab>
        <Tab eventKey="feedback" title={t('feedback')}>
          {feedbackSubmitted ? (
            <div className="alert alert-success">Thank you for your feedback!</div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="row g-3">
              <div className="col-12">
                <label htmlFor="feedbackName" className="form-label">{t('name')}</label>
                <input type="text" className="form-control" id="feedbackName" name="name" value={feedbackForm.name} onChange={handleFeedbackChange} required />
                {feedbackErrors.name && <div className="text-danger small">{feedbackErrors.name}</div>}
              </div>
              <div className="col-12">
                <label className="form-label">{t('feedback')}</label>
                <textarea className="form-control" name="feedback" rows={3} value={feedbackForm.feedback} onChange={handleFeedbackChange} placeholder={t('feedbackPlaceholder') || 'Your feedback...'} />
                {feedbackErrors.feedback && <div className="text-danger small">{feedbackErrors.feedback}</div>}
              </div>
              <div className="col-12 d-flex align-items-center gap-2">
                <label className="form-label mb-0">{t('rating')}</label>
                {[1,2,3,4,5].map(star => (
                  <span key={star} style={{ cursor: 'pointer', color: feedbackForm.rating >= star ? '#FFD700' : '#ccc', fontSize: 24 }} onClick={() => setFeedbackForm(f => ({ ...f, rating: star }))}>&#9733;</span>
                ))}
                {feedbackErrors.rating && <div className="text-danger small ms-2">{feedbackErrors.rating}</div>}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">{t('send')}</button>
              </div>
            </form>
          )}
        </Tab>
      </Tabs>
    </section>
  );
};

export default ContactUs;
