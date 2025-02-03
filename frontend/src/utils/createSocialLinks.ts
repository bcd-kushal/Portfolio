export const whatsappContact = (number: string, message?: string): string =>
    `https://wa.me/${number}?text=${encodeURIComponent(message || "")}`

export const mobileContact = (number: string): string => `tel:${number}`

export const emailContact = (email: string): string => `mailto:${email}`
