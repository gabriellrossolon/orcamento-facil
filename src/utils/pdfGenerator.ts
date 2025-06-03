// utils/pdfGenerator.ts
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateBudgetPdf = async (elementId: string, fileName = "orcamento.pdf") => {
  const input = document.getElementById(elementId);
  if (!input) return;

  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
};
