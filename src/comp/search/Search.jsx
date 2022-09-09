import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/icons/Homelands_SearchIcon.svg";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const { register, handleSubmit } = useForm();

  const getSearchResult = (data) => {
    setKeyword(data.keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getSearchResult)}>
        <input
          placeholder="Indtast søgord"
          id="keyword"
          type="text"
          {...register("keyword", { required: true })}
          onFocus={(e) => (e.target.value = "")}
          onBlur={(e) => (e.target.value = "")}
        />
        <button>
          <img src={SearchIcon} alt="Search_icon" />
        </button>
        {keyword && <SearchResult keyword={keyword} />}
      </form>
    </>
  );
};

export const SearchResult = (props) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/homelands/search/${props.keyword}`
      );
      setSearchData(result.data);
    };
    getData();
  }, [props.keyword, setSearchData]);

  return (
    <ul id="SearchResult" onBlur={(e) => (e.target.state = null)}>
      <p>
        Fandt {searchData.num_items} resultater på ordet <i>{props.keyword}</i>
      </p>
      {searchData.items &&
        searchData.items.map((item, i) => {
          console.log(item);
          return (
            <NavLink key={item.address} to={`/${item.address}`}>
              <li>{item.address}</li>
            </NavLink>
          );
        })}
    </ul>
  );
};

export { Search };
