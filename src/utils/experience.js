const EXPERIENCE_START_YEAR = 2023;
const ANNIVERSARY_MONTH = 7; // August (0-indexed)
const ANNIVERSARY_DAY = 1;

export const getYearsExperience = (date = new Date()) => {
  const anniversaryThisYear = new Date(date.getFullYear(), ANNIVERSARY_MONTH, ANNIVERSARY_DAY);
  const hasHadAnniversaryThisYear = date >= anniversaryThisYear;
  const latestAnniversaryYear = hasHadAnniversaryThisYear ? date.getFullYear() : date.getFullYear() - 1;
  return latestAnniversaryYear - EXPERIENCE_START_YEAR;
};

export const getYearsExperienceLabel = (date = new Date()) => `${getYearsExperience(date)}+`;
