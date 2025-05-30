import { useState } from "react";
import { formatCpfOrCnpj, formatPhone } from "../utils/formatters";
import type { BudgetItem } from "../models/BudgetItem";
import { formatCoin, formatQuantity } from "../utils/formatters";

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
    const newItem: BudgetItem = {
      nome: name,
      quantidade: quantity,
      preco: price,
    }

    setBudgetItems(prevItems => [...prevItems, newItem]);
  }

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
    handleBudgetItemPrice
  };
};
