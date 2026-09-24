import React from 'react';
import ResumeDownload from './ResumeDownload';
import { EXPERIENCE } from './data';

// "https://www.valcareconsulting.com/" -> "www.valcareconsulting.com"
const prettyUrl = (href: string) => {
    const host = href.replace(/^https?:\/\//, '').split('/')[0];
    return host.startsWith('www.') ? host : `www.${host}`;
};

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div className="text-block">
                <p>
                    Four years, three cities and one company of my own.
                    Freelance work sits at the top because it's what I'm doing
                    right now — two of these are running at the same time.
                </p>
            </div>
            {EXPERIENCE.map((role) => (
                <React.Fragment key={role.id}>
                    <div style={styles.headerContainer}>
                        <div style={styles.header}>
                            <div style={styles.headerRow}>
                                <h1>{role.org}</h1>
                                {role.href && (
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={role.href}
                                    >
                                        <h4>{prettyUrl(role.href)}</h4>
                                    </a>
                                )}
                            </div>
                            <div style={styles.headerRow}>
                                <h3>
                                    {role.title}
                                    {role.current && (
                                        <span style={styles.now}> · NOW</span>
                                    )}
                                </h3>
                                <b>
                                    <p>{role.period}</p>
                                </b>
                            </div>
                            <div style={styles.headerRow}>
                                <p>
                                    <sub>{role.location}</sub>
                                </p>
                                <p>
                                    <sub>{role.type}</sub>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-block">
                        <p>{role.note}</p>
                        {role.bullets && (
                            <>
                                <br />
                                <ul>
                                    {role.bullets.map((bullet) => (
                                        <li key={bullet}>
                                            <p>{bullet}</p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    now: {
        color: 'red',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
