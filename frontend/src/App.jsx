import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-column w-100" style={{ maxWidth: "960px" }}>
        <Header />
        <Title />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
