import React from 'react';
import { INSTAGRAM, VIDEOS } from '../data';

export interface VideoProjectsProps {}

const VideoProjects: React.FC<VideoProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Videos</h1>
            <h3>On Film</h3>
            <br />
            <div className="text-block">
                <p>
                    {INSTAGRAM.videoCount} videos on building with AI tooling —
                    Claude Code, MCP, agents that actually ship. Mostly in
                    Malayalam, because that's who I'm talking to.{' '}
                    {INSTAGRAM.followers} people are following along on{' '}
                    <a rel="noreferrer" target="_blank" href={INSTAGRAM.href}>
                        {INSTAGRAM.handle}
                    </a>
                    .
                </p>
                <br />
                <p>Here are the three I've pinned. Start with the first one.</p>
            </div>
            {VIDEOS.map((video, i) => (
                <div className="text-block" key={video.id}>
                    <h2>{video.title}</h2>
                    <p>
                        <sub>
                            <b>
                                {video.lang === 'ml' ? 'Malayalam' : 'English'}
                            </b>
                        </sub>
                    </p>
                    <br />
                    <p>{video.note}</p>
                    <br />
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={video.permalink}
                        style={styles.posterLink}
                    >
                        <div className="captioned-image">
                            <img
                                src={video.poster}
                                style={styles.poster}
                                alt={video.title}
                            />
                            <p>
                                <sub>
                                    <b>Figure {i + 1}:</b> {video.title} —
                                    click to watch on Instagram
                                </sub>
                            </p>
                        </div>
                    </a>
                </div>
            ))}
            <div className="text-block">
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={INSTAGRAM.href}
                        >
                            <p>
                                <b>[Instagram]</b> - Watch all{' '}
                                {INSTAGRAM.videoCount} on {INSTAGRAM.handle}
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    posterLink: {
        alignSelf: 'center',
        width: '40%',
        textDecoration: 'none',
        color: 'inherit',
    },
    poster: {
        width: '100%',
        height: 'auto',
    },
};

export default VideoProjects;
