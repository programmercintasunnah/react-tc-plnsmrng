import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Aplikasi Bobot</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-3">© 2024</footer>
    </div>
  );
};

export default MainLayout;
