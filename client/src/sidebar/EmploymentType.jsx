import React from "react";
import InputField from "../components/InputField";

function EmploymentType({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">EmploymentType</h4>
      <div className="flex flex-col gap-1">
        <label className="sidebar-label-container" htmlFor="all">
          <input
            type="radio"
            name="location"
            id="all"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
        
      </div>
    </div>
  );
}

export default EmploymentType;
