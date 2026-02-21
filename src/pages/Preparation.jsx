import { useState } from 'react';
import { BookOpen, Puzzle, FileCode2, Users, CheckCircle } from 'lucide-react';

export default function Preparation() {
    const [activeTab, setActiveTab] = useState('dsa');

    const tabs = [
        { id: 'aptitude', name: 'Aptitude', icon: <Puzzle size={20} /> },
        { id: 'dsa', name: 'DSA', icon: <FileCode2 size={20} /> },
        { id: 'technical', name: 'Technical Core', icon: <BookOpen size={20} /> },
        { id: 'hr', name: 'HR Interview', icon: <Users size={20} /> }
    ];

    const content = {
        aptitude: [
            { title: 'Quantitative Aptitude', lessons: '25 Topics', type: 'Notes & Practice' },
            { title: 'Logical Reasoning', lessons: '18 Topics', type: 'Practice Sets' },
            { title: 'Verbal Ability', lessons: '12 Topics', type: 'Mock Tests' }
        ],
        dsa: [
            { title: 'Arrays & Strings Fundamentals', lessons: '50 Problems', type: 'Notes & Practice' },
            { title: 'Linked Lists, Stacks & Queues', lessons: '45 Problems', type: 'Concept Video & Practice' },
            { title: 'Trees & Graphs Deep Dive', lessons: '60 Problems', type: 'Advanced Practice' }
        ],
        technical: [
            { title: 'Operating Systems', lessons: '8 Chapters', type: 'Notes' },
            { title: 'Database Management (DBMS)', lessons: '10 Chapters', type: 'Notes & SQL Queries' },
            { title: 'Computer Networks', lessons: '7 Chapters', type: 'Theory Notes' }
        ],
        hr: [
            { title: 'Top 50 HR Questions', lessons: 'Behavioral Prep', type: 'Answers & Tips' },
            { title: 'Resume Building Guide', lessons: 'Templates included', type: 'Guide' },
            { title: 'Mock Interview Scenarios', lessons: 'STAR Method', type: 'Practice' }
        ]
    };

    return (
        <div className="container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">Preparation Hub</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Master every round of your interview process.</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            backgroundColor: activeTab === tab.id ? 'var(--accent-color)' : 'var(--card-bg)',
                            color: activeTab === tab.id ? 'var(--btn-text)' : 'var(--text-secondary)',
                            border: `1px solid ${activeTab === tab.id ? 'var(--accent-color)' : 'var(--card-border)'}`,
                            borderRadius: '9999px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: activeTab === tab.id ? 'var(--card-shadow)' : 'none'
                        }}
                    >
                        {tab.icon} {tab.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3">
                {content[activeTab].map((item, idx) => (
                    <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ backgroundColor: 'var(--accent-light)', padding: '1rem', borderRadius: '12px', display: 'inline-block', width: 'fit-content', marginBottom: '1rem' }}>
                            <BookOpen size={24} color="var(--accent-color)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{item.lessons}</p>
                        <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '2rem' }}>{item.type}</span>

                        <button className="btn btn-secondary" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            Start Learning <CheckCircle size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
