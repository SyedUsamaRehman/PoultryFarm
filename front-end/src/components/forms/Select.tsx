import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ name, options, value, onChange }) => {
  return (
    <select
      className="p-1 outline-none lg:p-4"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
