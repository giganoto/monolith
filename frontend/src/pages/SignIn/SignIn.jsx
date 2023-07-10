import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_KEY,
  authDomain: "giganoto-website.firebaseapp.com",
  projectId: "giganoto-website",
  storageBucket: "giganoto-website.appspot.com",
  messagingSenderId: "679106369504",
  appId: "1:679106369504:web:1fa26d13ef1d1151993d85"
};
const app = initializeApp(firebaseConfig);

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  function handleClick(event) {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
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
        // ...
      });
  }
  return (
    <>
      <form className="min-h-[80vh] flex flex-row justify-center items-center">
        <button
          onClick={handleClick}
          className="text-white bg-blue-400 p-2 rounded-lg"
          type="submit"
        >
          Signin with Google
        </button>
      </form>
    </>
  );
};

export default SignIn;
