import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { skills } from "@/lib/constants/skills";

export const Skills = () => {
	return (
		<Section id="skills" title="Skills">
			<div className="flex flex-wrap gap-2">
				{
					skills.map((props, index) => (
						<Badge key={index} {...props} size="md" />
					))
				}
			</div>
		</Section>
	);
};
