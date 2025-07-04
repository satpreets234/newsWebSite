import React from 'react';

const ProfileStats: React.FC = () => {
  // Placeholder data
  const stats = {
    totalRead: 42,
    timeSpent: '3h 15m',
    favoriteCategories: ['Technology', 'Sports', 'Politics'],
  };

  return (
    <div className="container my-5" style={{ color: 'var(--soft-white)' }}>
      <h1 style={{ color: 'var(--primary-accent)' }}>Your Reading Stats</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card" style={{ background: 'var(--soft-grey)', color: 'var(--soft-white)', border: 'none', borderRadius: 12, padding: 24 }}>
            <h4>Total Articles Read</h4>
            <p style={{ fontSize: 32, fontWeight: 700 }}>{stats.totalRead}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ background: 'var(--soft-grey)', color: 'var(--soft-white)', border: 'none', borderRadius: 12, padding: 24 }}>
            <h4>Time Spent Reading</h4>
            <p style={{ fontSize: 32, fontWeight: 700 }}>{stats.timeSpent}</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card" style={{ background: 'var(--soft-grey)', color: 'var(--soft-white)', border: 'none', borderRadius: 12, padding: 24 }}>
            <h4>Favorite Categories</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {stats.favoriteCategories.map(cat => (
                <li key={cat} style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats; 