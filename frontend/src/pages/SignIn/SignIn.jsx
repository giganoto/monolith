// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const app = initializeApp(firebaseConfig);

const SignIn = () => {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   function handleClick() {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         // console.log(credential);
//         const token = credential.accessToken;
//         // console.log(token);
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);  
//         // IdP data available using getAdditionalUserInfo(result)
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//       });
//   }
  return (
    <>
      <div className="min-h-[80vh] flex flex-row justify-center items-center">
        <button
          onClick={handleClick}
          className="text-white bg-blue-400 p-2 rounded-lg"
        >
          Signin with Google
        </button>
      </div>
    </>
  );
};

export default SignIn;
