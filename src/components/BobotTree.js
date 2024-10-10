import React from "react";

const BobotTree = ({ bobots }) => {
  const renderTree = (nodes, parentId = null, depth = 0) => {
    if (depth > 100) {
      console.error("Too much recursion");
      return null;
    }

    const filteredNodes = nodes.filter((node) => node.parent_id === parentId);

    if (filteredNodes.length === 0) {
      return null;
    }

    return (
      <ul className="list-disc pl-5">
        {filteredNodes.map((node) => (
          <li key={node.id} className="my-1">
            {node.nomor} - {node.nama}
            {renderTree(nodes, node.id, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Data Bobot</h3>
      {renderTree(bobots)}
    </div>
  );
};

export default BobotTree;
