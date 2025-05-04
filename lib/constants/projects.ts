import { IProject } from "@/types/project";
import CutApp from '@/assets/cut-app.webp';
import DataFaker from '@/assets/data-faker.webp';
import Homedy from '@/assets/homedy.webp';
import { Icons } from "@/components/icons";

export const projects: IProject[] = [
    {
        name: 'Homedy MX - Find qualified professionals near you',
        image: Homedy,
        description: `
            Homedy is an app that connects you with experts in
            repair and maintenance. From mechanics to masons,
            find qualified and well-reviewed professionals in
            your area for your home or business needs.
        `,
        link: 'https://www.homedy.mx/',
        tags: [
            {
                link: 'https://ionicframework.com/',
                name: 'Ionic',
                icon: Icons.ionic,
            },
            {
                link: 'https://angular.dev/',
                name: 'Angular',
                icon: Icons.angular,
            },
            {
                link: 'https://www.typescriptlang.org/',
                name: 'TypeScript',
                icon: Icons.typescript,
            },
            {
                link: 'https://supabase.com/',
                name: 'Supabase',
                icon: Icons.supabase,
            },
            {
                link: 'https://www.postgresql.org/',
                name: 'PostgreSQL',
                icon: Icons.postgres,
            },
        ],
    },
    {
        name: 'Data Faker - Fake data generator for testing',
        image: DataFaker,
        description: `
            Data Faker is a tool that allows you to generate
            fake data based on TypeScript interfaces, perfect
            for testing, development, or demonstrations. You
            can customize data structures and generate large
            amounts of data quickly.
        `,
        link: 'https://data-faker.vercel.app/',
        tags: [
            {
                link: 'https://angular.dev/',
                name: 'Angular',
                icon: Icons.angular,
            },
            {
                link: 'https://www.typescriptlang.org/',
                name: 'TypeScript',
                icon: Icons.typescript,
            },
        ],
    },
    {
        name: 'CutApp - Shorten your links easily',
        image: CutApp,
        description: `
            CutApp is a simple and efficient application to
            shorten links, making it easier to share URLs
            in a more compact and user-friendly way.
            Perfect for professionals and users who
            need to manage long links.
        `,
        link: 'https://linkcutter.vercel.app/',
        tags: [
            {
                link: 'https://react.dev/',
                name: 'React',
                icon: Icons.react,
            },
            {
                link: 'https://nestjs.com/',
                name: 'NestJS',
                icon: Icons.nest,
            },
            {
                link: 'https://www.typescriptlang.org/',
                name: 'TypeScript',
                icon: Icons.typescript,
            },
            {
                link: 'https://www.mongodb.com/',
                name: 'MongoDB',
                icon: Icons.mongo,
            }
        ],
    },
];