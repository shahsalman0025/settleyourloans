import React from 'react';

const ExportCSV = ({ list, filename }) => {
  
  const handleExport = () => {
    const csv = convertListToCSV(list);
    if (csv) {
      downloadCSV(csv, filename);
    } else {
      console.error("No data to export");
    }
  };

  return (
    <button
    className="curson-pointer block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-gray-600 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"

    onClick={handleExport}>download CSV</button>
  );
};

const convertListToCSV = (data) => {
  if (!data.length) {
    return '';
  }

  // Extract all possible keys
  const keys = [...new Set(data.flatMap(Object.keys))];

  // Create CSV header
  const csvHeader = keys.join(',');

  // Create CSV rows
  const csvRows = data.map(row =>
    keys.map(key => {
      let value = row[key];
      if (key === 'date') {
        value = new Date(value).toLocaleString(); // Convert timestamp to readable date
      }
      return value !== undefined ? `"${value}"` : '';
    }).join(',')
  );

  return [csvHeader, ...csvRows].join('\n');
};



const downloadCSV = (csv, filename) => {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};



export default ExportCSV;
