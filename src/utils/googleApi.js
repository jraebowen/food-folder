import checkResponse from "./api.js";
const baseUrl = "http://localhost:3005";

export const importFromGoogle = async (url) => {
  try {
    const res = await fetch(`${baseUrl}/import/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    return await checkResponse(res);
  } catch (err) {
    console.error("Error importing Google Doc:", err);
    throw err;
  }
};
