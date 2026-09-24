import React from 'react';
import ResumeDownload from '../ResumeDownload';
import ProjectEntry, { withFigures } from './ProjectEntry';
import { PROJECTS } from '../data';

export interface ClientProjectsProps {}

const ClientProjects: React.FC<ClientProjectsProps> = (props) => {
    const projects = PROJECTS.filter((p) => p.kind === 'Client work');

    return (
        <div className="site-page-content">
            <h1>Client</h1>
            <h3>Work</h3>
            <br />
            <p>
                Products I've built for clients — from oil and gas sites in
                Oman to a Spanish-language build for a consultancy serving
                Europe and the Middle East. Newest freelance work is first.
            </p>
            <br />
            {withFigures(projects).map(({ project, figure }) => (
                <ProjectEntry
                    key={project.id}
                    project={project}
                    figure={figure}
                />
            ))}
            <ResumeDownload />
        </div>
    );
};

export default ClientProjects;
