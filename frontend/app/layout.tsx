import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileCallButton from '@/components/MobileCallButton';

export const metadata: Metadata = {
  title: 'Healfast India | Home Healthcare at Your Doorstep',
  description:
    'Healfast India offers trusted home healthcare services including nursing visits, lab tests, elderly care, and post-operative support.',
  keywords: ['Healfast India', 'Home healthcare', 'Nursing visit', 'Lab tests', 'Elderly care'],
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg'
  },
  openGraph: {
    title: 'Healfast India',
    description: 'Empowering Health Together',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCallButton />
      </body>
    </html>
  );
}
