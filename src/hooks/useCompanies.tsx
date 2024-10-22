import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyI } from "@/utils/interfaces";
import {
  addCompany,
  addThreeCompanies,
  replaceCompany,
  setCompanies,
} from "@/store/slices/companiesSlice";
import { RootState } from "@/store";
import { MosaicTileT } from "@/utils/types";

/**
 * @useCompanies
 * A custom hook for managing company data within the application.
 * It provides functionality to fetch companies from an API,
 * set the fetched companies in the Redux store,
 * manage the selection of companies,
 * and prepare initial mosaic layout values.
 *
 * Returns:
 * - allCompanies: The list of all available companies.
 * - selectedCompanies: The list of currently selected companies.
 * - initialMosaicValue: An initial value for mosaic layout based on selected companies.
 * - handleReplaceCompany: A function to replace a selected company.
 * - handleAddCompany: A function to add a new company to the selection.
 */
const useCompanies = () => {
  const dispatch = useDispatch();
  const { allCompanies, selectedCompanies } = useSelector(
    (state: RootState) => state.companies,
  );

  const initialMosaicValue = useMemo(() => {
    if (!selectedCompanies || selectedCompanies.length === 0) return [];
  
    const uniqueTickers = Array.from(new Set(selectedCompanies.map((c: CompanyI) => c.ticker)));
  
    const loadingPlaceholder = (index: number) => `Loading ${index + 1}`;
  
    const [firstTicker, secondTicker, thirdTicker] = [
      uniqueTickers[0] || loadingPlaceholder(0),
      uniqueTickers[1] || loadingPlaceholder(1),
      uniqueTickers[2] || loadingPlaceholder(2),
    ];
  
    return {
      direction: "row",
      first: firstTicker,
      second: {
        direction: "column",
        first: secondTicker,
        second: thirdTicker,
      },
      splitPercentage: 40,
    } as MosaicTileT;
  }, [selectedCompanies]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/companies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: CompanyI[] = await response.json();

        const uniqueCompanies = Array.from(
          new Map(data.map((company) => [company.ticker, company])).values(),
        );

        dispatch(setCompanies(uniqueCompanies));
        dispatch(
          addThreeCompanies(
            uniqueCompanies.length >= 3
              ? uniqueCompanies.slice(0, 3)
              : uniqueCompanies,
          ),
        );
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleReplaceCompany = (oldTicker: string, newTicker: string) => {
    const newCompany = allCompanies.find(
      (c: CompanyI) => c.ticker === newTicker,
    );
    const isAlreadySelected = selectedCompanies.some(
      (c: CompanyI) => c.ticker === newTicker,
    );

    if (newCompany && !isAlreadySelected) {
      dispatch(replaceCompany({ oldTicker, newCompany }));
    }
  };

  const handleAddCompany = (ticker: string) => {
    const companyToAdd = allCompanies.find(
      (c: CompanyI) => c.ticker === ticker,
    );
    const isAlreadySelected = selectedCompanies.some(
      (c: CompanyI) => c.ticker === ticker,
    );

    if (companyToAdd && !isAlreadySelected) {
      dispatch(addCompany(companyToAdd));
    }
  };

  return {
    allCompanies,
    selectedCompanies,
    initialMosaicValue,
    handleReplaceCompany,
    handleAddCompany,
  };
};

export default useCompanies;
