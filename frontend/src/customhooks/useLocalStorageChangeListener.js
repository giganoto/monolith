import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../state/authSlice";

const useLocalStorageChangeListener = (key) => {
  const dispatch = useDispatch();
  const isLoggedInRedux = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        const newValue = event.newValue;
        const oldValue = event.oldValue;

        if (newValue === null || newValue === undefined) {
          // Key-value pair deleted from local storage
          dispatch(logout());
        } else if (newValue !== oldValue) {
          // Value changed in the local storage
          dispatch(logout());
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch, key]);

  // Update the local state when the Redux store state changes
  useEffect(() => {
    // Handle the initial value when the component mounts
    if (isLoggedInRedux !== null) {
      const loggedInValue = isLoggedInRedux ? "true" : "false";
      localStorage.setItem(key, loggedInValue);
    }
  }, [isLoggedInRedux, key]);

  return isLoggedInRedux;
};

export default useLocalStorageChangeListener;

