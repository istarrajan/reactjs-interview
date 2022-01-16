import { Container } from "./App.style";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  return <Container>Home</Container>;
}

const About = () => {
  return <Container>About</Container>;
}




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
