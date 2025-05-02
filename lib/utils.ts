import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
};

export const calculateDuration = (startDate: Date, endDate: Date) => {
  const diffInMilliseconds = endDate.getTime() - startDate.getTime();
  const diffInMonths = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)
  );

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let duration = "";
  if (years > 0) duration += `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) {
    if (duration) duration += ", ";
    duration += `${months} month${months > 1 ? "s" : ""}`;
  }

  return duration || "Less than a month";
};
