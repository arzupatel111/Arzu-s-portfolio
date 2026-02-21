import { Link } from 'react-router-dom';
import { Briefcase, BookOpen, Building, Code2, ArrowRight } from 'lucide-react';

export default function Home() {
    const features = [
        {
            title: "Job Portal",
            description: "Find your dream job with real-time postings tailored to your skills and preferences.",
            icon: <Briefcase size={32} color="var(--accent-color)" />,
            path: "/job-portal",
            tag: "Live"
        },
        {
            title: "Complete Preparation",
            description: "Aptitude, DSA, Technical, and HR preparation materials with extensive notes and practice problems.",
            icon: <BookOpen size={32} color="#a855f7" />,
            path: "/preparation",
            tag: "Comprehensive"
        },
        {
            title: "Hiring Process",
            description: "Detailed exam patterns, syllabus, and eligibility criteria for top tech companies.",
            icon: <Building size={32} color="#ec4899" />,
            path: "/hiring-process",
            tag: "Insights"
        },
        {
            title: "Dedicated DSA Prep",
            description: "Detailed topic-wise DSA sheets to conquer data structures and algorithms effectively.",
            icon: <Code2 size={32} color="#14b8a6" />,
            path: "/dsa-prep",
            tag: "Mastery"
        }
    ];

    return (
        <div className="container animate-fade-in">
            <section style={{ padding: '4rem 1rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'inline-block', marginBottom: '1.5rem', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.875rem' }}>
                    🚀 Welcome to the Future of Career Prep
                </div>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Your Gateway to  <br /> <span className="text-gradient">Tech Excellence</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                    Welcome to Arzu's Portfolio. A comprehensive platform combining a powerful job portal
                    with top-tier preparation materials to help you land your dream tech role.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/job-portal" className="btn btn-primary" style={{ fontSize: '1.125rem' }}>
                        Explore Jobs <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                    <Link to="/dsa-prep" className="btn btn-secondary" style={{ fontSize: '1.125rem' }}>
                        Start DSA Prep
                    </Link>
                </div>
            </section>

            <section style={{ padding: '4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Everything You Need</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        All-in-one platform covering everything from your first practice problem to your final HR round.
                    </p>
                </div>

                <div className="grid grid-cols-2">
                    {features.map((feature, idx) => (
                        <Link to={feature.path} key={idx} style={{ textDecoration: 'none' }}>
                            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                                <span className="badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                                    {feature.tag}
                                </span>
                                <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', display: 'inline-flex', width: 'fit-content' }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '1.5rem' }}>
                                    {feature.description}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)', fontWeight: 600, marginTop: 'auto' }}>
                                    Explore module <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
