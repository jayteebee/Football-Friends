const URL = process.env.NODE_ENV === 'production' 
                ? 'https://jayteebee.github.io/Football-Friends' 
                : 'http://localhost:5001'


export const createAdmiredPlayer = async (id, data) => {
  try {
    const result = await fetch(`${URL}/Users/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      body: JSON.stringify(data),
    });
    return result.json();
  } catch (err) {
    return err;
  }
};

export const deleteAdmiredPlayer = async (id, playerId) => {
  try {
    const result = await fetch(`${URL}/Users/${id}/${playerId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return result.json();
  } catch (err) {
    return err;
  }
};

export const updateAdmiredPlayer = async (id, playerId, data) => {
  try {
    const result = await fetch(
      `${URL}/Users/${id}/ViewAdmiredPlayer/${playerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("JWT")}`,
        },
        body: JSON.stringify(data),
      }
    );
    return result.json();
  } catch (err) {
    return err;
  }
};
