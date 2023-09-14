import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const loginMutation = async (data) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const accessToken = response.user.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      throw new Error("Your password is incorrect. Please try again.");
    } else if (error.code === "auth/user-not-found") {
      throw new Error("Account with this email does not exist.");
    }

    throw error;
  }
};

export default loginMutation;
