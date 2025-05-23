import dynamic from "next/dynamic";

export const Icons = {
    github: dynamic(() => import('@/components/icons/GitHub')),
    linkedin: dynamic(() => import('@/components/icons/Linkedin')),
    gmail: dynamic(() => import('@/components/icons/Gmail')),
    job: dynamic(() => import('@/components/icons/Job')),
    react: dynamic(() => import('@/components/icons/ReactIcon')),
    nest: dynamic(() => import('@/components/icons/NestJS')),
    typescript: dynamic(() => import('@/components/icons/TypeScript')),
    mongo: dynamic(() => import('@/components/icons/Mongo')),
    angular: dynamic(() => import('@/components/icons/Angular')),
    ionic: dynamic(() => import('@/components/icons/Ionic')),
    supabase: dynamic(() => import('@/components/icons/Supabase')),
    postgres: dynamic(() => import('@/components/icons/Postgres')),
    nodejs: dynamic(() => import('@/components/icons/Nodejs')),
    javascript: dynamic(() => import('@/components/icons/JavaScript')),
    vue: dynamic(() => import('@/components/icons/Vue')),
    nuxt: dynamic(() => import('@/components/icons/Nuxt')),
    cypress: dynamic(() => import('@/components/icons/Cypress')),
    docker: dynamic(() => import('@/components/icons/Docker')),
    git: dynamic(() => import('@/components/icons/Git')),
    storybook: dynamic(() => import('@/components/icons/Storybook')),
    mysql: dynamic(() => import('@/components/icons/Mysql')),
    next: dynamic(() => import('@/components/icons/Next')),
    digital: dynamic(() => import('@/components/icons/DigitalOcean')),
};