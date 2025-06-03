import OptionsPanel from "../components/OptionsPanel";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import BudgetForm from "../components/BudgetForm";
import { useBudgetForm } from "../hooks/useBudgetForm";
import About from "./About";

function Budget() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const [showAbout, setShowAbout] = useState<boolean>(false);
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  }

  const {
    companyName,
    setCompanyName,
    companyCpfOrCnpj,
    handleChangeCompanyCpfOrCnpj,
    companyAdress,
    setCompanyAdress,
    companyEmail,
    setCompanyEmail,
    companyPhone,
    handleChangeCompanyPhone,

    clientName,
    setClientName,
    clientCpfOrCnpj,
    handleChangeClientCpfOrCnpj,
    clientAdress,
    setClientAdress,
    clientEmail,
    setClientEmail,
    clientPhone,
    handleChangeClientPhone,

    //Items para Orçamento
    budgetItems,
    handleBudgetItems,
    budgetItemName,
    setBudgetItemName,
    budgetItemQuantity,
    handleBudgetItemQuantity,
    budgetItemPrice,
    handleBudgetItemPrice,
    handleDeleteBudgetItem,

    //Demais
    budgetValidity,
    handleBudgetValidity,
    clearForm,
    finalizeForm,
  } = useBudgetForm();

  return (
    <div className="">
      {!showOptions && (
        <button
          className="bg-[#111111] py-32 pr-1 rounded-r-full cursor-pointer fixed left-0 top-0 shadow-[8px_0_16px_rgba(0,0,0,0.2)]"
          onClick={handleShowOptions}
        >
          <FaArrowRight className="text-5xl text-gray-200" />
        </button>
      )}
      <div className="flex flex-col">
        <AnimatePresence>
          {showOptions && (
            <OptionsPanel handleShowOptions={handleShowOptions} handleShowAbout={handleShowAbout}/>
          )}
        </AnimatePresence>
        {showAbout && <About handleShoutAbout={handleShowAbout}/>}
        
        <div className="flex flex-col items-center">
          <header className="bg-[#111111] h-8 mb-8 w-full"></header>
          <main className="md:w-[80%]">
            <BudgetForm
              companyName={companyName}
              setCompanyName={setCompanyName}
              companyCpfOrCnpj={companyCpfOrCnpj}
              handleCompanyCpfOrCnpj={handleChangeCompanyCpfOrCnpj}
              companyAdress={companyAdress}
              setCompanyAdress={setCompanyAdress}
              companyEmail={companyEmail}
              setCompanyEmail={setCompanyEmail}
              companyPhone={companyPhone}
              handleCompanyPhone={handleChangeCompanyPhone}
              clientName={clientName}
              setClientName={setClientName}
              clientCpfOrCnpj={clientCpfOrCnpj}
              handleClientCpfOrCnpj={handleChangeClientCpfOrCnpj}
              clientAdress={clientAdress}
              setClientAdress={setClientAdress}
              clientEmail={clientEmail}
              setClientEmail={setClientEmail}
              clientPhone={clientPhone}
              handleClientPhone={handleChangeClientPhone}
              budgetItems={budgetItems}
              handleBudgetItems={handleBudgetItems}
              budgetItemName={budgetItemName}
              setBudgetItemName={setBudgetItemName}
              budgetItemQuantity={budgetItemQuantity}
              handleBudgetItemQuantity={handleBudgetItemQuantity}
              budgetItemPrice={budgetItemPrice}
              handleBudgetItemPrice={handleBudgetItemPrice}
              handleDeleteBudgetItem={handleDeleteBudgetItem}
              budgetValidity={budgetValidity}
              handleBudgetValidity={handleBudgetValidity}
              clearForm={clearForm}
              finalizeForm={finalizeForm}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Budget;
