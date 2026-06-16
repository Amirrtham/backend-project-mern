const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 hover:scale-105 transition duration-300">
      <h2 className="text-xl font-bold text-blue-600">
        {school.name}
      </h2>

      <p className="text-gray-600">{school.city}</p>

      <p className="mt-2">
        <span className="font-semibold">Principal:</span>{" "}
        {school.principal}
      </p>

      <p>
        <span className="font-semibold">Students:</span>{" "}
        {school.students}
      </p>

      <p>
        <span className="font-semibold">Teachers:</span>{" "}
        {school.teachers}
      </p>

      <div className="mt-3">
        <h3 className="font-semibold mb-2">
          Courses Offered
        </h3>

        <div className="flex flex-wrap gap-2">
          {school.courses.map((course, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold mb-2">
          Sports Available
        </h3>

        <div className="flex flex-wrap gap-2">
          {school.sports.map((sport, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;