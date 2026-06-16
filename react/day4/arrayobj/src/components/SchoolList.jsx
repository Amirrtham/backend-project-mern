import SchoolCard from "./SchoolCard";

const SchoolList = ({ schools }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          school={school}
        />
      ))}
    </div>
  );
};

export default SchoolList;