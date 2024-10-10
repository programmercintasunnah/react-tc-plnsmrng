import React, { useState } from "react";

const BobotForm = ({ onSubmit, message, isSuccess }) => {
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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nomor:
        </label>
        <input
          type="text"
          value={nomor}
          onChange={(e) => setNomor(e.target.value)}
          placeholder="Masukkan Nomor"
          className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama"
          className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Simpan
      </button>

      {message && (
        <p
          className={`mt-3 text-center ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default BobotForm;
