import { useTranslation } from 'react-i18next';

import { ProjectDetail } from 'src/core/components/ProjectDetail';
import { Project } from 'src/core/interfaces/translations/project.interface';

export const MyProjects = () => {

    const [t] = useTranslation('myProjects');
    const projects: Project[] = t('main.projects', { returnObjects: true });

    return (
        <div className='container mx-auto'>
            <h1 className='text-center mt-[70px] text-4xl font-semibold'>{`${t('main.title')} `}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                {
                    projects.map((project: Project, i: number) => (
                      <ProjectDetail project={project} key={i}/>  
                    ))
                }
            </div>
        </div>
    )
}
