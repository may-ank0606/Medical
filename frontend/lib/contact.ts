export const CONTACT = {
  phoneDisplay: '+91 98214 65635',
  phoneDial: '+919821465635',
  whatsappNumber: '919821465635',
  email: 'healfastindia91@gmail.com',
  instagram: 'https://instagram.com/healfastindia',
  whatsappDefaultMessage:
    'Hello Healfast India, I need home healthcare support. Please guide me about services and booking.'
} as const;

export const CONTACT_LINKS = {
  call: `tel:${CONTACT.phoneDial}`,
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappDefaultMessage)}`,
  mail: `mailto:${CONTACT.email}`
} as const;
