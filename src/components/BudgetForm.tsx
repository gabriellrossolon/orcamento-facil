import React from "react";
import InputField from "./commons/InputField";
import ItemCard from "./commons/ItemCard";
import type { BudgetItem } from "../models/BudgetItem";

interface BudgetFormProps {
  companyName: string;
  setCompanyName: (value: string) => void;
  companyCpfOrCnpj: string;
  handleCompanyCpfOrCnpj: (value: string) => void;
  companyAdress: string;
  setCompanyAdress: (value: string) => void;
  companyEmail: string;
  setCompanyEmail: (value: string) => void;
  companyPhone: string;
  handleCompanyPhone: (value: string) => void;

  clientName: string;
  setClientName: (value: string) => void;
  clientCpfOrCnpj: string;
  handleClientCpfOrCnpj: (value: string) => void;
  clientAdress: string;
  setClientAdress: (value: string) => void;
  clientEmail: string;
  setClientEmail: (value: string) => void;
  clientPhone: string;
  handleClientPhone: (value: string) => void;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  budgetItems: BudgetItem[];
  handleBudgetItems: (name: string, quantity: string, price: string) => void;

  budgetItemName: string;
  setBudgetItemName: (value: string) => void;
  budgetItemQuantity: string;
  handleBudgetItemQuantity: (value: string) => void;
  budgetItemPrice: string;
  handleBudgetItemPrice: (value: string) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  companyName,
  setCompanyName,
  companyCpfOrCnpj,
  handleCompanyCpfOrCnpj,
  companyAdress,
  setCompanyAdress,
  companyEmail,
  setCompanyEmail,
  companyPhone,
  handleCompanyPhone,

  clientName,
  setClientName,
  clientCpfOrCnpj,
  handleClientCpfOrCnpj,
  clientAdress,
  setClientAdress,
  clientEmail,
  setClientEmail,
  clientPhone,
  handleClientPhone,

  handleSubmit,

  budgetItems,
  handleBudgetItems,

  budgetItemName,
  setBudgetItemName,
  budgetItemQuantity,
  handleBudgetItemQuantity,
  budgetItemPrice,
  handleBudgetItemPrice,
}) => {
  return (
    <form
      className="flex flex-col items-center justify-center w-full gap-6 shadow-xl rounded-xl shadow-black/20 p-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-gray-200 text-3xl font-semibold mb-6">
        Preencha todos os Campos
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 w-full">
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <h3 className="text-gray-200 font-xl">Seus dados:</h3>
          <InputField
            placeholder="Nome da empresa"
            type="text"
            value={companyName}
            handleChange={setCompanyName}
          />
          <InputField
            placeholder="CPF/CNPJ da empresa"
            type="text"
            value={companyCpfOrCnpj}
            handleChange={handleCompanyCpfOrCnpj}
          />
          <InputField
            placeholder="Telefone da empresa"
            type="tel"
            value={companyPhone}
            handleChange={handleCompanyPhone}
          />
          <InputField
            placeholder="E-mail da empresa"
            type="email"
            value={companyEmail}
            handleChange={setCompanyEmail}
          />
          <InputField
            placeholder="Endereço da Empresa"
            type="text"
            value={companyAdress}
            handleChange={setCompanyAdress}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <h3 className="text-gray-200 font-xl">Dados do cliente:</h3>
          <InputField
            placeholder="Nome do cliente"
            type="text"
            value={clientName}
            handleChange={setClientName}
          />
          <InputField
            placeholder="CPF/CNPJ do cliente"
            type="text"
            value={clientCpfOrCnpj}
            handleChange={handleClientCpfOrCnpj}
          />
          <InputField
            placeholder="Telefone do cliente"
            type="tel"
            value={clientPhone}
            handleChange={handleClientPhone}
          />
          <InputField
            placeholder="E-mail do cliente"
            type="tel"
            value={clientEmail}
            handleChange={setClientEmail}
          />
          <InputField
            placeholder="Endereço do cliente"
            type="string"
            value={clientAdress}
            handleChange={setClientAdress}
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-2 rounded-md p-4 shadow-md shadow-black/40">
        <h3 className="text-gray-200 font-xl">Adicionar itens:</h3>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <InputField
            placeholder="Item"
            type="string"
            value={budgetItemName}
            handleChange={setBudgetItemName}
          />
          <InputField
            placeholder="Quantidade"
            type="string"
            value={budgetItemQuantity}
            handleChange={handleBudgetItemQuantity}
          />
          <InputField
            placeholder="Valor"
            type="string"
            value={budgetItemPrice}
            handleChange={handleBudgetItemPrice}
          />
        </div>
        <button
          className="text-gray-200 px-8 py-1 border border-gray-100/20 rounded-full cursor-pointer bg-[#111111]"
          type="button"
          onClick={() => handleBudgetItems(budgetItemName, budgetItemQuantity, budgetItemPrice)}
        >
          Adicionar
        </button>
        <div className="flex flex-col items-start justify-center border-t-1 border-gray-100/10 w-full py-2 gap-1">
          <div className="grid grid-cols-6 gap-4 p-2 border border-gray-100/20 rounded-xl w-full">
            <p className="py-1 px-2 text-gray-200 col-span-3 border-x-1 border-gray-100/20">
              Item
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-1 border-x-1 border-gray-100/20 text-center">
              Quantidade
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-1 border-x-1 border-gray-100/20 text-center">
              Valor
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-1 border-x-1 border-gray-100/20 text-center">
              Excluir?
            </p>
          </div>
          <div className="w-full">
            {budgetItems.map((item, index) => (
              <ItemCard
                key={index}
                name={item.nome}
                quantity={item.quantidade}
                value={item.preco}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default BudgetForm;
