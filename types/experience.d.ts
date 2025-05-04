import { StaticImageData } from "next/image";

export interface IExperience {
    companyName: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    description: string;
}
