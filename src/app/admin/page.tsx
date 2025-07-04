import React from 'react';

// Mock user role (replace with real auth/session in production)
const user = { role: 'user' }; // Change to 'admin' to test admin access

const AdminDashboard: React.FC = () => {
  if (user.role !== 'admin') {
    return (
      <div className="container my-5" style={{ color: 'var(--text)' }}>
        <h1 style={{ color: 'var(--accent)' }}>Unauthorized</h1>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }
  return (
    <div className="container my-5" style={{ color: 'var(--text)' }}>
      <h1 style={{ color: 'var(--accent)' }}>Admin Dashboard</h1>
      <div className="row mt-4">
        <div className="col-md-3">
          <nav className="nav flex-column gap-2">
            <a className="nav-link" style={{ color: 'var(--accent)' }} href="#sources">Manage News Sources</a>
            <a className="nav-link" style={{ color: 'var(--accent)' }} href="#comments">Moderate Comments</a>
            <a className="nav-link" style={{ color: 'var(--accent)' }} href="#analytics">View Analytics</a>
            <a className="nav-link" style={{ color: 'var(--accent)' }} href="#users">Manage Users</a>
          </nav>
        </div>
        <div className="col-md-9">
          <section id="sources" className="mb-5">
            <h3>Manage News Sources</h3>
            <p>Coming soon: Add, edit, or remove news sources.</p>
          </section>
          <section id="comments" className="mb-5">
            <h3>Moderate Comments</h3>
            <p>Coming soon: Approve, delete, or review user comments.</p>
          </section>
          <section id="analytics" className="mb-5">
            <h3>Site Analytics</h3>
            <p>Coming soon: View site traffic, popular articles, and user engagement.</p>
          </section>
          <section id="users" className="mb-5">
            <h3>Manage Users</h3>
            <p>Coming soon: View, edit, or remove users.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 