"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const SignupPage: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || 'Signup failed');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4">{t('signup')}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <label htmlFor="email" className="form-label">{t('email')}</label>
          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label htmlFor="password" className="form-label">{t('password')}</label>
          <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        {error && <div className="col-12 text-danger small">{error}</div>}
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? t('loading') : t('signup')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage; 