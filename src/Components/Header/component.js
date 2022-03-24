import React from "react";
import SearchInput from "../SearchInput/component";
import Select from "../Selector/component";
import { HeaderContainer } from "./style";

const Header = ({
  setSearchParams,
  order,
  setOrder,
  articlesList,
  setarticlesList,
}) => {
  return (
    <>
      <HeaderContainer>
        <div className="contentWrapper">
          <SearchInput setSearchParams={setSearchParams} />
          <Select
            value={order}
            setValue={setOrder}
            articlesList={articlesList}
            setarticlesList={setarticlesList}
          />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
