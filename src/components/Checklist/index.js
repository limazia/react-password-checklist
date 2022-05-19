import React from "react";

function PasswordCheckList({ data }) {
  const label = data[0];
  const requirement = data[1];

  console.log(label, requirement)

  return (
    <ul className="ml-3">
      <li>
        {requirement ? (
          <del className="text-success">
            <span className="text-muted">{label}</span>
          </del>
        ) : (
          label
        )}
      </li>
    </ul>
  );
}

export default PasswordCheckList;
