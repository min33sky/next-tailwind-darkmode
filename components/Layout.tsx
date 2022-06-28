import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Nextjs & Tailwindcss & Darkmode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
