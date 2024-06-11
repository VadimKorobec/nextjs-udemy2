"use client";

interface FilterErrorProps {
  error: string;
}

const FilterError = ({ error }: FilterErrorProps) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error}</p>
    </div>
  );
};

export default FilterError;
