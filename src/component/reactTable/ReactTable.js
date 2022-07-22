import React from 'react';
import { data } from '../Tabel';
import DataTable from 'react-data-table-component';

const ReactTable = () => {
  const columns = [
    { name: 'First Name', selector: (row) => row.first_name, sortable: true },
    { name: 'Last Name', selector: (row) => row.last_name, sortable: true },
    { name: 'Email', selector: (row) => row.email, sortable: true },
    { name: 'Gender', selector: (row) => row.gender, sortable: true },
    { name: 'Job Title', selector: (row) => row.job_title, sortable: true },
    { name: 'Company Name', selector: (row) => row.company_name, sortable: true },
    { name: 'Department', selector: (row) => row.department, sortable: true },
  ];
  return <DataTable title="WAKWAW GIMANKS" columns={columns} data={data} pagination />;
};

export default ReactTable;
