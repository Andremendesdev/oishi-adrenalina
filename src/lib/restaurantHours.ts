export interface NavbarHoursConfig {
  openHour: number;
  closeHour: number;
  automatic?: boolean;
  manualStatus?: "open" | "closed";
}

export const isRestaurantOpen = (
  openHour: number,
  closeHour: number,
  date: Date = new Date(),
): boolean => {
  const currentHour = date.getHours();

  if (openHour < closeHour) {
    return currentHour >= openHour && currentHour < closeHour;
  }

  return currentHour >= openHour || currentHour < closeHour;
};

export const resolveNavbarOpenStatus = (
  config: NavbarHoursConfig,
  date: Date = new Date(),
): boolean => {
  if (config.automatic === false) {
    return config.manualStatus === "open";
  }

  return isRestaurantOpen(config.openHour, config.closeHour, date);
};

export const formatNavbarHour = (hour: number): string => {
  if (hour === 24 || hour === 0) return "00:00";
  return `${hour.toString().padStart(2, "0")}:00`;
};
