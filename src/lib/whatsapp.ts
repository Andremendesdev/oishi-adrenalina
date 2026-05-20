// Centralized WhatsApp config — edit here to change number/message globally.
export const WHATSAPP_NUMBER = "5514997757180"; // E.164 sem '+'
export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Vim do site do Oishi Adrenalina!";

export const buildWhatsAppUrl = (
  message: string = WHATSAPP_DEFAULT_MESSAGE,
  number: string = WHATSAPP_NUMBER,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
