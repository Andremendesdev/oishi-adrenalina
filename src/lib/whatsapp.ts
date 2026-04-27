// Centralized WhatsApp config — edit here to change number/message globally.
export const WHATSAPP_NUMBER = "5511999999999"; // E.164 sem '+'
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de fazer uma reserva no Sakura Lounge.";

export const buildWhatsAppUrl = (
  message: string = WHATSAPP_DEFAULT_MESSAGE,
  number: string = WHATSAPP_NUMBER,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
