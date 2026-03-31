export const CONTACT = {
  phoneDisplay: '+91 98765 43210',
  phoneDial: '+919876543210',
  whatsappNumber: '919876543210',
  email: 'healfastindia@gmail.com',
  instagram: 'https://instagram.com/healfastindia',
  whatsappDefaultMessage:
    'Hello Healfast India, I need home healthcare support. Please guide me about services and booking.'
} as const;

export const CONTACT_LINKS = {
  call: `tel:${CONTACT.phoneDial}`,
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappDefaultMessage)}`,
  mail: `mailto:${CONTACT.email}`
} as const;
