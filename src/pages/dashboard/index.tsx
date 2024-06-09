import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./FinancialRecordForm";
import { FinancialRecordList } from "./FinancialRecordList";
import Footer from "../../components/footer/footer";

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <>
      <Footer />
    </>
  );
};
