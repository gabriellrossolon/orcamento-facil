import { forwardRef, useEffect, useState } from "react";
interface BudgetItem {
  id: string;
  nome: string;
  quantidade: string;
  preco: string;
}

interface FinalizedFormProps {}

const FinalizedForm = forwardRef<HTMLDivElement, FinalizedFormProps>((props, ref) => {
    const [savedData, setSavedData] = useState(() => {
      const data = localStorage.getItem("budgetData");
      return data ? JSON.parse(data) : null;
    });

    useEffect(() => {
      function handleStorageChange() {
        const data = localStorage.getItem("budgetData");
        setSavedData(data ? JSON.parse(data) : null);
      }

      window.addEventListener("budgetDataUpdated", handleStorageChange);

      window.addEventListener("storage", (e) => {
        if (e.key === "budgetData") {
          handleStorageChange();
        }
      });

      return () => {
        window.removeEventListener("budgetDataUpdated", handleStorageChange);
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

    const { company, client, items, validity } = savedData ?? {
      company: { name: "", cpfOrCnpj: "", address: "", email: "", phone: "" },
      client: { name: "", cpfOrCnpj: "", address: "", email: "", phone: "" },
      items: [] as BudgetItem[],
      validity: "",
    };

    ////

    return (
      <div
        className="min-h-full bg-white p-8 font-sans text-gray-900 w-[800px] max-w-[800px] 
        absolute -left-[9999px] top-0
      "
        ref={ref}
      >
        {/* Header com dados da empresa */}
        <header className="flex justify-between items-center mb-8 border-b-2 border-blue-900 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-900 tracking-widest">
              {company.name || "Empresa"}
            </h1>
            <p className="text-sm">{company.cpfOrCnpj || "-"}</p>
            <p className="text-sm">{company.address || "-"}</p>
            <p className="text-sm">{company.phone || "-"}</p>
            <p className="text-sm">{company.email || "-"}</p>
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-semibold">ORÇAMENTO</h2>
            <p className="text-lg">{new Date().toLocaleDateString("pt-BR")}</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Validade:</span> {validity || "-"}
            </p>
          </div>
        </header>

        {/* Dados do cliente */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">
            Cliente
          </h3>
          <p>
            <strong>Nome:</strong> {client.name || "-"}
          </p>
          <p>
            <strong>CPF/CNPJ:</strong> {client.cpfOrCnpj || "-"}
          </p>
          <p>
            <strong>Endereço:</strong> {client.address || "-"}
          </p>
          <p>
            <strong>Telefone:</strong> {client.phone || "-"}
          </p>
          <p>
            <strong>Email:</strong> {client.email || "-"}
          </p>
        </section>

        {/* Tabela de itens */}
        <section>
          <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">
            Itens
          </h3>
          {items.length === 0 ? (
            <p>Sem itens adicionados.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Item
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    Quantidade
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    Preço Unitário
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ id, nome, quantidade, preco }: BudgetItem) => {
                  const qtyNum = Number(quantidade.replace(/[^\d]/g, "")) || 0;
                  const priceNum =
                    Number(preco.replace(/[^\d]/g, "")) / 100 || 0;
                  const total = qtyNum * priceNum;

                  return (
                    <tr key={id} className="odd:bg-white even:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        {nome}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        {quantidade}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        {preco}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        {total.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-blue-900 text-white font-bold">
                  <td
                    className="border border-gray-300 px-4 py-2 text-right"
                    colSpan={3}
                  >
                    Total Geral
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {items
                      .reduce((acc: number, item: BudgetItem) => {
                        const qtyNum =
                          Number(item.quantidade.replace(/[^\d]/g, "")) || 0;
                        const priceNum =
                          Number(item.preco.replace(/[^\d]/g, "")) / 100 || 0;
                        return acc + qtyNum * priceNum;
                      }, 0)
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </section>
      </div>
    );
  }
);

export default FinalizedForm;
