import { useState } from "react";
import { formatCpfOrCnpj, formatPhone } from "../utils/formatters";
import type { BudgetItem } from "../models/BudgetItem";
import { formatCoin, formatQuantity, formatDateBR } from "../utils/formatters";
import { handleExportPDF } from "../utils/pdfExporter";
import type { RefObject } from "react";

export const useBudgetForm = () => {
  //DADOS EMPRESA
  const [companyName, setCompanyName] = useState<string>("");
  const [companyCpfOrCnpj, setCompanyCpfOrCnpj] = useState<string>("");
  const [companyAdress, setCompanyAdress] = useState<string>("");
  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyPhone, setCompanyPhone] = useState<string>("");

  const handleChangeCompanyCpfOrCnpj = (value: string) => {
    setCompanyCpfOrCnpj(formatCpfOrCnpj(value));
  };
  const handleChangeCompanyPhone = (value: string) => {
    setCompanyPhone(formatPhone(value));
  };

  //DADOS CLIENTE
  const [clientName, setClientName] = useState<string>("");
  const [clientCpfOrCnpj, setClientCpfOrCnpj] = useState<string>("");
  const [clientAdress, setClientAdress] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const handleChangeClientCpfOrCnpj = (value: string) => {
    setClientCpfOrCnpj(formatCpfOrCnpj(value));
  };
  const handleChangeClientPhone = (value: string) => {
    setClientPhone(formatPhone(value));
  };

  //ITEMS PARA ORÇAMENTO
  const [budgetItemName, setBudgetItemName] = useState<string>("");
  const [budgetItemQuantity, setBudgetItemQuantity] = useState<string>("");
  const [budgetItemPrice, setBudgetItemPrice] = useState<string>("");
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const handleBudgetItemPrice = (value: string) => {
    setBudgetItemPrice(formatCoin(value));
  };

  const handleBudgetItemQuantity = (value: string) => {
    setBudgetItemQuantity(formatQuantity(value));
  };

  const handleBudgetItems = (name: string, quantity: string, price: string) => {
    if (name == null || name == "") return;
    if (quantity == "00" || quantity == null) return;

    const newItem: BudgetItem = {
      id: Date.now().toString(),
      nome: name,
      quantidade: quantity,
      preco: price,
    };

    setBudgetItemName("");
    handleBudgetItemPrice("");
    handleBudgetItemQuantity("");
    setBudgetItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteBudgetItem = (id: string) => {
    setBudgetItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  //DEMAIS
  const [budgetValidity, setBudgetValidity] = useState("");
  const handleBudgetValidity = (value: string) => {
    setBudgetValidity(formatDateBR(value));
  };

  //BUTTONS

  const clearForm = () => {
    setCompanyName("");
    handleChangeCompanyCpfOrCnpj("");
    setCompanyAdress("");
    setCompanyEmail("");
    handleChangeCompanyPhone("");

    setClientName("");
    handleChangeClientCpfOrCnpj("");
    setClientAdress("");
    setClientEmail("");
    handleChangeClientPhone("");

    setBudgetItemName("");
    handleBudgetItemQuantity("");
    handleBudgetItemPrice("");
    setBudgetItems([]);

    handleBudgetValidity("");
  };

  const finalizeForm = (ref: RefObject<HTMLDivElement | null>) => {
    saveBudgetData();

    if (ref.current) {
      setTimeout(() => {
        handleExportPDF(ref.current!);
      }, 500);
    }
  };

  //

  const saveBudgetData = () => {
    const budgetData = getBudgetData();
    localStorage.setItem("budgetData", JSON.stringify(budgetData));
    window.dispatchEvent(new Event("budgetDataUpdated"));
  };

  const getBudgetData = () => ({
    company: {
      name: companyName,
      cpfOrCnpj: companyCpfOrCnpj,
      address: companyAdress,
      email: companyEmail,
      phone: companyPhone,
    },
    client: {
      name: clientName,
      cpfOrCnpj: clientCpfOrCnpj,
      address: clientAdress,
      email: clientEmail,
      phone: clientPhone,
    },
    items: budgetItems,
    validity: budgetValidity,
  });

  return {
    //Empresa
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

    //Cliente
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
  };
};
