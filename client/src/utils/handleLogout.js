import axios from "axios";
import { toast } from "react-hot-toast";

export const handleLogout = async (setUser, navigate) => {
  try {
    const response = await axios.post("/logout", {}, { withCredentials: true });

    if (response.status === 200) {
      toast.success("Goodbye!");
      setUser(null); // Reset the user state
      navigate("/"); // Navigate to the login page
    } else {
      toast.error("Logout failed. Please try again.");
    }
  } catch (error) {
    toast.error("Logout failed. Please try again."); // Show error message
    console.error("Logout failed:", error);
  }
};
