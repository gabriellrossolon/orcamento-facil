import InputField from "./commons/InputField";
import ItemCard from "./commons/ItemCard";
import type { BudgetItem } from "../models/BudgetItem";
import type { RefObject } from "react";
import FinalizedForm from "./FinalizedForm";
import { useRef, useEffect, useMemo } from "react";

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

  budgetItems: BudgetItem[];
  handleBudgetItems: (name: string, quantity: string, price: string) => void;

  budgetItemName: string;
  setBudgetItemName: (value: string) => void;
  budgetItemQuantity: string;
  handleBudgetItemQuantity: (value: string) => void;
  budgetItemPrice: string;
  handleBudgetItemPrice: (value: string) => void;
  handleDeleteBudgetItem: (value: string) => void;

  budgetValidity: string;
  handleBudgetValidity: (value: string) => void;

  clearForm: () => void;
  finalizeForm: (ref: RefObject<HTMLDivElement>) => void;
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

  budgetItems,
  handleBudgetItems,

  budgetItemName,
  setBudgetItemName,
  budgetItemQuantity,
  handleBudgetItemQuantity,
  budgetItemPrice,
  handleBudgetItemPrice,
  handleDeleteBudgetItem,

  budgetValidity,
  handleBudgetValidity,

  clearForm,
  finalizeForm,
}) => {
  const finalizedFormRef = useRef<HTMLDivElement>(null);



  return (
    <form className="flex flex-col items-center justify-center w-full gap-6 shadow-xl rounded-xl shadow-black/20 md:p-8 p-1">
      <h2 className="text-gray-200 text-3xl font-semibold mb-6 text-center md:text-start">
        Preencha todos os Campos
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 w-full">
        <div className="flex flex-col items-start justify-center w-full gap-2">
          {" "}
          {/* Dados da Empresa */}
          <h3 className="text-gray-200 text-2xl">Seus dados:</h3>
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
          {" "}
          {/* Dados do Cliente */}
          <h3 className="text-gray-200 text-2xl">Dados do cliente:</h3>
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
            type="email"
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
        {" "}
        {/* Adicionar Itens */}
        <h3 className="text-gray-200 text-2xl">Adicionar itens:</h3>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <InputField
            placeholder="Digite o nome do item"
            type="string"
            value={budgetItemName}
            span="Item"
            handleChange={setBudgetItemName}
          />
          <InputField
            placeholder="Digite a quantidade de itens"
            type="string"
            value={budgetItemQuantity}
            span="Quantidade"
            handleChange={handleBudgetItemQuantity}
          />
          <InputField
            placeholder="Digite o valor da Unidade"
            type="string"
            value={budgetItemPrice}
            span="Preço Unitário"
            handleChange={handleBudgetItemPrice}
          />
        </div>
        <button
          className="text-gray-200 px-8 py-1 border border-gray-100/20 rounded-full cursor-pointer bg-[#111111] hover:bg-[#222222] transition-colors duration-300"
          type="button"
          onClick={() =>
            handleBudgetItems(
              budgetItemName,
              budgetItemQuantity,
              budgetItemPrice
            )
          }
        >
          Adicionar
        </button>
        <div className="flex flex-col items-start justify-center border-t-1 border-gray-100/10 w-full py-2 gap-1">
          <div className="md:grid grid-cols-6 gap-1 md:gap-4 p-2 border border-gray-100/20 rounded-xl w-full hidden">
            <p className="py-1 px-2 text-gray-200 col-span-2 md:col-span-3 md:border-x-1 border-gray-100/20 text-sm md:text-md">
              Item
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-1 md:col-span-1 md:border-x-1 border-gray-100/20 text-center text-sm md:text-md">
              Quantidade
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-2 md:col-span-1 md:border-x-1 border-gray-100/20 text-center text-sm md:text-md">
              Valor (p/ Unid.)
            </p>
            <p className="py-1 px-2 text-gray-200 col-span-1 md:col-span-1 md:border-x-1 border-gray-100/20 text-center text-sm md:text-md">
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
                onDelete={() => handleDeleteBudgetItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-full flex md:flex-row flex-col md:items-baseline-last justify-between gap-2">
        <label className="flex flex-col md:items-start items-center justify-center md:w-full">
          <span className="text-gray-200 text-xl">Validade do Orçamento:</span>
          <input
            type="text"
            value={budgetValidity}
            onChange={(e) => handleBudgetValidity(e.target.value)}
            placeholder="dd/mm/yyyy"
            className="border-1 border-gray-100/20 rounded-md px-2 py-1 w-full text-gray-200 text-center md:text-start"
          />
        </label>
        <div className="flex items-center md:justify-end justify-center gap-4 w-full">
          <button
            className="border border-gray-100/20 px-2 py-1 rounded-md text-gray-200 font-semibold text-xl bg-[#111111]
            cursor-pointer hover:bg-[#222222] transition-colors duration-300
            "
            type="button"
            onClick={() => finalizeForm(finalizedFormRef)}
          >
            Gerar PDF
          </button>
          <button
            className="border border-gray-100/20 px-2 py-1 rounded-md text-gray-200 font-semibold text-xl bg-[#111111]
            cursor-pointer hover:bg-[#222222] transition-colors duration-300
            "
            type="button"
            onClick={clearForm}
          >
            Limpar Campos
          </button>
        </div>
      </div>
      <FinalizedForm ref={finalizedFormRef}/>
    </form>
  );
};

export default BudgetForm;
