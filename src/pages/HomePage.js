import React, { useEffect, useState } from "react";
import BobotForm from "../components/BobotForm";
import BobotTree from "../components/BobotTree";
import { getAllBobots, createBobot } from "../services/BobotService";

const HomePage = () => {
  const [bobots, setBobots] = useState([]);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // null means no message, true means success, false means failure

  useEffect(() => {
    loadBobots();
  }, []);

  const loadBobots = async () => {
    const data = await getAllBobots();
    setBobots(data);
  };

  const handleCreateBobot = async (newBobot) => {
    const { success, message } = await createBobot(newBobot);
    setMessage(message);
    setIsSuccess(success);
    if (success) {
      loadBobots();
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mb-4">Form Input Bobot</h2>
      <BobotForm
        onSubmit={handleCreateBobot}
        message={message}
        isSuccess={isSuccess}
      />
      <div className="mt-6">
        <BobotTree bobots={bobots} />
      </div>
    </div>
  );
};

export default HomePage;
