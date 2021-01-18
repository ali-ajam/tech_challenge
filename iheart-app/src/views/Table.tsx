import React, { Fragment } from 'react';
import BasicTable from '../components/BasicTable/BasicTable';
import Header from '../components/Headers/Header';

const Table: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className='ml-auto mr-auto'>
        <BasicTable />
      </div>
    </Fragment>
  );
};

export default Table;
