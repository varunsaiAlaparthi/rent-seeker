// src/app/layout.tsx
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';

export const metadata = {
  title: 'RentSeeker - Find Your Perfect Rental',
  description: 'Browse and post rental properties with RentSeeker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}