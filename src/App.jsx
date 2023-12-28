import Header from "./containers/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Sponsors from "./components/Sponsors/Sponsors";

function App() {
  return (
    <>
      <div className="App">
        <div className="background">
          <Navbar />
          <Header />
        </div>
        <Sponsors />
      </div>
    </>
  );
}

export default App;
