const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUzMWVmYWE4MDg3ZjAwMTljMmEzN2YiLCJpYXQiOjE3MDkzODM0MTgsImV4cCI6MTcxMDU5MzAxOH0.Yg6UupL2r7-uWZjvSzx7G5RtKSHedexoPMjimvcI_yQ";
const URL = `https://striveschool-api.herokuapp.com/api/comments/`;

const postComment = async (comment) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(comment),
  };
  try {
    const res = await fetch(URL, options);
    const data = await res.json();
    alert("Your comment has been published successfully!");
    return {
      ...data,
      ok: res.ok,
    };
  } catch (error) {
    console.error("Error:", error);
    alert(error);
  }
};

export default postComment;
