import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function PaymentRazorpay({ amount, name, email, phone, isButtonDisabled }) {
  const [complete, setComplete] = useState(false);
  const isSubmitting = false; // Set the correct condition for isSubmitting
  const navigate = useNavigate(); // Use useNavigate from React Router

  const loaderScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loaderScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..."); // Fix the alert message
      return;
    }

    const amountInPaise = Math.round(amount * 100);
    const options = {
      key: "rzp_test_7LP8c60azatn1s",
      amount: amountInPaise * 1,
      currency: "INR",
      name: name,
      description: "Thank you",
      image: {
        src: "",
        width: 200, // Correct the width and height values
        height: 100,
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment successful");
        setComplete(true);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    if (complete) {
      navigate("/succesfull");
    }
  }, [complete, navigate]);

  return (
    <div>
      {/* <button
        className="m-5 p-5 bg-blue-400 text-black font-semibold rounded-md"
        disabled={isSubmitting}
        type="button" // Use "button" type
        
      >
      
      </button> */}
      <button
        onClick={() => displayRazorpay(amount)}
        type="button"
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded ${
          isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isButtonDisabled}
      >
        {`Donate now  ${amount} Rs`}
      </button>
    </div>
  );
}

export default PaymentRazorpay;
