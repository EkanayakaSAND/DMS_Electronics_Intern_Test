import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { toast } from 'react-toastify';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  
  const signUp = async (email, password, firstName, lastName) => {
    setError(null);
    setIsLoading(true);
    const response = await fetch(
      "https://dms-electronics-api.vercel.app/api/authentication/signup",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName}),
      }
    );
    const json = await response.json(); //user data

    if (!response.ok) {
      setIsLoading(false);      
      setError(json.error);
      toast.error(json.message);
    } else {
      localStorage.setItem("user", JSON.stringify(json)); // for storing the token inside local cache
      //update authcontext
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      toast.success("Account created successfully!");
      console.log('User signed up successfully:', json);
    }
  };

  return { signUp, isLoading, error };
};

export default useSignup;

