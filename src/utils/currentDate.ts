const date = new Date();

const currentDay = String(date.getDate()).padStart(2, '0');

const currentMonth = String(date.getMonth() + 1).padStart(2, '0');

const currentYear = date.getFullYear();

export const currentDate = `${currentDay}.${currentMonth}.${currentYear}`;