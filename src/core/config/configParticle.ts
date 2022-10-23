import type { ISourceOptions } from "tsparticles-engine";

export const configParticle: ISourceOptions = {
    background: {
        color: {
            value: "#252934",
        },
    },
    fpsLimit: 120,
    fullScreen: false,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}