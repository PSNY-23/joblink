import React, { useState, useEffect, useMemo } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "../Pages/Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";
import { FaFilter } from "react-icons/fa6";



function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // The '/api' prefix will be proxied


  useEffect(() => {
    setIsLoading(true);
    // const apiUrl = import.meta.env.VITE_API_URL;
    fetch('/api/all-jobs')
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      
      .then((data) => {
        setJobs(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = useMemo(
    () =>
      jobs.filter((job) =>
        job?.jobTitle?.toLowerCase().includes(query.toLowerCase())
      ),
    [jobs, query]
  );
  

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const filteredData = () => {
    let filteredJobs = filteredItems;

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter((job) => {
        const jobLocationMatch =
          job.jobLocation &&
          job.jobLocation.toLowerCase() === selectedCategory.toLowerCase();
        const salaryTypeMatch =
          job.salaryType &&
          job.salaryType.toLowerCase() === selectedCategory.toLowerCase();
        const employmentTypeMatch =
          job.employmentType &&
          job.employmentType.toLowerCase() === selectedCategory.toLowerCase();
        const experienceLevelMatch =
          job.experienceLevel &&
          job.experienceLevel.toLowerCase() === selectedCategory.toLowerCase();

        return (
          jobLocationMatch ||
          salaryTypeMatch ||
          employmentTypeMatch ||
          experienceLevelMatch
        );
      });
    }

    const { startIndex, endIndex } = calculatePageRange();
    return filteredJobs
      .slice(startIndex, endIndex)
      .map((data) => <Card key={data.id} data={data} />);
  };

  const result = filteredData();

  return (
    <>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] lg:flex lg:px-24 px-4 py-12">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} />
        </div>

        {/* Button to toggle sidebar on smaller screens */}
        <div className="lg:hidden flex justify-between mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-blue-500 text-black font-bold px-6 py-3 rounded-lg shadow-md text-lg flex justify-center items-center gap-2"
          >
            Filter Jobs <FaFilter />
          </button>
        </div>

        {/* Sidebar for small screens */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-auto">
            <div className="p-4 max-h-full overflow-y-scroll">
              <Sidebar handleChange={handleChange} />
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="bg-blue text-white px-4 py-2 rounded mt-4 w-full"
              >
                Search
              </button>
            </div>
          </div>
        )}

        {/* Job Listings */}
        <div className="col-span-2  bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-bold">🔃Loading....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p className="">No data found</p>
            </>
          )}

          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      Math.ceil(filteredItems.length / itemsPerPage)
                    )
                  )
                }
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </>
  );
}

export default Home;
