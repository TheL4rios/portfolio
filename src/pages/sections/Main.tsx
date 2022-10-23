import { useCallback } from 'react';
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';
import { MainCard } from 'src/core/components/MainCard';
import { configParticle } from 'src/core/config/configParticle';

export const Main = () => {

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<div>
			<Particles width='100%' height='100vh' init={particlesInit} options={configParticle} />
			<MainCard/>
		</div>
	)
}
