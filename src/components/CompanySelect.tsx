import React from "react";
import { CompanyI } from "@/utils/interfaces";

interface CompanySelectProps {
  companies: CompanyI[];
  currentTicker: string;
  handleReplaceCompany: (oldTicker: string, newTicker: string) => void;
}

export const CompanySelect: React.FC<CompanySelectProps> = ({
  companies,
  currentTicker,
  handleReplaceCompany,
}) => {
  return (
    <select
      onChange={(e) => handleReplaceCompany(currentTicker, e.target.value)}
      defaultValue={currentTicker}
      className="p-2 mr-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 max-w-xs min-w-[150px] w-full"
    >
      {companies.map((c) => (
        <option key={c.ticker} value={c.ticker}>
          {c.name} ({c.ticker})
        </option>
      ))}
    </select>
  );
};
