const IST = 'Asia/Kolkata';
const DAY_START_HOUR = 6;
const NIGHT_START_HOUR = 18;

function istHour(date = new Date()) {
  const hourStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: IST,
    hour: 'numeric',
    hour12: false,
  }).format(date);
  const hour = Number(hourStr);
  return hour === 24 ? 0 : hour;
}

export function getIndiaTheme(date = new Date()) {
  const hour = istHour(date);
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? 'light' : 'dark';
}

export function applyIndiaTheme() {
  const theme = getIndiaTheme();
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
  return theme;
}

export function msUntilNextIndiaThemeSwitch(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: IST,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const value = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);
  let hour = value('hour');
  if (hour === 24) hour = 0;

  const nowSeconds = hour * 3600 + value('minute') * 60 + value('second');
  const sixAm = DAY_START_HOUR * 3600;
  const sixPm = NIGHT_START_HOUR * 3600;

  let target = sixAm;
  if (nowSeconds < sixAm) target = sixAm;
  else if (nowSeconds < sixPm) target = sixPm;
  else target = sixAm + 24 * 3600;

  return Math.max((target - nowSeconds) * 1000, 1000);
}
