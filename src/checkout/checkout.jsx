import React from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { useState, useEffect } from "react";

import "./checkout.css";

const stripePromise = loadStripe(
  "pk_test_51MZFiKLVQdY0Tl7LtuAz0myFN1fkYMKDyUFv9mxMsJHnQ1lORRBlsPCPAFGhgJTRsBR09uHR04sj2oLSTarGYX3M00ewDOJuJ5"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      signal,
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

    return () => {
      controller.abort();
    };
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#d04e82",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
