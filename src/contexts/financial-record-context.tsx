// This is the state manager for the App.
import { createContext, useContext, useState } from "react";

interface FinancialRecord {
  id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialRecordsContextType {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
}

export const financialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined);

export const FinancialRecordsProvider = ({ children }: { children: React.ReactNode }) => {
  const [records, setRecords] = useState<FinancialRecord>([]);

  const addRecord = async (record: FinancialRecord) => {
    const response = await fetch("http://localhost:3001/financial-records", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (err) {}
  };

  return <financialRecordsContext.Provider value={{ records, addRecord }}>{children}</financialRecordsContext.Provider>;
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordsContextType | undefined>(financialRecordsContext);

  if (!context) {
    throw new Error("useFinancialRecords must be used within a FinancialRecordsProvider");
  }

  return context;
};
