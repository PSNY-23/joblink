import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

function CreateJob() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // fetch("http://localhost:3000/post-job", {
      const apiUrl = process.env.REACT_APP_API_URL; // Get the API URL from environment variables
      fetch(`${apiUrl}/post-job`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          alert("Job Posted successfully ✅");
        }
        reset();
      });
  };

  const options = [
    { value: "javascript", label: "javascript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDb", label: "MongoDb" },
    { value: "Next", label: "Next" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 xl:px-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Job Title */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={"web developer"}
                {...register("jobTitle", { required: "Job title is required" })}
                className={`create-job-input px-3 py-1 border ${errors.jobTitle ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex Microsoft"
                {...register("companyName", { required: "Company name is required" })}
                className={`create-job-input px-3 py-1 border ${errors.companyName ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
            </div>
          </div>

          {/* Salary Fields */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Minimum Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g $20K"
                {...register("minPrice", { required: "Minimum salary is required" })}
                className={`create-job-input px-3 py-1 border ${errors.minPrice ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {errors.minPrice && <p className="text-red-500">{errors.minPrice.message}</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Maximum Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g $100K"
                {...register("maxPrice", { required: "Maximum salary is required" })}
                className={`create-job-input px-3 py-1 border ${errors.maxPrice ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {errors.maxPrice && <p className="text-red-500">{errors.maxPrice.message}</p>}
            </div>
          </div>

          {/* Job Location */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Job Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g San Francisco"
                {...register("jobLocation", { required: "Job location is required" })}
                className={`create-job-input px-3 py-1 border ${errors.jobLocation ? "border-red-500" : "border-gray-300"} rounded`}
              />
              {errors.jobLocation && <p className="text-red-500">{errors.jobLocation.message}</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input px-3 py-1 border border-gray-300 rounded">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Experience Level */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <select
                {...register("experienceLevel", { required: "Experience level is required" })}
                className={`create-job-input px-3 py-1 border ${errors.experienceLevel ? "border-red-500" : "border-gray-300"} rounded`}
              >
                <option value="">Choose Your Experience</option>
                <option value="No Experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work Remotely">Work Remotely</option>
              </select>
              {errors.experienceLevel && <p className="text-red-500">{errors.experienceLevel.message}</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">Job Posting Date</label>
              <input
                type="date"
                {...register("postingDate")}
                className="create-job-input px-3 py-1 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Required Skill Set */}
          <div>
            <label className="block mb-2 text-lg text-gray-500">Required Skill Set</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={selectedOptions}
              onChange={(selected) => {
                setSelectedOptions(selected);
              }}
              options={options}
              isMulti
            />
          </div>

          {/* Company Logo */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-5">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">Company Logo</label>
              <input
                type="url"
                placeholder="e.g Paste Your Company Logo URL : https://example.com/logo"
                {...register("companyLogo")}
                className="create-job-input px-3 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-500">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input px-3 py-1 border border-gray-300 rounded"
              >
                <option value="">Choose Your Employment Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="w-full">
            <label className="block mb-2 text-lg text-gray-500">Job Description</label>
            <textarea
              {...register("description")}
              className="w-full pl-3 py-1 border border-gray-300 rounded focus:outline-blue"
              rows="6"
              placeholder="Your Job Description"
              defaultValue={
                "[Job Title][Company Name] is looking for a skilled [Job Title] to join our team in [Location]. In this role, you'll be responsible for [Key Responsibility 1], [Key Responsibility 2], and [Key Responsibility 3]. The ideal candidate has [X years] of experience in [Field/Industry] and strong [Key Skill/Qualification]. We offer a competitive salary and benefits package, including [Benefit 1] and [Benefit 2]. If you're passionate about [Industry/Field] and eager to make an impact, we encourage you to apply!"
              }
            ></textarea>
          </div>

          {/* Job Posted By */}
          <div className="">
            <label className="block mb-2 text-lg text-gray-500">
              Job Posted By <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy", { required: "Email is required" })}
              className={`create-job-input px-3 py-1 border ${errors.postedBy ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {errors.postedBy && <p className="text-red-500">{errors.postedBy.message}</p>}
          </div>
          <div className="flex justify-end align-center">
            <input
              type="submit"
              className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
