import React, { useState } from "react";

const UsersComponent = ({data}) => {

  const [criterias, setCriteria] = useState({
    name: null,
    currentJob: "software engineer",
    degree: null,
  });

  const filter = (user) => {
    if (
      criterias.name === null &&
      criterias.currentJob === null &&
      criterias.degree === null
    ) {
      return;
    }

    return (
      user.name.includes(criterias.name) ||
      user.currentJob.includes(criterias.currentJob) ||
      user.degree.includes(criterias.degree)
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data
        .filter((user) => filter(user))
        .map((person, i) => (
          <div key={i}>
            <h2>{person.name}</h2>
            <p>{person.currentJob}</p>
            <p>Age: {person.age}</p>
          </div>
        ))}
    </div>
  );
};

export default UsersComponent;
