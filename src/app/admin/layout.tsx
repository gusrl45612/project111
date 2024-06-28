import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>어드민 헤더</header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;