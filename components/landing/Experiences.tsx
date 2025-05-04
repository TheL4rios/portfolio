import { Section } from "@/components/ui/Section";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { experiences } from "@/lib/constants/experiences";

export const Experiences = () => {
    return (
        <Section id="experience" title="Work Experience" >
            <ol className="relative border-s border-gray-700">
                {
                    experiences.map((props, index) => (
                        <ExperienceItem key={index} {...props} />
                    ))
                }
            </ol>
        </Section>
    );
};
