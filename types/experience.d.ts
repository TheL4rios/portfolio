import { StaticImageData } from "next/image";

export interface IExperience {
    id: number;
    companyName: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    description: string;
}
