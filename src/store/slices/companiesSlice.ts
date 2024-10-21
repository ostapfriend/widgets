import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyI } from '@/utils/interfaces';

interface CompaniesState {
  allCompanies: CompanyI[];
  selectedCompanies: CompanyI[];
}

const initialState: CompaniesState = {
  allCompanies: [],
  selectedCompanies: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<CompanyI[]>) {
      state.allCompanies = action.payload;
    },
    addCompany(state, action: PayloadAction<CompanyI>) {
      const exists = state.selectedCompanies.some(
        (c) => c.ticker === action.payload.ticker,
      );
      if (!exists) {
        state.selectedCompanies.push(action.payload);
      }
    },
    addThreeCompanies(state, action: PayloadAction<CompanyI[]>) {
      if (action.payload.length <= 3) {
        action.payload.forEach((company) => {
          const exists = state.selectedCompanies.some(
            (c) => c.ticker === company.ticker,
          );
          if (!exists) {
            state.selectedCompanies.push(company);
          }
        });
      }
    },
    removeCompany(state, action: PayloadAction<string>) {
      state.selectedCompanies = state.selectedCompanies.filter(
        (c) => c.ticker !== action.payload,
      );
    },
    replaceCompany(
      state,
      action: PayloadAction<{ oldTicker: string; newCompany: CompanyI }>,
    ) {
      const { oldTicker, newCompany } = action.payload;
      const index = state.selectedCompanies.findIndex(
        (c) => c.ticker === oldTicker,
      );
      if (index !== -1) {
        state.selectedCompanies[index] = newCompany;
      }
    },
  },
});

export const {
  setCompanies,
  addCompany,
  addThreeCompanies,
  removeCompany,
  replaceCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
