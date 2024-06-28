// import '../styles/globals.css';
import type { ReactNode } from 'react';
import Layout from './components/layout/Layout';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;