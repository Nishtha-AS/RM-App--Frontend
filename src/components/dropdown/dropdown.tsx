import React, { useState, useEffect, useRef } from "react";
import "./dropdown.css";
import ChevronDown from "assets/chevron-dropdown.svg";
import ChevronUp from "assets/chevron-dropdown1.svg";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  required?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label className="dropdown-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <div
        className={`dropdown-selector ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="dropdown-selected">
          {selectedValue || "-select-"}
        </div>
        <img
          src={isOpen ? ChevronUp : ChevronDown}
          alt="toggle"
          className="dropdown-icon"
        />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((item, idx) => (
            <div
              key={idx}
              className={`dropdown-option ${selectedValue === item ? "selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation(); // avoid toggling dropdown on select
                handleSelect(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
