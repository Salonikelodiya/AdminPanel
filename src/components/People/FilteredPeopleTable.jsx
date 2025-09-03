import React from 'react';
import DataTable from 'react-data-table-component';
import './FilteredPeople.css';

const columns = [
  { name: 'Full name', selector: row => row.fullName, sortable: true },
  { name: 'Branch', selector: row => row.branch, sortable: true },
  { name: 'Division', selector: row => row.division, sortable: true },
  { name: 'User type', selector: row => row.userType },
  { name: 'Contract type', selector: row => row.contractType },
  { name: 'Start date', selector: row => row.startDate },
  { name: 'ID', selector: row => row.id }
];

export default function FilteredPeopleTable({ people = [] }) {
  return (
    <div className="filtered-people-table-container">
      <h4>Found: {people.length}</h4>
      <DataTable
        columns={columns}
        data={people}
        pagination
        paginationPerPage={10}
        highlightOnHover
        striped
      />
    </div>
  );
}

