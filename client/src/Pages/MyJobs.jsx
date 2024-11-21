import React, { useEffect, useState } from "react";
import Card from "../components/Card"

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(""); // State for user's email

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  // Fetch user email on component mount (You can get this from auth/session or props)
  useEffect(() => {
    // Assuming the user email is available in session/local storage
    const emailFromSession = "pankajteceract@gmail.com"; // Example for getting email from local storage

    if (emailFromSession) {
      setUserEmail(emailFromSession);
    } else {
      // If no email found, you can redirect or handle accordingly
      console.error("No email found in session.");
    }
  }, []);

  // Fetch jobs based on the user's email when component loads or email changes
  useEffect(() => {
    const fetchJobs = async () => {
      if (userEmail) {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://joblink-backend-2.onrender.com/myJobs/${userEmail}`
          );

          if (!res.ok) {
            throw new Error(`Error fetching jobs: ${res.statusText}`);
          }

          const data = await res.json();
          setJobs(data);
        } catch (err) {
          console.error("Error fetching jobs: ", err);
        } finally {
          setIsLoading(false); // Ensure loading is stopped after request is done
        }
      }
    };

    fetchJobs();
  }, [userEmail]); // Dependency on userEmail to re-fetch when email is set or updated

  // Filter jobs based on search text
  const filteredJobs = jobs.filter(
    (job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchText.toLowerCase()) ||
      job.jobLocation.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-screen-2xl min-h-screen container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>

        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            onChange={handleChange}
            value={searchText} // Controlled input
            placeholder="Search for jobs"
          />
          <button
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
            onClick={() => setSearchText("")} // Reset search on button click
          >
            Clear
          </button>
        </div>
      </div>

      <div className="col-span-2 bg-white p-4 rounded-sm">
        {isLoading ? (
          <p className="font-bold">🔃 Loading...</p>
        ) : filteredJobs.length > 0 ? (
          <div>
              <div className="jobs-list flex flex-col gap-2">
                {filteredJobs
                  .map((data) => <Card key={data.id} data={data} />)
                }
                
            </div>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default MyJobs;
