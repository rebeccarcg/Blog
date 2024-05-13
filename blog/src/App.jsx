import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./context/UserContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PageLayout from "./components/PageLayout";
import BlogPage from "./pages/BlogPage";
import { BlogProvider } from "./context/BlogContext";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <BlogProvider>
      <BrowserRouter>
        <Header />
        {isLoggedIn ? (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </>
        ) : (
          <PageLayout>Please log in</PageLayout>
        )}
      </BrowserRouter>
    </BlogProvider>
  );
};

export default App;
