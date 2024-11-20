import React, { useState } from "react";
import { FaEnvelopeOpenText, FaRocket, FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa"; // Added icons
import { toast, ToastContainer } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the notifications

function NewsLetter() {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [fileName, setFileName] = useState("No file chosen"); // Default message
  const [isUploading, setIsUploading] = useState(false); // Track if uploading
  const [uploadSuccess, setUploadSuccess] = useState(false); // Track if upload was successful
  const [email, setEmail] = useState(""); // Store email for subscription
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false); // Track if email is being submitted
  const [notificationType, setNotificationType] = useState(null); // Track notification type (success or error)
  const [isFileValid, setIsFileValid] = useState(true); // Track if file is valid
  const [isEmailValid, setIsEmailValid] = useState(true); // Track if email is valid

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
  const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/jpg"]; // Allowed file types

  // Handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Store the email
    setIsEmailValid(true); // Reset email validation state
  };

  // Handle file selection with validation
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    if (selectedFile) {
      // Validate file size (max 2MB)
      if (selectedFile.size > MAX_FILE_SIZE) {
        setIsFileValid(false);
        toast.error("File is too large! Maximum size is 2MB.");
        setFile(null);
        setFileName("No file chosen");
        return;
      }

      // Validate file type (only PDF and JPG)
      if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
        setIsFileValid(false);
        toast.error("Invalid file type! Only PDF and JPG are allowed.");
        setFile(null);
        setFileName("No file chosen");
        return;
      }

      // If valid, set the file
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setIsFileValid(true); // Reset file validation state
    }
  };

  // Handle file upload
  const handleUpload = () => {
    // Validate if file is selected and valid
    if (!file || !isFileValid) {
      toast.error("Please select a valid file to upload!");
      return;
    }

    setIsUploading(true); // Set uploading state
    setUploadSuccess(false); // Reset success status during upload
    setNotificationType("loading");

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("email", email);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resume uploaded!");
        }
        return response.json();
      })
      .then((data) => {
        setIsUploading(false); // Stop the spinner
        setUploadSuccess(true); // Show success icon
        setNotificationType("success");
        toast.success("File uploaded successfully!", { autoClose: 2000 });

        // Reset file input after successful upload
        setTimeout(() => {
          setFile(null);
          setFileName("No file chosen");
          setUploadSuccess(false); // Reset upload success after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setIsUploading(false); // Stop the spinner
        setFile(null); // Reset the file input
        setFileName("No file chosen"); // Reset the file name display
        setNotificationType("error");
        toast.success(`File uloaded successfully`, { autoClose: 2000 });
      });
  };

  // Handle email submission
  const handleEmailSubmit = () => {
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      setIsEmailValid(false);
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsEmailSubmitting(true); // Set email submitting state
    setNotificationType("loading");

    // Simulate email submission logic (replace with your backend API)
    setTimeout(() => {
      setIsEmailSubmitting(false); // Stop the spinner
      toast.success("Successfully subscribed!", { autoClose: 2000 });

      // Reset email input after successful submission
      setEmail("");
      setIsEmailValid(true); // Reset email validation state after success
    }, 2000);
  };

  return (
    <div className="min-w-[200px] w-full">
      {/* Email Subscription Section */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Subscribe to receive updates and job notifications.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
            onClick={handleEmailSubmit}
            disabled={isEmailSubmitting} // Disable button during submission
          >
            {isEmailSubmitting ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : !isEmailValid ? (
              <FaTimesCircle className="text-red-500 mr-2" />
            ) : (
              ""
            )}
            {isEmailSubmitting ? "Sending..." : "Subscribe"}
          </button>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="mt-24">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Upload your resume to get noticed by recruiters!
        </p>
        <div className="w-full space-y-4">
          {/* Custom File Input */}
          <label className="block">
            <input
              type="file"
              name="file"
              id="file"
              className="hidden" // Hide the default file input
              onChange={handleFileChange}
            />
            <span className="w-full block py-2 pl-3 border focus:outline-none text-gray-600 cursor-pointer">
              {/* Display the selected file name or default message */}
              {fileName}
            </span>
          </label>

          {/* Upload Button */}
          <button
            className="w-full block text-sm py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
            onClick={handleUpload}
            disabled={isUploading} // Disable the button during upload
          >
            {isUploading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : uploadSuccess ? (
              <FaCheckCircle className="text-green-500 mr-2" />
            ) : (
              "Upload your resume"
            )}
            {isUploading ? "Uploading..." : uploadSuccess ? "Uploaded!" : ""}
          </button>
        </div>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
}

export default NewsLetter;
