import React from "react";

import { parseJSON } from "date-fns";
import { Container } from "./style";

const Select = ({ value, setValue, articlesList, setarticlesList }) => {
  const onChange = ({ target }) => {
    setValue(target.value);

    if (value === "Newer") {
      const newerList = articlesList.sort(
        (a, b) => parseJSON(a.publishedAt) - parseJSON(b.publishedAt)
      );
      setarticlesList(newerList);
    } else {
      const olderList = articlesList
        .sort((a, b) => parseJSON(a.publishedAt) - parseJSON(b.publishedAt))
        .reverse();
      setarticlesList(olderList);
    }
  };

  return (
    <Container>
      <select value={value} onChange={onChange}>
        <option value="" disabled>
          Sort
        </option>

        <option value="Older">Mais antigas</option>
        <option value="Newer">Mais novas</option>
      </select>
    </Container>
  );
};

export default Select;
