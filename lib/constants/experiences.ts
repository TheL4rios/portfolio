import { IExperience } from "@/types/experience";

export const experiences: IExperience[] = [
    {
        companyName: 'Cyberpuerta',
        jobTitle: 'Software Developer',
        startDate: new Date('10-16-2023'),
        endDate: new Date(),
        isCurrent: true,
        description: `
            Contributed to the development and maintenance of an internal
            component library with a scalable design system and versioning.
            Optimized store verticals to improve load times, SEO, and conversions.
            Built responsive interfaces for cross-device usability. Worked on
            Cyberpuerta's sub-brand with a focus on SSR and performance.
            Developed a real-time hardware configurator.
            Helped migrate a legacy e-commerce platform to Nuxt.js,
            enhancing SEO, performance, and UX.
        `,
    },
    {
        companyName: 'Alveus Soft',
        jobTitle: 'Full Stack Developer',
        startDate: new Date('02-01-2021'),
        endDate: new Date('10-16-2023'),
        isCurrent: false,
        description: `
            As part of the team modernizing an internal ERP system,
            I helped migrate the platform from Java to the MEAN stack,
            making it more accessible and feature-rich. I integrated
            Stripe to handle secure payments and optimized database
            queries, cutting report generation time from 10 minutes
            to under 10 seconds. I also built automated payroll
            and commission modules, reducing manual effort by
            80%. To improve security, I implemented OAuth
            authentication. Along the way, I mentored two
            interns and contributed to a more effective
            promotion strategy by adding support for discount coupons.
        `,
    }
];