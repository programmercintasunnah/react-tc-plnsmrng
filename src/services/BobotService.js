const API_URL = "http://localhost:8080/api";

export const getAllBobots = async () => {
  try {
    const response = await fetch(`${API_URL}/bobots`);
    const data = await response.json();
    if (response.ok) {
      return data.data; // Assuming 'data' is where the list of bobots is located
    } else {
      console.error("Error fetching bobots:", data.message);
      return [];
    }
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
    const data = await response.json();
    if (response.ok) {
      return { success: true, bobot: data.data }; // Assuming 'data' contains the created bobot
    } else {
      console.error("Error creating bobot:", data.message);
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error creating bobot:", error);
    return { success: false, message: "An error occurred." };
  }
};
