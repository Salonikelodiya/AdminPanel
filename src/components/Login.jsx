import React, { useState } from "react";
import { Box, Typography, TextField,Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { color } from "chart.js/helpers";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [authMessage, setAuthMessage] = useState("");
  const navigate = useNavigate();

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password rule: at least 8 chars, 1 number, 1 special char
  const passwordRegex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;

  const validate = () => {
    let tempErrors = {};
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      tempErrors.password =
        "Password must be at least 8 characters with 1 number and 1 special character";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = () => {
    setAuthMessage("");
    if (validate()) {
      // Mock authentication check (replace this with your backend call)
      if (email === "user@example.com" && password === "Passw0rd!") {
        setAuthMessage("Login successful!");
        
        setErrors({});
        // Redirect to dashboard after login success
        setTimeout(() => {
          navigate("/dashboard");
        }, 800);
      } else {
        setAuthMessage("Invalid email or password");
      }
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#fff"
    >
      <Typography variant="h4" fontWeight={700} mb={1}>
        CAMIOCA
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        Intelligent Service
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="#fff"
        boxShadow={2}
        p={4}
        borderRadius={2}
        minWidth={320}
      >
        <Typography variant="h6" mb={2} fontWeight={500}>
          Welcome back!
        </Typography>
        <Box width="100%" mb={2}>
        <TextField
          
          label="Email address"
          placeholder="example@mail.com"
          variant="outlined"
          fullWidth
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        </Box>
        <Box position="relative" width="100%" marginTop="16px" marginBottom="10px">
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={
              errors.password ||
              "Use at least 8 characters with 1 number, and one special character."
            }
          />
          <span
            className="material-icons"
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              userSelect: "none",
              color: "#757575",
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </Box>

        {authMessage && (
          <Typography
            variant="body2"
            color={authMessage === "Login successful!" ? "success.main" : "error"}
            mb={2}
          >
            {authMessage}
          </Typography>
        )}

        <Button
  variant="contained"
  fullWidth
  sx={{
    bgcolor: '#11C47E',
    color: '#fff',
    borderRadius: 99,
    py: 1.5,
    boxShadow: 2,
    '&:hover': { bgcolor: '#0e9f65' },
    '&:active': { bgcolor: '#0b7f4e' },
    transition: 'background 0.2s'
  }}
  onClick={handleLogin}
>
  LOG IN
</Button>

        <Link
          href="#"
          underline="none"
          color="text.secondary"
          sx={{ mt: 2, fontSize: 14 }}
        >
          Forgot password?
          
        </Link>
        
      </Box>
    </Box>
  );
}
