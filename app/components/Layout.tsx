// File: /app/components/Layout.tsx

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">
        <h1 className="text-xl font-bold">Publed Blog</h1>
      </header>
      <main className="container mx-auto my-8 flex-grow px-4">{children}</main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        © {new Date().getFullYear()} Publed - All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
