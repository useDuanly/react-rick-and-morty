import { useState } from "react";

const useStateHooks = (initialState) => {
  const [stored, setStored] = useState(initialState, () => {
    window.localStorage.getItem("dev");
  });

  function setLocalStored(value) {
    setStored(value);
    try {
      window.localStorage.setItem("dev", JSON.stringify(...value));
    } catch (error) {
      console.log(error);
    }
  }
  return { setStored, stored, setLocalStored };
};

export default useStateHooks;
