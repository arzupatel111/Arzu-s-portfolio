import { useState } from 'react';
import { Search, MapPin, Building, Briefcase, Filter } from 'lucide-react';

export default function JobPortal() {
    const [searchTerm, setSearchTerm] = useState('');

    const jobs = [
        {
            id: 1,
            role: 'Frontend Engineer',
            company: 'Google',
            location: 'Bangalore, India',
            type: 'Full Time',
            experience: '2-4 years',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
            tags: ['React', 'JavaScript', 'TypeScript']
        },
        {
            id: 2,
            role: 'Software Development Engineer I',
            company: 'Amazon',
            location: 'Hyderabad, India',
            type: 'Full Time',
            experience: 'Fresher',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
            tags: ['Java', 'AWS', 'DSA']
        },
        {
            id: 3,
            role: 'MTS 1',
            company: 'Adobe',
            location: 'Noida, India',
            type: 'Full Time',
            experience: '1-3 years',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',
            tags: ['C++', 'React', 'Algorithms']
        }
    ];

    return (
        <div className="container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">Job Portal</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Find and apply for the best career opportunities.</p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '1rem', boxShadow: 'var(--card-shadow)', marginBottom: '3rem', border: '1px solid var(--card-border)' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-secondary)', borderRadius: '0.5rem', padding: '0.5rem 1rem' }}>
                        <Search size={20} color="var(--text-tertiary)" />
                        <input
                            type="text"
                            placeholder="Job title, keywords, or company..."
                            style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0.5rem', width: '100%', color: 'var(--text-primary)' }}
                        />
                    </div>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Filter size={20} /> Search Jobs
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2">
                {jobs.map(job => (
                    <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '60px', height: '60px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', border: '1px solid #e5e7eb' }}>
                                    <img src={job.logo} alt={job.company} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.role}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{job.company}</p>
                                </div>
                            </div>
                            <span className="badge" style={{ backgroundColor: 'var(--accent-light)' }}>
                                {job.type}
                            </span>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <MapPin size={16} /> {job.location}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <Briefcase size={16} /> {job.experience}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {job.tags.map(tag => (
                                <span key={tag} style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 500 }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)' }}>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
