"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || 'Login failed');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: 400, background: 'var(--primary-dark)', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.2)', padding: 32 }}>
      <h2 className="mb-4" style={{ color: 'var(--primary-accent)' }}>{t('login')}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <label htmlFor="email" className="form-label" style={{ color: 'var(--soft-white)' }}>{t('email')}</label>
          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required style={{ background: 'var(--soft-grey)', color: 'var(--soft-white)', border: '1px solid var(--accent-grey)' }} />
        </div>
        <div className="col-12">
          <label htmlFor="password" className="form-label" style={{ color: 'var(--soft-white)' }}>{t('password')}</label>
          <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} required style={{ background: 'var(--soft-grey)', color: 'var(--soft-white)', border: '1px solid var(--accent-grey)' }} />
        </div>
        {error && <div className="col-12 text-danger small">{error}</div>}
        <div className="col-12">
          <button type="submit" className="btn w-100" disabled={loading} style={{ background: 'var(--primary-accent)', color: 'var(--soft-white)', borderRadius: 8, fontWeight: 500 }}>
            {loading ? t('loading') : t('login')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 