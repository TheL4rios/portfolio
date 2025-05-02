import { IExperience } from "@/types/experience";
import { Icons } from "@/components/icons";
import { ExperienceItem } from "@/components/landing/ExperienceItem";

const experiences: IExperience[] = [
    {
        id: 1,
        companyName: 'Cyberpuerta',
        jobTitle: 'Software Developer',
        startDate: new Date('10-16-2023'),
        endDate: new Date(),
        isCurrent: true,
        description: `
            Contributed to building and maintaining an internal component library,
            applying a design system and versioning for scalability and maintainability.
            Optimized store verticals, improving load times, SEO, and user conversion.
            Developed responsive interfaces for an optimal user experience across devices.
            Contributed to the development of Cyberpuerta's sub-brand, focusing on SSR and
            performance optimization. Built a mini hardware configurator for real-time PC
            customization. Developed E2E tests with Cypress for improved code quality.
            Participated in migrating a legacy e-commerce platform to Nuxt.js, enhancing
            performance, SEO, and user experience.
        `,
    },
    {
        id: 2,
        companyName: 'Alveus Soft',
        jobTitle: 'Full Stack Developer',
        startDate: new Date('02-01-2021'),
        endDate: new Date('10-16-2023'),
        isCurrent: false,
        description: `
            Contributed to migrating an ERP system from Java to MEAN stack,
            enhancing accessibility and adding new features. Developed a secure
            payment system with Stripe and optimized query performance, reducing
            sales report generation time from 10 minutes to under 10 seconds.
            Implemented automated payroll and commission modules, cutting
            processing time by 80%. Integrated OAuth for secure authentication,
            improving application security. Mentored two intern developers
            and optimized the promotion strategy with a discount coupon system.
        `,
    }
];

export const Experiences = () => {
    return (
        <section id="experience" className="relative flex m-auto h-[100dvh] w-full max-w-[1000px] gap-20 flex-col items-center justify-content-center">
            <h2 className="text-5xl">Work <span className="text-purple-300">Experience</span></h2>

            <ol className="relative border-s border-gray-700">
                {
                    experiences.map(({id, ...props}) => (
                        <ExperienceItem key={id} {...props} />
                    ))
                }
            </ol>
        </section>
    );
};
