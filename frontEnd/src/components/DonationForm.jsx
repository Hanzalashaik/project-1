import React, { useState } from "react";
import PaymentRazorpay from "./PaymentRazorpay";

function DonationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  const [isPhoneValid, setPhoneValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPhoneNumberValid = (phone) => {
    // You can implement your phone number validation logic here.
    // For example, checking if it's a valid phone number.
    return /^[\d\+\-\(\) ]*$/.test(phone);
  };

  const isDonationAmountValid = (amount) => {
    return parseFloat(amount) > 10;
  };

  const handlePhoneValidation = (e) => {
    const phone = e.target.value;

    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    const isValid = phonePattern.test(phone);
    setPhoneValid(isValid);
  };
  const handleAmountValidation = (e) => {
    const amount = e.target.value;
    setAmountValid(isDonationAmountValid(amount));
  };

  const isButtonDisabled = !(isPhoneValid && isAmountValid);

  return (
    <div className="max-w-md mx-[10px] md:mx-auto my-[70px] p-5 border border-black rounded-lg hover:shadow-xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Make a Donation</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handlePhoneValidation}
            required
            className={`w-full border border-gray-300 rounded p-2 ${
              !isPhoneValid ? "border-red-500" : ""
            }`}
          />
          {!isPhoneValid && (
            <p className="text-red-500 text-sm">
              Please enter a valid phone number.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Donation Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            onBlur={handleAmountValidation}
            required
            className={`w-full border border-gray-300 rounded p-2 ${
              !isAmountValid ? "border-red-500" : ""
            }`}
          />
          {!isAmountValid && (
            <p className="text-red-500 text-sm">
              Donation amount must be greater than $10.
            </p>
          )}
        </div>

        <PaymentRazorpay
          name={formData.name}
          phone={formData.phone}
          email={formData.email}
          amount={formData.amount}
          isButtonDisabled={isButtonDisabled}
        />
      </form>
    </div>
  );
}

export default DonationForm;
