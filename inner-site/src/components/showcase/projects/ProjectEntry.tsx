import React from 'react';
import { Project } from '../data';

export interface ProjectEntryProps {
    project: Project;
    figure?: number;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ project, figure }) => {
    return (
        <div className="text-block">
            <h2>{project.name}</h2>
            <p>
                <sub>
                    <b>
                        {project.kind} · {project.year} · {project.role}
                    </b>
                </sub>
            </p>
            <br />
            <p>{project.summary}</p>
            <br />
            {project.image && (
                <div className="captioned-image">
                    <img src={project.image} alt={project.name} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure {figure}:</b> {project.caption}
                        </sub>
                    </p>
                </div>
            )}
            <p>
                <b>Built with: </b>
                {project.stack.join(', ')}
            </p>
            {(project.live || project.github) && (
                <>
                    <br />
                    <h3>Links:</h3>
                    <ul>
                        {project.live && (
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={project.live}
                                >
                                    <p>
                                        <b>[Live]</b> - {project.name}
                                    </p>
                                </a>
                            </li>
                        )}
                        {project.github && (
                            <li>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href={project.github}
                                >
                                    <p>
                                        <b>[GitHub]</b> - {project.name}{' '}
                                        Repository
                                    </p>
                                </a>
                            </li>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
};

// Numbers only the projects that carry an image, in page order.
export const withFigures = (projects: Project[]) => {
    let n = 0;
    return projects.map((project) => ({
        project,
        figure: project.image ? ++n : undefined,
    }));
};

const styles: StyleSheetCSS = {
    caption: {
        width: '80%',
    },
};

export default ProjectEntry;
