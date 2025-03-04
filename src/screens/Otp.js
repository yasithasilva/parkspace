import React, { useState } from "react";
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import BackIcon from "../assets/icons/common/caret-left.svg";
import VisaIcon from "../assets/icons/cardpay/visa.png";
import MastercardIcon from "../assets/icons/cardpay/master.png";

const EnterCardDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvn, setCvn] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
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
        value={cardNumber}
        onFocus={() => setShowKeyboard(true)}
        onChange={handleInputChange(setCardNumber)}
        sx={{ mt: 1 }}
      />

      {/* Card Details */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>Card Details *</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <TextField
          fullWidth
          placeholder="Expiry"
          value={expiry}
          onFocus={() => setShowKeyboard(true)}
          onChange={handleInputChange(setExpiry)}
        />
        <TextField
          fullWidth
          placeholder="CVN"
          value={cvn}
          onFocus={() => setShowKeyboard(true)}
          onChange={handleInputChange(setCvn)}
        />
      </Box>

      {/* Total Amount */}
      <Typography variant="h6" fontWeight="bold" mt={3} display="flex" justifyContent="space-between">
        <span>Total Amount</span>
        <span>RS. 2375</span>
      </Typography>

      {/* Proceed Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, backgroundColor: "#28a745", color: "white", fontSize: "16px", padding: "12px" }}
      >
        Proceed Payment
      </Button>

      
    </Box>
  );
};

export default EnterCardDetails;
