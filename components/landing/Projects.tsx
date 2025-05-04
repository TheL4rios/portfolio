import { ProjectItem } from "@/components/ui/ProjectItem";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/constants/projects";

export const Projects = () => {
    const lastProjectIndex = projects.length - 1;

    return (
        <Section id="projects" title="Projects">
            <div className="flex flex-col gap-5">
                {
                    projects.map((props, index) => (
                        <ProjectItem key={index} {...props} reverse={index % 2 !== 0} isLast={index === lastProjectIndex} />
                    ))
                }
            </div>
        </Section>
    );
};
