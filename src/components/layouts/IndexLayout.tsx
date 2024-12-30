import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const IndexLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </main>
  );
};

export default IndexLayout;

