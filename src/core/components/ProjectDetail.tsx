import { Project } from 'src/core/interfaces/translations/project.interface';
import { projectImages } from 'src/core/constants/projectImages';

import { useTranslation } from 'react-i18next';

export const ProjectDetail = ({ project }: { project: Project }) => {

    const [t] = useTranslation('myProjects');

    return (
        <div className="p-6">
            <div className="group">
                <div className="relative overflow-hidden">
                    <img className="h-auto sm:h-96 w-full object-cover" src={projectImages[project.imgId]} alt={project.description} />
                    <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-clip-padding backdrop-filter backdrop-blur-sm">
                        <span className='text-white mb-4'>{project.description}</span>
                        <a href={project.url} rel='noopenner noreferrer' target='_blank'>
                            <button type="button" className="duration-200 text-white hover:text-white border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                {`${t('main.btn')} `}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
