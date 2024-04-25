import { GlobalProvider } from "./Context/GlobalContext";
import PageRoutes from './Pages/PageRoutes'
import './App.css'

// Here, I have used context API to globally manage the state of the application
function App() {
  return (
    <>
      <GlobalProvider>
        <PageRoutes/>
      </GlobalProvider>
    </>
  );
}

export default App;
