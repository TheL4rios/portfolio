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
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 mt-5 ring-8 ring-gray-900 bg-blue-900 animate-ping" />
            )}
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 mt-5 ring-8 ring-gray-900 bg-blue-900"/>
            <div className="ml-10 flex">
                <div className="min-w-[350px] flex flex-col text-white">
                    <h3 className="text-2xl text-purple-300">{jobTitle}</h3>
                    <h4 className="text-l">{companyName}</h4>
                    <time className="text-sm text-gray-300">
                        {formattedStartDate} - {formattedEndDate}
                    </time>
                    <span className="text-sm text-gray-300">({duration})</span>
                </div>
                <div className="text-gray-300">{description}</div>
            </div>
        </li>
    );
};
