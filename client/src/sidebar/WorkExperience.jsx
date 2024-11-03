import React from "react";
import InputField from "../components/InputField";

function WorkExperience({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div className="flex flex-col gap-1">
        <label className="sidebar-label-container" htmlFor="all">
          <input
            type="radio"
            name="location"
            id="all"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>

        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Work Remotely"
          title="Work Remotely"
          name="test"
        />
        
      </div>
    </div>
  );
}

export default WorkExperience;
