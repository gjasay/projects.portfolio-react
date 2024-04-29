import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <Header />
        <div className="flex-grow overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/:type" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
