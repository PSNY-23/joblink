import React from "react";
import InputField from "../components/InputField";

function Salary({ handleChange}) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Salary</h4>
      
      <div className='flex flex-col gap-1'>
        <label className="sidebar-label-container" htmlFor="all">
          <input
            type="radio"
            name="test"
            id="all"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
}

export default Salary;
