import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";


const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const { register, handleSubmit } = useForm();

  const getSearchResult = (data) => {
    setKeyword(data.keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getSearchResult)}>
        <label htmlFor="keyword">Søgeord:</label>
        <input
          id="keyword"
          type="text"
          {...register("keyword", { required: true })}
        />
        <button>Søg</button>
      </form>
      {keyword && <SearchResult keyword={keyword} />}
    </>
  );
};

export const SearchResult = (props) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/stringsonline/search/${props.keyword}`
      );
      setSearchData(result.data);
    };
    getData();
  }, [props.keyword, setSearchData]);

  return (
    <ul>
      <p>
        Fandt {searchData.num_items} resultater på ordet <i>{props.keyword}</i>
      </p>
      {searchData.items &&
        searchData.items.map((item, i) => {
          return (
            <NavLink
              key={item.name}
              to={`/${item.name}`}
            >
              <li>{item.name}</li>
            </NavLink>
          );
        })}
    </ul>
  );
};

export { Search };
