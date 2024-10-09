import React from "react";

const BobotTree = ({ bobots }) => {
  console.log(bobots);

  // Fungsi untuk merender pohon
  const renderTree = (nodes, parentId = null, depth = 0) => {
    // Cek untuk menghentikan rekursi jika depth terlalu dalam
    if (depth > 100) {
      console.error("Too much recursion");
      return null;
    }

    // Filter node yang memiliki parent_id sesuai
    const filteredNodes = nodes.filter((node) => node.parent_id === parentId);

    // Jika tidak ada node yang cocok, kembalikan null
    if (filteredNodes.length === 0) {
      return null;
    }

    return (
      <ul>
        {filteredNodes.map((node) => (
          <li key={node.id}>
            {node.nomor} - {node.nama}
            {/* Rekursi untuk node anak, tambahkan 'depth' untuk mencegah rekursi tidak terbatas */}
            {renderTree(nodes, node.id, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h3>Data Bobot</h3>
      {renderTree(bobots)}
    </div>
  );
};

export default BobotTree;
