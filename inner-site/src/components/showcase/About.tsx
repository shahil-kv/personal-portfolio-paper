import React from 'react';
import me from '../../assets/pictures/shahil/me.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import { AUTOMATED, INSTAGRAM, STACK, WHATSAPP } from './data';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Shahil KV</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a developer and founder from Kerala. I build automation
                    for businesses that are still doing things by hand, and I
                    film the process so other people can copy it.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. If
                    you're working on something that should be automated and
                    isn't, tell me what it is using{' '}
                    <Link to="/contact">this page</Link> or send me a message
                    on{' '}
                    <a rel="noreferrer" target="_blank" href={WHATSAPP.href}>
                        WhatsApp
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Most of my work sits in the same place: a repetitive
                    process, a person spending hours on it, and software that
                    could have handled it. That led to{' '}
                    <Link to="/projects/software">Flaro</Link>, a calling agent
                    that speaks Malayalam so small businesses stop losing
                    customers to a phone nobody answers.
                </p>
                <br />
                <div style={styles.split}>
                    <div style={styles.splitText}>
                        <p>
                            Before that I spent two years on health-and-safety
                            and permit-to-work systems for oil and gas sites,
                            which is where I learned that the hard part is never
                            the code. You can read more about that on my{' '}
                            <Link to="/experience">Experience</Link> page.
                        </p>
                        <br />
                        <p>
                            The videos started as notes to myself. I was
                            learning Claude Code, MCP and agent tooling, and
                            recording it turned out to be the fastest way to
                            find the parts I didn't understand. Most of them are
                            in Malayalam, because the people I most want to
                            reach aren't served by English tutorials. You can
                            find a few of them on my{' '}
                            <Link to="/projects/videos">Videos</Link> page.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={me} style={styles.image} alt="Shahil KV" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Me, shot on the same phone as the videos
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <h3>What I've Automated</h3>
                <br />
                <p>
                    All of these started as something someone did by hand:
                </p>
                <ul>
                    {AUTOMATED.map((item) => (
                        <li key={item}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
                <br />
                <h3>My Stack</h3>
                <br />
                <p>
                    What I reach for. Nothing here is a percentage bar — either
                    I've shipped something with it or it isn't on the list.
                </p>
                <br />
                {STACK.map((group) => (
                    <div key={group.group} style={styles.stackRow}>
                        <p style={styles.stackGroup}>
                            <b>{group.group}:</b>
                        </p>
                        <p>{group.items.join(', ')}</p>
                    </div>
                ))}
                <br />
                <h3>Education</h3>
                <br />
                <p>
                    B.Sc. Computer Science, Blossom Arts &amp; Science College —
                    University of Calicut, Kerala (2021).
                </p>
                <br />
                <br />
                <p>
                    Thanks for reading about me! Kerala, India — no hype, just
                    real. New builds go up first on Instagram at{' '}
                    <a rel="noreferrer" target="_blank" href={INSTAGRAM.href}>
                        {INSTAGRAM.handle}
                    </a>
                    , and if you have any questions or comments you can reach
                    me through the <Link to="/contact">contact page</Link>.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
    split: {
        alignItems: 'flex-start',
    },
    splitText: {
        flex: 1,
        textAlign: 'justify',
        flexDirection: 'column',
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    stackRow: {
        marginBottom: 8,
    },
    stackGroup: {
        minWidth: 220,
    },
};

export default About;
