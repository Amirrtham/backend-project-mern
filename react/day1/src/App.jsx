import StudentProfile from "./components/StudentProfile";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieDetails from "./components/MovieDetails";
import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <h1>React Day1 Tasks</h1>

      <StudentProfile />
      <hr />

      <EmployeeCard />
      <hr />

      <ProductCard />
      <hr />

      <MovieDetails />
      <hr />

      <CompanyInfo />
      <hr />

      <Header />
      <hr />

      <MainContent />
      <Footer />
      <hr />

      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;