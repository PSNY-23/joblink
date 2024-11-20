import React, { useEffect, useState } from "react";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/myJobs/pankajteceract@gmail.com')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-screen-2xl min-h-screen container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none
          lg:w-6/12 mb-4 w-full"
          />
          <button className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
