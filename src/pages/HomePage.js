import React, { useEffect, useState } from "react";
import BobotForm from "../components/BobotForm";
import BobotTree from "../components/BobotTree";
import { getAllBobots, createBobot } from "../services/BobotService";

const HomePage = () => {
  const [bobots, setBobots] = useState([]);

  useEffect(() => {
    loadBobots();
  }, []);

  const loadBobots = async () => {
    const data = await getAllBobots();
    setBobots(data);
  };

  const handleCreateBobot = async (newBobot) => {
    const success = await createBobot(newBobot);
    if (success) {
      loadBobots();
    } else {
      alert("Gagal menambahkan bobot");
    }
  };

  return (
    <div>
      <h2>Form Input Bobot</h2>
      <BobotForm onSubmit={handleCreateBobot} />
      <BobotTree bobots={bobots} />
    </div>
  );
};

export default HomePage;
