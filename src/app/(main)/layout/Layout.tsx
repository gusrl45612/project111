import { FC, ReactElement } from 'react';




type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;