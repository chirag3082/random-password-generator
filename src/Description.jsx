import React from "react";

const Description = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-2">About This Project</h2>
      <ul className="list-disc pl-6 text-md text-gray-300">
        <li className="pl-2">This Password Generator helps create strong and secure passwords.</li>
        <li className="pl-2">Customize password length, uppercase/lowercase letters, numbers, and special characters.</li>
        <li className="pl-2">Copy the generated password easily for secure use.</li>
        <li className="pl-2">Keep your accounts safe from potential threats.</li>
      </ul>
    </div>
  );
};

export default Description;
