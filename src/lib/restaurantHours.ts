export type NavbarStatus = "open" | "closed";

export interface NavbarStatusConfig {
  automatic?: boolean;
  status?: NavbarStatus;
  openHour?: number;
  closeHour?: number;
}

export const DEFAULT_OPEN_HOUR = 16;
export const DEFAULT_CLOSE_HOUR = 24;

/** 0 = domingo — restaurante fechado */
export const isOperatingDay = (date: Date = new Date()): boolean =>
  date.getDay() !== 0;

export const isRestaurantOpen = (
  openHour: number,
  closeHour: number,
  date: Date = new Date(),
): boolean => {
  if (!isOperatingDay(date)) return false;

  const currentHour = date.getHours();

  if (openHour < closeHour) {
    return currentHour >= openHour && currentHour < closeHour;
  }

  return currentHour >= openHour || currentHour < closeHour;
};

export const resolveNavbarOpenStatus = (
  config: NavbarStatusConfig,
  date: Date = new Date(),
): boolean => {
  const openHour = config.openHour ?? DEFAULT_OPEN_HOUR;
  const closeHour = config.closeHour ?? DEFAULT_CLOSE_HOUR;

  if (config.automatic !== false) {
    return isRestaurantOpen(openHour, closeHour, date);
  }

  return (config.status ?? "open") === "open";
};

export const formatNavbarHour = (hour: number): string => {
  if (hour === 24 || hour === 0) return "00:00";
  return `${hour.toString().padStart(2, "0")}:00`;
};
