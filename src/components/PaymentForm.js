// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
  }

  &:hover:not(:disabled) {
    background-color: #45a049; /* Darker green */
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

const SuccessMessage = styled.div`
  color: green;
  text-align: center;
`;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { plan } = location.state || {};
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    // Fetch client secret from backend
    const { data: { clientSecret } } = await axios.post('/api/create-payment-intent', {
      amount: parseInt(plan.price.replace(/\D/g, '')) * 100,
    });

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    if (error) {
      setError(error.message);
      setSuccess(null);
    } else {
      setSuccess('Payment successful!');
      setError(null);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Pay for {plan.title}</Title>
      <CardWrapper>
        <CardElement />
      </CardWrapper>
      <Button type="submit" disabled={!stripe}>
        Pay {plan.price}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </FormContainer>
  );
};

export default PaymentForm;
