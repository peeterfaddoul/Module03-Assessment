import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Routes,
  Route,
  
  BrowserRouter ,
} from "react-router-dom";
import HomePage from "./pages/homepage/index";
import Article from "./pages/article/Article";
function App() {
   return (
      
     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
          <Route path="http://localhost:4000/api/Article/:id" element={<Article />} />
        
      </Routes>
    </BrowserRouter>
 );
}

export default App;
