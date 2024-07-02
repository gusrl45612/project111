'use client'
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Layout from './(main)/layout/Layout';
import Header from './(main)/layout/Header';
import Footer from './(main)/layout/Footer';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="ko">
      <body>
        {!isAdminRoute && <Header />}
        <Layout>{children}</Layout>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;