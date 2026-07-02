function Display({ module, fields, records }) {

  if (records.length === 0) {
    return (
      <div className="display">
        <h2>{module} Records</h2>
        <p>No Records Found</p>
      </div>
    );
  }

  // Employee & Job -> Table
  if (module === "Employee" || module === "Job") {
    return (
      <div className="display">
        <h2>{module} Records</h2>

        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                {fields.map((field, i) => (
                  <td key={i}>{record[field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Remaining Modules -> Cards
  return (
    <div className="display">

      <h2>{module} Records</h2>

      <div className="card-container">

        {records.map((record, index) => (

          <div className="card" key={index}>

            {fields.map((field, i) => (

              <p key={i}>
                <strong>{field} :</strong> {record[field]}
              </p>

            ))}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Display;