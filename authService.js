// Hardcoded users
export const loginUser = (email, password) => {

  if (email === "admin@gmail.com" && password === "admin123") {
    const adminUser = {
      email: "admin@gmail.com",
      role: "admin",
    };

    localStorage.setItem("authUser", JSON.stringify(adminUser));
    return adminUser;
  }

  if (email === "user@gmail.com" && password === "user123") {
    const normalUser = {
      email: "user@gmail.com",
      role: "user",
    };

    localStorage.setItem("authUser", JSON.stringify(normalUser));
    return normalUser;
  }

  return null;
};


// Logout
export const logoutUser = () => {
  localStorage.removeItem("authUser");
};


export const getCurrentUser = () => {
  const user = localStorage.getItem("authUser");

  if (user) {
    return JSON.parse(user);
  }

  return null;
};