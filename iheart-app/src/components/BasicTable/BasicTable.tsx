import React from 'react';

const BasicTable: React.FC = () => {
  return (
    <table className='ml-auto mr-auto'>
      <thead>
        <tr>
          <th>song</th>
          <th>artist</th>
          <th>songReleaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>xmbrexa x</td>
          <td>RIHANNA</td>
          <td>01/03/2013</td>
        </tr>
        <tr>
          <td>What's I b? x</td>
          <td>RIHANNA</td>
          <td>01/10/900</td>
        </tr>
        <tr>
          <td>I100 Yox youd</td>
          <td>UPWIS LAPALDI</td>
          <td>01/11/2000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTable;
