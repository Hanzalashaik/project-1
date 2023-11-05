import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className={` hover:bg-yellow-300 p-8 rounded-lg shadow-md 
        `}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You for Your Donation!
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          We appreciate your effor and look forward to help each other.
        </p>

        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
            Thank you
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
