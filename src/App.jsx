import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContainer from "./containers/PageContainer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
