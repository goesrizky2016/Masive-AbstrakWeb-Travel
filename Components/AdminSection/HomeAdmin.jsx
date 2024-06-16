import React from 'react';
import Nav from './NavAdmin';

function HomeAdmin() {
  return (
    <div className='px-3'>
      <Nav />
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
          <div className='col-md-12'>
            
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nama Pembeli</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Tanggal Transaksi</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Admin</td>
                  <td>Lunas</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jane Doe</td>
                  <td>jane@example.com</td>
                  <td>Editor</td>
                  <td>Lunas</td>
                </tr>
                {/* Tambahkan baris tabel lainnya di sini */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
