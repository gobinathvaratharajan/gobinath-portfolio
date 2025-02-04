import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const playFair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gobinath Varatharajan',
  description: 'Generated by Gobinath varatharajan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* Browser extension cause the hydration issue which can be fix with suppressHydrationWarning. */}
      <body
        className={`${inter.variable} ${playFair.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
