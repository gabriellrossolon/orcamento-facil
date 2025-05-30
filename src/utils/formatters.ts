export const formatCpfOrCnpj = (value: string): string => {
  const onlyNumbers = value.replace(/\D/g, "");
  const length = onlyNumbers.length;

  if (length <= 3) return onlyNumbers;
  if (length <= 6) return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
  if (length <= 9)
    return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(
      3,
      6
    )}.${onlyNumbers.slice(6)}`;
  if (length <= 11)
    return `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(
      3,
      6
    )}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9)}`;

  if (length <= 12)
    return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
      2,
      5
    )}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}`;
  return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(
    2,
    5
  )}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}-${onlyNumbers.slice(
    12,
    14
  )}`;
};

export const formatPhone = (value: string): string => {
  const onlyNumbers = value.replace(/\D/g, "");
  const length = onlyNumbers.length;

  if (length === 0) return "";
  if (length < 3) return `(${onlyNumbers}`;
  if (length < 7) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  if (length <= 10) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
      2,
      6
    )}-${onlyNumbers.slice(6)}`;
  }
  return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
    2,
    7
  )}-${onlyNumbers.slice(7, 11)}`;
};

export const formatCoin = (value: string): string => {
  const number = Number(value.replace(/\D/g, "")) / 100;

  if (isNaN(number)) return "R$ 0,00";

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatQuantity = (value: string | number): string => {
  const num = typeof value === "string" ? parseInt(value, 10) : value;

  if (isNaN(num)) return "00"; // fallback caso parseInt falhe

  return num < 10 ? `0${num}` : `${num}`;
};
