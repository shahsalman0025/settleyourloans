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

const convertListToCSV = (list) => {
  if (!list.length) {
    return null;
  }
  
  const keys = Object.keys(list[0]);
  const csvRows = list.map(item => 
    keys.map(key => JSON.stringify(item[key], replacer)).join(',')
  );

  csvRows.unshift(keys.join(','));

  return csvRows.join('\n');
};

const replacer = (key, value) => value === null ? '' : value;

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
