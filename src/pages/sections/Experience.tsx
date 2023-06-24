import { useTranslation } from 'react-i18next';
import Wave from 'src/assets/wave.svg';
import { ExperienceJob } from 'src/core/components/ExperienceJob';
import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';
import { Skills } from './Skills';

export const Experience = () => {

    const [t] = useTranslation('experience');
    const experiences: WorkExperience[] = t('experience.experiences', { returnObjects: true });

    return (
        <div className='relative mt-[80px] xl:mt-[0px]'>
            <img src={Wave} alt='wave' className='min-h-[312px]'/>
            <div className='bg-[#141C3A] w-full h-auto pb-[200px]'>
                <h1 className='text-center text-4xl text-white font-semibold mb-[100px] md:mt-[-100px] xl:mt-[-150px]'>{`${t('experience.title')}`}</h1>
                <div className="mx-10 md:mx-0 xl:mt-[-50px] before:content-[''] before:h-full before:absolute md:before:left-1/2 before:w-1 before:bg-white pt-10 relative">
                    {
                        experiences.map((experience: WorkExperience, index: number) => (
                            <ExperienceJob experience={experience} index={index} key={experience.name} />
                        ))
                    }
                </div>
            </div>
            <Skills />
        </div>
    )
}