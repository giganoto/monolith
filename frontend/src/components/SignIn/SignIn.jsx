import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";


const app = initializeApp(firebaseConfig);

const SignIn = (props) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const dispatch = useDispatch();

  async function sendTokenToBackend(token) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/users/login`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to send token to the backend");
        throw new Error("Failed to send token to the backend");
      }
      console.log("Token sent successfully");
      return response;
    } catch (error) {
      console.error("Failed to send token to the backend", error);
      throw error;
    }
  }

  async function handleSignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credential)
        const user = result.user;
        const idToken = user.getIdToken();
        return idToken;
      })
      .then(async (idtoken) => {
        const token = idtoken;
        sendTokenToBackend(token)
          .then((response) => {
            if (response.status === 200) {
              dispatch(login());
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <button onClick={handleSignIn} className={props.mdClass}>
      SignIn with Google
    </button>
  );
};

export default SignIn;
