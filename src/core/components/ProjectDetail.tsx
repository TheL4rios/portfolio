import { Project } from 'src/core/interfaces/translations/project.interface';
import { projectImages } from 'src/core/constants/projectImages';

import arrowImage from 'src/assets/arrow.svg' ;

export const ProjectDetail = ({ project }: { project: Project; }) => {
    return (
        <div className="p-6">
            <div className="group">
                <div className="relative w-full flex flex-col">
                    <div className='relative'>
                        <img draggable={ false } className="h-auto object-cover rounded-3xl" src={projectImages[project.imgId]} alt={project.description} />
                        <a href={project.url} rel='noopenner noreferrer' target='_blank' className="bg-white absolute left-8 bottom-8 rounded-full p-2 btn-link"> 
                            <img draggable={ false } src={arrowImage} className='w-[20px]' alt='link to web'/>
                        </a>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <span className='font-bold text-2xl'>{ project.name }</span>
                        <span className='mb-4 mt-3'>{project.description}</span>

                        <div>
                            {
                                project.technologies.map((technique) => (
                                    <span key={technique} className="transition-all hover:scale-110 mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                        { technique }
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
