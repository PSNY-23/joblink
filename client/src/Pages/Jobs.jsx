import React from "react";

function Jobs({ result }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
      {result.length > 0 ? (
        <section className="grid grid-cols-1 gap-4">
          {result.map((job,index) => (
            <div key={index}>{job}</div> // Ensure `job` is a Card component or similar
          ))}
        </section>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default Jobs;
