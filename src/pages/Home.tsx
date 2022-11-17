import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import { Main } from './sections/Main';
import { MyProjects } from './sections/MyProjects';


export const Home = () => {
  return (
    <>
        <Main/>
        <AboutMe/>
        <Experience/>
        <MyProjects/>
    </>
  )
}
