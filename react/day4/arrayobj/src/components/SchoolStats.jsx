const SchoolStats = ({ schools }) => {
  const totalSchools = schools.length;

  const totalStudents = schools.reduce(
    (sum, school) => sum + school.students,
    0
  );

  const totalTeachers = schools.reduce(
    (sum, school) => sum + school.teachers,
    0
  );

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-500 text-white p-5 rounded-lg text-center">
        <h2 className="text-2xl font-bold">
          {totalSchools}
        </h2>
        <p>Total Schools</p>
      </div>

      <div className="bg-green-500 text-white p-5 rounded-lg text-center">
        <h2 className="text-2xl font-bold">
          {totalStudents}
        </h2>
        <p>Total Students</p>
      </div>

      <div className="bg-purple-500 text-white p-5 rounded-lg text-center">
        <h2 className="text-2xl font-bold">
          {totalTeachers}
        </h2>
        <p>Total Teachers</p>
      </div>
    </div>
  );
};

export default SchoolStats;