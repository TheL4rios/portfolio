import { useTranslation } from 'react-i18next';
import { Project } from 'src/core/interfaces/project.interface';

export const MyProjects = () => {
    const [t] = useTranslation('myProjects');
    const projects: Project[] = t('main.projects', { returnObjects: true });

    return (
        <div className='container mx-auto'>
            <h1 className='text-center mt-[70px] text-4xl font-semibold'>{`${t('main.title')} `}</h1>
            {
                projects.map(project => (
                    <div>
                        { project.description }
                    </div>
                ))
            }
        </div>
    )
}
