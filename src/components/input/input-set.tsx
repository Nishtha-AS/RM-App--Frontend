import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import EyeIcon from "assets/eye.svg";
import EyeOffIcon from "assets/eye-off.svg";
import "./input-set.css";

interface InputSetProps {
  label: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  type?: string; // Optional: 'text' or 'password'
  disabled?: boolean; // ✅ Added support for disabled
}

const InputSet: FunctionComponent<InputSetProps> = ({
  label,
  placeholder = "Enter input",
  value,
  onChange,
  required = false,
  showError = false,
  type = "text",
  disabled = false // ✅ default is false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <Box className="input-wrapper">
      <label className="input-label" style={{ color: "#2D5497" }}>
        {label} {required && <span style={{ color: "#f00" }}>*</span>}
      </label>
      <Box className="input-box-container">
        <input
          className={`input-field ${showError ? "input-error" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          type={isPassword && !showPassword ? "password" : "text"}
          disabled={disabled} // ✅ now supported
          style={{
            height: "40px",
            width: "100%",
            paddingRight: isPassword ? "36px" : "12px",
            backgroundColor: disabled ? "#f5f5f5" : "white",
            cursor: disabled ? "not-allowed" : "text"
          }}
        />
        {isPassword && (
          <img
            src={showPassword ? EyeIcon : EyeOffIcon}
            alt="toggle visibility"
            className="eye-icon-inside"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </Box>
      {showError && (
        <span className="error-message">This field is required</span>
      )}
    </Box>
  );
};

export default InputSet;
