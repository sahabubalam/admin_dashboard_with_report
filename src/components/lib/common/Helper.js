import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';


export const getErrorMessage = error => {
    try {
      return error.response?.data?.apiErrors[0]?.message
    } catch (e) {
      return 'Something Went Wrong!';
    }
  }

export const exportToExcel = (columns,data) => {
    const visibleColumns = columns.filter((col) => col.visible);
    const exportData = data.map((item) =>
        Object.keys(item)
            .filter((key) => visibleColumns.some((col) => col.dataIndex === key))
            .reduce((acc, key) => {
                acc[key] = item[key];
                return acc;
            }, {})
    );

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'datatable-export.xlsx');
};

export const exportToPDF = (columns,data) => {
    const doc = new jsPDF();
    doc.autoTable({
        head: [columns.map((col) => col.title)],
        body: data.map((item) => columns.map((col) => item[col.dataIndex])),
    });
    doc.save('datatable-export.pdf');
};

export const capitalizeString = (inputString, avoidPattern) => {

    if (!Array.isArray(inputString) || inputString.length === 0 || typeof inputString[0] !== 'string') {
        return 'Invalid input';
    }

    const words = inputString[0].split(avoidPattern);
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

