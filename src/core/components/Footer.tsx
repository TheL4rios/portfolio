import Logo from 'src/assets/logo-cropped.png';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {

  const goToTop = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='wrapper-fill bg-[#141c3a] mt-20 md:mt-36'>
      <div className='container mx-auto sm:px-6 lg:px-28 space-y-8 p-1 text-center'>
        <div className='my-5'>
          <div className='flex align-center justify-center mb-[50px]'>
            <img draggable={ false } src={Logo} alt='logo' className='w-[50px] cursor-pointer transition-all hover:scale-125' onClick={ goToTop }/>
          </div>
          <div className='flex justify-center text-3xl'>
            <a rel='noopenner noreferrer' href='https://github.com/TheL4rios' target='_blank' className='transition-all hover:scale-125'>
              <AiFillGithub className='text-white' />
            </a>
            <a rel='noopenner noreferrer' href='https://www.linkedin.com/in/lariosquiroz/' target='_blank' className='ml-4 transition-all hover:scale-125'>
              <AiFillLinkedin className='text-white' />
            </a>
            <a rel='noopenner noreferrer' href='mailto:arallariosqu@gmail.com' target='_blank' className='ml-4 transition-all hover:scale-125'>
              <AiOutlineMail className='text-white' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
