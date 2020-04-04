/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
// import './CardSectionStyles.css'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
      <div>
        <label>
        Card details
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        </label>
        <style jsx global>{`
        .StripeElement {
            height: 40px;
            padding: 10px 12px;
            width: 100%;
            color: #32325d;
            background-color: white;
            border: 1px solid transparent;
            border-radius: 4px;
        
            box-shadow: 0 1px 3px 0 #e6ebf1;
            -webkit-transition: box-shadow 150ms ease;
            transition: box-shadow 150ms ease;
        }
        
        .StripeElement--focus {
            box-shadow: 0 1px 3px 0 #cfd7df;
        }
        
        .StripeElement--invalid {
            border-color: #fa755a;
        }
        
        .StripeElement--webkit-autofill {
            background-color: #fefde5 !important;
        }
        `}</style>
    </div>
  );
};

export default CardSection;