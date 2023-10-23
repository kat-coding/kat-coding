import BioComponent from "./components/BioComponent";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <BioComponent />
      </div>
    </>
  );
}

export default App;
