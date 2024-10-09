import React from "react";

const BobotTree = ({ bobots }) => {
  const renderTree = (nodes, parentId = null) => {
    return (
      <ul>
        {nodes
          .filter((node) => node.parent_id === parentId)
          .map((node) => (
            <li key={node.id}>
              {node.nomor} - {node.nama}
              {renderTree(nodes, node.id)}
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
