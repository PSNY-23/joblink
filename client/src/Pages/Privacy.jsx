import React from "react";
import {
  FaLock,
  FaFileContract,
  FaUserShield,
  FaShieldAlt,
} from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <FaFileContract className="text-blue-600 mr-2" /> Privacy Policy
      </h2>
      <p className="text-gray-700 mb-4">
        Disclaimer: In case of any discrepancy or difference, the English
        version will take precedence over the translation.
      </p>
      <p className="text-gray-700 mb-4">
        We value your trust and recognize the importance of secure transactions
        and information privacy. This Privacy Policy outlines how joblink
        collects, uses, shares, or otherwise processes your personal data
        through our website joblink.com, mobile application, and any related
        services (hereinafter referred to as the “Platform”).
      </p>
      <p className="text-gray-700 mb-4">
        By visiting this Platform, providing your information, or using our
        services, you expressly agree to be bound by the terms and conditions of
        this Privacy Policy and applicable service/product terms. If you do not
        agree, please do not use or access our Platform.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaUserShield className="text-blue-600 mr-2" /> Collection of Your
        Information
      </h3>
      <p className="text-gray-700 mb-4">
        When you use our Platform, we collect and store the information you
        provide to us. Once you share your personal data, you are not anonymous
        to us. We indicate which fields are required and which are optional, and
        you have the choice not to provide data by opting out of certain
        features.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaShieldAlt className="text-blue-600 mr-2" /> Use of Your Information
      </h3>
      <p className="text-gray-700 mb-4">
        We use your personal data to process orders, deliver products and
        services, process payments, and communicate with you regarding your
        transactions and offers. We may also use your data to enhance customer
        experience, resolve disputes, and prevent fraud.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaLock className="text-blue-600 mr-2" /> Cookies
      </h3>
      <p className="text-gray-700 mb-4">
        Our Platform may use cookies to analyze web traffic and improve our
        services. Cookies are small files stored on your device that help us
        understand user preferences.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaShieldAlt className="text-blue-600 mr-2" /> Sharing of Personal Data
      </h3>
      <p className="text-gray-700 mb-4">
        We may share your personal data with trusted third parties, including
        service providers and partners, to fulfill your orders and enhance your
        experience. This includes sharing data for payment processing, customer
        support, and marketing purposes.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaLock className="text-blue-600 mr-2" /> Security Precautions
      </h3>
      <p className="text-gray-700 mb-4">
        We implement reasonable physical, electronic, and procedural safeguards
        to protect your personal data. While we strive to protect your
        information, we cannot guarantee complete security in data transmission
        over the internet.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaUserShield className="text-blue-600 mr-2" /> Your Rights
      </h3>
      <p className="text-gray-700 mb-4">
        You have the right to access, correct, and delete your personal data.
        You may withdraw your consent to our processing of your data at any
        time. To exercise these rights, please contact us using the information
        provided below.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaFileContract className="text-blue-600 mr-2" /> Changes to this
        Privacy Policy
      </h3>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy periodically to reflect changes in our
        practices. We will notify you of significant changes by posting the
        updated policy on our Platform.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaUserShield className="text-blue-600 mr-2" /> Grievance Officer
      </h3>
      <p className="text-gray-700 mb-4">
        For any grievances related to your personal data, please contact our
        Grievance Officer:
        <br />
        Name: curtomersupprt@joblink.com
        <br />
        Designation: customer support manager
        <br />
        Company Name: JobLink
        <br />
        Address: Banglore, India
        <br />
        Email: joblink@gmail.com
      </p>

      <h3 className="text-xl font-semibold text-gray-800 my-4 flex items-center">
        <FaLock className="text-blue-600 mr-2" /> Customer Support
      </h3>
      <p className="text-gray-700 mb-4">
        For queries or concerns regarding this Privacy Policy, please contact us
        at joblink@gmail.com.
      </p>

      <p className="text-gray-700">Last Updated: 3 Nov, 2024</p>
    </div>
  );
};

export default Privacy;
