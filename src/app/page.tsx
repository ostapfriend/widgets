"use client";
import React, { Suspense } from "react";
import { Mosaic } from "react-mosaic-component";
import useCompanies from "@/hooks/useCompanies";
import { MosaicTileSkeleton } from "@/components";
import { CompanyI } from "@/utils/interfaces";

const MosaicTile = React.lazy(() => import("@/components/MosaicTile"));

export default function Home() {
  const { allCompanies, initialMosaicValue, handleReplaceCompany } =
    useCompanies();

  const renderTile = (id: string) => {
    const currentCompany = allCompanies.find((c: CompanyI) => c.ticker === id);

    return (
      <Suspense fallback={<MosaicTileSkeleton />}>
        <MosaicTile
          currentCompany={currentCompany as CompanyI}
          handleReplaceCompany={handleReplaceCompany}
          companies={allCompanies}
        />
      </Suspense>
    );
  };

  return (
    <div className="main bg-white h-screen w-screen">
      <Mosaic<string>
        renderTile={renderTile}
        initialValue={initialMosaicValue}
      />
    </div>
  );
}
