import React from "react";
import InputField from "../components/InputField";

function JobPostingData({ handleChange }) {
  const now = new Date();
  const twentyFourHourAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDayAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDayAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //convert Date to string
  const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0, 10);
  const sevenDayAgoDate = sevenDayAgo.toISOString().slice(0, 10);
  const thirtyDayAgoDate = thirtyDayAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Data of Posting</h4>
      <div className="flex flex-col gap-1">
        <label className="sidebar-label-container" htmlFor="all">
          <input
            type="radio"
            name="location"
            id="all"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHourAgoDate}
          title="Last 24 Hours"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDayAgoDate}
          title="7 Day Ago"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDayAgo}
          title="Last Month"
          name="location"
        />
        
      </div>
    </div>
  );
}

export default JobPostingData;
