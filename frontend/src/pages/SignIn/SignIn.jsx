import { GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const responseMessage = (response) => {
    console.log(responseMessage);
  }
  const errorMessage = (error) => {
    console.log(errorMessage);
  };
  return (
    <>
      <h1>Sign In</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  );
};

export default SignIn;
