import useAuthGuard from "hooks/userAuthGuard";
import "./App.css";
import CustomRouter from "./routing/Router";
import SiteLoader from "components/comman/loader/SiteLoader";

function App() {
  
  const { isLoading, isAuthInitialized } = useAuthGuard();
  return (
    <>{isLoading || !isAuthInitialized ? <SiteLoader /> : <CustomRouter />}</>
  );
}

export default App;
