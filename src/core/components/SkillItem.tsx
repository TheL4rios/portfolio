import { Skill } from '../interfaces/skill.interface';

export const SkillItem = ({ skill }: { skill: Skill }) => {
    return (
        <div className='p-3 flex flex-col justify-end items-center m-3 w-[120px] sm:w-[128px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <img className='w-[64px]' src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
        </div>
    )
}
