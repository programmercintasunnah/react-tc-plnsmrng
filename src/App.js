import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import "./index.css";

const App = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default App;
