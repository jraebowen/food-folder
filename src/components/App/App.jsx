//css import
import "./App.css";

//component import
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
