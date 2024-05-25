import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
