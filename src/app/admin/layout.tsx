import type { ReactNode } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
  );
};

export default AdminLayout;