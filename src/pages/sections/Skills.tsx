import { useTranslation } from 'react-i18next';
import { SkillItem } from 'src/core/components/SkillItem';

import { skills } from 'src/core/constants/skills';

export const Skills = () => {

    const [t] = useTranslation('skill');

    return (
        <div className="rounded-2xl shadow-lg mx-auto w-[90%] md:w-[60%] h-auto mt-[-100px] bg-white">
            <div className="sm:px-6 pb-12 md:pb-10">
                <div className="font-bold text-4xl mb-2 text-center py-[30px]">{ `${ t('card.title') }` }</div>
                <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-wrap justify-center'>
                        {
                            skills.map(skill => (
                                <SkillItem skill={skill} key={skill.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

