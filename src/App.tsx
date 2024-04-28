import React from "react";

import "./App.css";
import CustomRouter from "./routing/Router";

import useAuthGuard from "hooks/useAuthGuard";
import SiteLoader from "components/comman/loader/SiteLoader";

function App() {
  const { isLoading, isAuthInitialized } = useAuthGuard();

  return (
    <>{isLoading || !isAuthInitialized ? <SiteLoader /> : <CustomRouter />}</>
  );
}

export default App;
