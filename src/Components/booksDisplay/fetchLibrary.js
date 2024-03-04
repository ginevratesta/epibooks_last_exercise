const URL = "https://epibooks.onrender.com/romance";

const fetchLibrary = async () => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      console.log(res.status);
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};

export default fetchLibrary;