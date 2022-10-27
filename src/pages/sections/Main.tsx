import { useCallback } from 'react';

import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';
import { AiOutlineArrowDown } from "react-icons/ai";

import { MainCard } from 'src/core/components/MainCard';

import { configParticle } from 'src/core/config/configParticle';

export const Main = () => {

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<>
			<Particles width='100%' height='100vh' init={particlesInit} options={configParticle} />
			<MainCard/>
			<AiOutlineArrowDown className='text-white text-4xl animate-bounce absolute left-1/2 top-[calc((100vh/2)+25%)] z-10'/>
		</>
	)
}