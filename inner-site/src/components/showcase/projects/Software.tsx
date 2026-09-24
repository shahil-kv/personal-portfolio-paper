import React from 'react';
import ResumeDownload from '../ResumeDownload';
import ProjectEntry, { withFigures } from './ProjectEntry';
import { GITHUB, PROJECTS } from '../data';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    const projects = PROJECTS.filter((p) => p.kind !== 'Client work');

    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                A startup, and things I made because I wanted to know how they
                worked. Everything open source has its source linked below.
            </p>
            <br />
            <ResumeDownload />
            <br />
            {withFigures(projects).map(({ project, figure }) => (
                <ProjectEntry
                    key={project.id}
                    project={project}
                    figure={figure}
                />
            ))}
            <div className="text-block">
                <p>
                    There's more where these came from.{' '}
                    <a rel="noreferrer" target="_blank" href={GITHUB.repos}>
                        Browse every repo on GitHub
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
