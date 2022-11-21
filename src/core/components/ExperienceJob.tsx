import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';

export const ExperienceJob = ({ experience }: { experience: WorkExperience }) => {
    return (
        <div className='flex items-start justify-center flex-col xl:flex-row px-5 sm:mx-auto'>
            <img src={experience.urlLogo} alt={experience.name} className='w-[100px] mx-auto xl:mr-[50px] mb-[50px] xl:mb-[0px]' />
            <div className='text-white text-lg'>
                <div>
                    <span className='font-semibold'>{experience.name}</span> ({experience.initDate} - {experience.endDate})
                    <br />
                    <span>{experience.description}</span>
                    <div className='mt-[20px]'>
                        {
                            experience.experience.map((txt: string, index: number) => (
                                <p key={index}>
                                    {txt}
                                    <br />
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
