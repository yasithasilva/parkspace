import React, { useState } from "react";
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import BackIcon from "../assets/icons/common/caret-left.svg";
import VisaIcon from "../assets/icons/cardpay/visa.png";
import MastercardIcon from "../assets/icons/cardpay/master.png";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const EnterCardDetails = () => {
  // State to store card details
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvn: "" });
  const [inputName, setInputName] = useState(""); // Track which input is focused
  const [showKeyboard, setShowKeyboard] = useState(false);

  // Function to handle input focus
  const handleInputFocus = (input) => {
    setInputName(input);
    setShowKeyboard(true);
  };

  // Function to handle input change
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Function to handle keyboard changes
  const handleKeyboardChange = (input) => {
    if (inputName === "number") {
      setCardDetails({ ...cardDetails, number: input });
    } else if (inputName === "expiry") {
      setCardDetails({ ...cardDetails, expiry: input });
    } else if (inputName === "cvn") {
      setCardDetails({ ...cardDetails, cvn: input });
    }
  };

  // Handle payment
  const handlePayment = () => {
    console.log("Proceeding with payment for:", cardDetails);
    // Add your payment logic here
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: 2,
        borderRadius: "8px",
        overflow: "hidden",
        padding: "16px",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "16px" }}>
        <img src={BackIcon} alt="Back Icon" style={{ width: "24px", marginRight: "8px" }} />
        <Typography variant="h6" fontWeight="bold">Enter Card Details</Typography>
      </Box>

      {/* Select Card Type */}
      <Typography variant="subtitle1" fontWeight="bold">Select a Card Type *</Typography>
      <RadioGroup row defaultValue="visa" sx={{ mt: 1 }}>
        <FormControlLabel value="visa" control={<Radio />} label={<img src={VisaIcon} alt="Visa" style={{ height: "24px" }} />} />
        <FormControlLabel value="mastercard" control={<Radio />} label={<img src={MastercardIcon} alt="Mastercard" style={{ height: "24px" }} />} />
      </RadioGroup>

      {/* Card Number */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>Card Number *</Typography>
      <TextField
        fullWidth
        placeholder="1234 1234 1234 1234"
        value={cardDetails.number}
        onFocus={() => handleInputFocus("number")}
        onChange={handleInputChange((value) => setCardDetails({ ...cardDetails, number: value }))}
        sx={{ mt: 1 }}
      />

      {/* Card Details */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>Card Details *</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <TextField
          fullWidth
          placeholder="Expiry"
          value={cardDetails.expiry}
          onFocus={() => handleInputFocus("expiry")}
          onChange={handleInputChange((value) => setCardDetails({ ...cardDetails, expiry: value }))}
        />
        <TextField
          fullWidth
          placeholder="CVN"
          value={cardDetails.cvn}
          onFocus={() => handleInputFocus("cvn")}
          onChange={handleInputChange((value) => setCardDetails({ ...cardDetails, cvn: value }))}
        />
      </Box>

      {/* Total Amount */}
      <Typography variant="h6" fontWeight="bold" mt={3} display="flex" justifyContent="space-between">
        <span>Total Amount</span>
        <span>RS. 2375</span>
      </Typography>




           {/* Virtual Keyboard */}
      {showKeyboard && (
        <Keyboard
          onChange={handleKeyboardChange}
          inputName={inputName}
          layoutName="default"

          
        />


      )}

      {/* Proceed Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, backgroundColor: "#28a745", color: "white", fontSize: "16px", padding: "12px" }}
        onClick={handlePayment}
      >
        Proceed Payment
      </Button>

 
    </Box>
  );
};

export default EnterCardDetails;
