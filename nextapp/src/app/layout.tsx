import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BlueFin — Omega-3 for Everyday Family Wellness | Pure Fish Oil',
  description: 'Responsibly sourced. Carefully processed. Expertly capsulated. BlueFin delivers pure, high-potency Omega-3 fish oil (1000mg and 500mg) for everyday family wellness.',
  keywords: 'BlueFin, Omega 3, fish oil, EPA, DHA, family wellness, 1000mg fish oil, 500mg fish oil, Kerala pharmacies, Amazon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
