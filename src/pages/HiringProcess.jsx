import { Building2, FileText, CheckCircle2 } from 'lucide-react';

export default function HiringProcess() {
    const companies = [
        {
            name: 'TCS Ninja & Digital',
            eligibility: 'B.Tech/BE (60% equivalent)',
            rounds: ['Online Aptitude & Coding Test', 'Technical Interview', 'HR Interview'],
            syllabus: 'Numerical Ability, Verbal, Reasoning, 2 Coding questions.'
        },
        {
            name: 'Infosys (SP & DSE)',
            eligibility: 'B.Tech/BE across branches (65% equivalent)',
            rounds: ['Online Assessment', 'Technical + HR Interview'],
            syllabus: 'Logical deduction, Pseudo code, Advanced Coding.'
        },
        {
            name: 'Amazon SDE',
            eligibility: 'B.Tech/BE/M.Tech in CS/IT',
            rounds: ['Online Assessment (2 DSA req)', '2-3 Technical Rounds', 'Bar Raiser Round'],
            syllabus: 'Advanced DSA, System Design, LPs (Leadership Principles).'
        }
    ];

    return (
        <div className="container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">Hiring Processes</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Understand exam patterns, syllabus, and eligibility criteria for top companies.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {companies.map((company, idx) => (
                    <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--accent-light)', borderRadius: '12px' }}>
                                <Building2 size={28} color="var(--accent-color)" />
                            </div>
                            <h2 style={{ fontSize: '1.5rem' }}>{company.name}</h2>
                        </div>

                        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                            <div>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                                    <CheckCircle2 size={18} /> Eligibility
                                </h4>
                                <p style={{ fontWeight: 500 }}>{company.eligibility}</p>
                            </div>

                            <div>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                                    <FileText size={18} /> Syllabus
                                </h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{company.syllabus}</p>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Exam Rounds</h4>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                                    {company.rounds.map((round, i) => (
                                        <li key={i} style={{ marginBottom: '0.25rem' }}>{round}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
