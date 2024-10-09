import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Aplikasi Bobot</h1>
      </header>
      <main>{children}</main>
      <footer>© 2024</footer>
    </div>
  );
};

export default MainLayout;
