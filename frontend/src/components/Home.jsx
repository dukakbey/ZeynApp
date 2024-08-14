import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Header";
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";

function Home() {
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

export default Home;
