import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>AgriTech Supply Chain</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
