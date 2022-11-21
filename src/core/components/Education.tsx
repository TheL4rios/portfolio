import { IoSchool } from 'react-icons/io5';
import { AboutMeSchool } from 'src/core/interfaces/translations/about-me.interface';

export const Education = ({ school }: { school: AboutMeSchool }) => {
    return (
        <div className='flex items-center mt-[25px]'>
            <IoSchool className='text-4xl' />
            <div className='ml-4'>
                <span className='font-semibold text-xl'>{school.name}</span>
                <br />
                <span className='text-xl'>{school.career}</span>
            </div>
        </div>
    )
}
