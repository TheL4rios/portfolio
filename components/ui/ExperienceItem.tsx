import { calculateDuration, formatDate } from "@/lib/utils";
import { IExperience } from "@/types/experience";

export const ExperienceItem = ({
    startDate,
    endDate,
    jobTitle,
    companyName,
    description,
    isCurrent,
}: Omit<IExperience, 'id'>) => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = isCurrent ? 'Present' : formatDate(endDate);
    const duration = calculateDuration(startDate, endDate);

    return (
        <li className="mb-10 ms-6">
            {isCurrent && (
                <span className="absolute flex items-center justify-center w-3 h-3 lg:w-6 lg:h-6 rounded-full -start-[7px] lg:-start-3 mt-5 ring-8 ring-gray-900 animate-ping" />
            )}
            <span className="absolute flex items-center justify-center w-3 h-3 lg:w-6 lg:h-6 rounded-full -start-[7px] lg:-start-3 mt-5 ring-8 ring-gray-900 bg-purple-300"/>
            <article className="ml-1 lg:ml-10 flex flex-col gap-5 lg:flex-row lg:gap-0">
                <div className="min-w-[350px] flex flex-col text-white">
                    <h3 className="text-xl lg:text-2xl text-purple-300">{jobTitle}</h3>
                    <h4 className="text-sm lg:text-l">{companyName}</h4>
                    <time className="text-xs lg:text-sm text-gray-300">
                        {formattedStartDate} - {formattedEndDate}
                    </time>
                    <span className="text-xs lg:text-sm text-gray-300">({duration})</span>
                </div>
                <p className="text-gray-300 text-sm lg:text-l">{description}</p>
            </article>
        </li>
    );
};
