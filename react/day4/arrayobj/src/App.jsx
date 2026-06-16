import Header from "./components/Header";
import Footer from "./components/Footer";
import SchoolStats from "./components/SchoolStats";
import SchoolList from "./components/SchoolList";

function App() {
  const schools = [
    {
      id: 1,
      name: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
      courses: [
        "LKG",
        "UKG",
        "Primary",
        "High School",
      ],
      sports: [
        "Cricket",
        "Football",
        "Basketball",
      ],
    },
    {
      id: 2,
      name: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 90,
      courses: [
        "LKG",
        "UKG",
        "Primary",
      ],
      sports: [
        "Football",
        "Volleyball",
      ],
    },
    {
      id: 3,
      name: "Modern Public School",
      city: "Madurai",
      principal: "Priya",
      students: 2200,
      teachers: 100,
      courses: [
        "Primary",
        "Middle School",
        "High School",
      ],
      sports: [
        "Cricket",
        "Basketball",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="container mx-auto px-5">
        <SchoolStats schools={schools} />

        <SchoolList schools={schools} />
      </div>

      <Footer />
    </div>
  );
}

export default App;