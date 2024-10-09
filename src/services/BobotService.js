const API_URL = "http://localhost:8080/api";

export const getAllBobots = async () => {
  try {
    const response = await fetch(`${API_URL}/bobots`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching bobots:", error);
    return [];
  }
};

export const createBobot = async (bobot) => {
  try {
    const response = await fetch(`${API_URL}/bobot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bobot),
    });
    return response.ok;
  } catch (error) {
    console.error("Error creating bobot:", error);
    return false;
  }
};
