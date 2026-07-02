import { useState, useEffect } from "react";

function Form({ module, fields, saveRecord }) {
  const createForm = () => {
    const obj = {};
    fields.forEach((field) => {
      obj[field] = "";
    });
    return obj;
  };

  const [formData, setFormData] = useState(createForm());

  useEffect(() => {
    setFormData(createForm());
  }, [module]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    for (let key in formData) {
      if (formData[key].trim() === "") {
        alert(`${key} is required`);
        return;
      }
    }

    saveRecord(formData);

    alert(module + " added successfully!");

    setFormData(createForm());
  };

  return (
    <div className="form-container">
      <h2>{module} Form</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <input
            key={index}
            type={
              field.toLowerCase().includes("password")
                ? "password"
                : field.toLowerCase().includes("email")
                ? "email"
                : field.toLowerCase().includes("age") ||
                  field.toLowerCase().includes("price") ||
                  field.toLowerCase().includes("salary") ||
                  field.toLowerCase().includes("experience")
                ? "number"
                : "text"
            }
            name={field}
            placeholder={field}
            value={formData[field] || ""}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;