import React from "react";
import { CompanyI } from "@/utils/interfaces";
import { MosaicTileSkeleton } from "./MosaicTileSkeleton";
import Link from "next/link";
import { CompanySelect } from "./CompanySelect";

interface MosaicTileProps {
  currentCompany: CompanyI;
  companies: CompanyI[];
  handleReplaceCompany: (oldTicker: string, newTicker: string) => void;
}

const MosaicTile: React.FC<MosaicTileProps> = ({
  currentCompany,
  companies,
  handleReplaceCompany,
}) => {
  if (!currentCompany) return <MosaicTileSkeleton />;

  return (
    <div className="border-2 border-pink-500 rounded-lg p-4 m-2 bg-white shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <CompanySelect
          companies={companies}
          currentTicker={currentCompany.ticker}
          handleReplaceCompany={handleReplaceCompany}
        />
      </div>

      <h2 className="text-lg font-bold mt-2 hover:text-pink-600 transition duration-200">
        {currentCompany.name}
      </h2>

      <p className="text-md mt-1">
        <strong>Industry:</strong> {currentCompany.industry_category}
      </p>

      <p className="text-md mt-1">
        <strong>Industry Group:</strong> {currentCompany.industry_group}
      </p>

      <p className="text-md mt-1">
        <strong>Address:</strong> {currentCompany.business_address}
      </p>

      <p className="text-md mt-1">
        <strong>Postal Code:</strong> {currentCompany.hq_address_postal_code}
      </p>

      <p className="text-md mt-1">
        <strong>Company Site:</strong>{" "}
        <Link href={`https://${currentCompany.company_url}`} target="_blank">
          <span className="text-blue-500 underline hover:text-blue-700 transition duration-200">
            {currentCompany.company_url}
          </span>
        </Link>
      </p>

      <p className="text-md mt-1">
        <strong>Employees:</strong> {currentCompany.employees}
      </p>

      <p className="text-md mt-1">
        <strong>Country:</strong> {currentCompany.inc_country}
      </p>

      <p className="text-md mt-1">
        <strong>State:</strong> {currentCompany.inc_state}
      </p>
    </div>
  );
};

export default MosaicTile;
