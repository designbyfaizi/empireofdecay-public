// import logo from './logo.svg';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Components/Routes/Routes";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            
            <Footer />
        </div>
    );
}

export default App;
