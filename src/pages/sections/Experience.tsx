import { useTranslation } from 'react-i18next';
import Wave from 'src/assets/wave.svg';
import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';

export const Experience = () => {

    const [t] = useTranslation('experience');
    const experiences: WorkExperience[] = t('experience.experiences', { returnObjects: true });

    return (
        <div className='relative'>
            <img src={Wave} alt='wave' />
            <div className='bg-[#141C3A] w-full h-auto'>
                <h1 className='text-center text-4xl text-white font-semibold absolute top-[200px] left-0 right-0 mx-auto'>{`${t('experience.title')}`}</h1>
                {
                    experiences.map(experience => (
                        <div>
                            <img src={ experience.urlLogo } alt={ experience.name } />
                            <div>
                                <span>
                                    <span className='font-semibold'>{ experience.name }</span> ({ experience.initDate } - { experience.endDate })
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}