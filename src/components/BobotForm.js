import React, { useState } from "react";

const BobotForm = ({ onSubmit }) => {
  const [nomor, setNomor] = useState("");
  const [nama, setNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomor && nama) {
      onSubmit({ nomor, nama });
      setNomor("");
      setNama("");
    } else {
      alert("Nomor dan Nama harus diisi.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nomor: </label>
        <input
          type="text"
          value={nomor}
          onChange={(e) => setNomor(e.target.value)}
          placeholder="Masukkan Nomor"
        />
      </div>
      <div>
        <label>Nama: </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama"
        />
      </div>
      <button type="submit">Simpan</button>
    </form>
  );
};

export default BobotForm;
