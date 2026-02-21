import { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, CheckSquare, Square } from 'lucide-react';

export default function DSAPrep() {
    const initialTopics = [
        {
            id: 1,
            name: 'Arrays',
            total: 15,
            completed: 3,
            isOpen: true,
            questions: [
                { id: 'q1', title: 'Two Sum', difficulty: 'Easy', link: '#', done: true },
                { id: 'q2', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: '#', done: true },
                { id: 'q3', title: 'Next Permutation', difficulty: 'Medium', link: '#', done: true },
                { id: 'q4', title: 'Kadane\'s Algorithm', difficulty: 'Medium', link: '#', done: false },
                { id: 'q5', title: 'Trapping Rain Water', difficulty: 'Hard', link: '#', done: false }
            ]
        },
        {
            id: 2,
            name: 'Linked Lists',
            total: 10,
            completed: 0,
            isOpen: false,
            questions: [
                { id: 'q6', title: 'Reverse a Linked List', difficulty: 'Easy', link: '#', done: false },
                { id: 'q7', title: 'Detect Cycle', difficulty: 'Easy', link: '#', done: false },
                { id: 'q8', title: 'Merge Two Sorted Lists', difficulty: 'Medium', link: '#', done: false }
            ]
        }
    ];

    const [topics, setTopics] = useState(initialTopics);

    const toggleTopic = (id) => {
        setTopics(topics.map(t => t.id === id ? { ...t, isOpen: !t.isOpen } : t));
    };

    const toggleQuestion = (topicId, qId) => {
        setTopics(topics.map(topic => {
            if (topic.id === topicId) {
                let completedDiff = 0;
                const newQuestions = topic.questions.map(q => {
                    if (q.id === qId) {
                        completedDiff = q.done ? -1 : 1;
                        return { ...q, done: !q.done };
                    }
                    return q;
                });
                return { ...topic, questions: newQuestions, completed: topic.completed + completedDiff };
            }
            return topic;
        }));
    };

    const getDifficultyColor = (difficulty) => {
        if (difficulty === 'Easy') return '#10b981';
        if (difficulty === 'Medium') return '#f59e0b';
        return '#ef4444';
    };

    return (
        <div className="container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="text-gradient">Dedicated DSA Prep</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Track your progress with structured, topic-wise DSA sheets.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {topics.map(topic => {
                    const progressPercent = Math.round((topic.completed / topic.questions.length) * 100);

                    return (
                        <div key={topic.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                            <div
                                onClick={() => toggleTopic(topic.id)}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', cursor: 'pointer', backgroundColor: 'var(--bg-secondary)' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Code2 size={24} color="var(--accent-color)" />
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>{topic.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{topic.completed} / {topic.questions.length} completed</p>

                                            {/* Simple Progress bar */}
                                            <div style={{ width: '100px', height: '6px', backgroundColor: 'var(--card-border)', borderRadius: '3px', overflow: 'hidden' }}>
                                                <div style={{ height: '100%', width: `${progressPercent}%`, backgroundColor: 'var(--accent-color)', transition: 'width 0.3s ease' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {topic.isOpen ? <ChevronUp size={24} color="var(--text-tertiary)" /> : <ChevronDown size={24} color="var(--text-tertiary)" />}
                            </div>

                            {topic.isOpen && (
                                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--card-border)' }}>
                                    {topic.questions.map(q => (
                                        <div key={q.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid var(--card-border)', transition: 'background-color 0.2s ease' }} className="question-row">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <button
                                                    onClick={() => toggleQuestion(topic.id, q.id)}
                                                    style={{ background: 'transparent', color: q.done ? 'var(--accent-color)' : 'var(--text-tertiary)', padding: 0 }}
                                                >
                                                    {q.done ? <CheckSquare size={22} /> : <Square size={22} />}
                                                </button>
                                                <a href={q.link} style={{ color: q.done ? 'var(--text-secondary)' : 'var(--text-primary)', textDecoration: q.done ? 'line-through' : 'none', fontWeight: 500, fontSize: '1rem' }}>
                                                    {q.title}
                                                </a>
                                            </div>
                                            <span className="badge" style={{ backgroundColor: 'transparent', border: `1px solid ${getDifficultyColor(q.difficulty)}`, color: getDifficultyColor(q.difficulty) }}>
                                                {q.difficulty}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <style>{`
        .question-row:last-child {
          border-bottom: none !important;
        }
        .question-row:hover {
          background-color: var(--bg-secondary);
          border-radius: 8px;
        }
      `}</style>
        </div>
    );
}
