'use client'
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Layout from './(main)/layout/Layout';
import Header from './(main)/layout/Header';
import Footer from './(main)/layout/Footer';
import ThemeProvider from './(main)/layout/ThemeProvider';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
        {!isAdminRoute && <Header />}
        <Layout>{children}</Layout>
        {!isAdminRoute && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;