import { GoogleLogin } from "@react-oauth/google";

const SignIn = (props) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default SignIn;
