import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Community from "./Community/Community";
import Events from "./Events/Events";
import UsefulLinks from "./UsefulLinks/UsefulLinks";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Community />
      <Events />
      <UsefulLinks />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
