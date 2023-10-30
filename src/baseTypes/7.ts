enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const currentDay: DayOfWeek = DayOfWeek.Saturday;
const isCurrentDayWeekend: boolean = isWeekend(currentDay);
console.log(`Is it a weekend? ${isCurrentDayWeekend}`); 