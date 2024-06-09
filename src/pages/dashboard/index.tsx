import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./FinancialRecordForm";
import { FinancialRecordList } from "./FinancialRecordList";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";
import Footer from "../../components/footer/footer";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <>
      <div className="dashboard-container">
        <FinancialRecordList />
        <h2 className="total-heading">Total Balance (Rs) {totalMonthly}/=</h2>
        <FinancialRecordForm />
      </div>
      <Footer />
    </>
  );
};
