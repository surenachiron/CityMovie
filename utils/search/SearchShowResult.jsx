import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { classesSearchShowResult } from "./Style-Search";
import MapSearchShowResult from "./MapSearchShowResult";

const SearchShowResult = () => {
  const dataSearch = useSelector((state) => state.SearchReducer.dataSearch);
  const statusShowResult = useSelector(
    (state) => state.SearchReducer.statusShowResult
  );

  return (
    <>
      {dataSearch.results !== undefined ? (
        <Box sx={classesSearchShowResult.mainBox}>
          {dataSearch.results.length !== 0 ? (
            <>
              {dataSearch.results.map((data) => (
                <MapSearchShowResult
                  key={data.id}
                  id={data.id}
                  image={data.poster_path}
                  title={data.title ? data.title : data.name}
                  type={data.media_type}
                  year={data.release_date}
                />
              ))}
            </>
          ) : (
            <Box sx={classesSearchShowResult.boxStatusError}>
              We Cant Find Any Movie Or Tv Show
            </Box>
          )}
        </Box>
      ) : (
        <>
          {statusShowResult === 1 && (
            <Box sx={classesSearchShowResult.mainBox}>
              <Box sx={classesSearchShowResult.boxStatusInfo}>
                Please Enter Name Of Movie Or Tv Show
              </Box>
            </Box>
          )}
          {statusShowResult === 2 && (
            <Box sx={classesSearchShowResult.mainBox}>
              <Box sx={classesSearchShowResult.boxStatusError}>
                We Get Error From Database
              </Box>
            </Box>
          )}
          {dataSearch.message !== undefined && (
            <Box sx={classesSearchShowResult.mainBox}>
              <Box sx={classesSearchShowResult.boxStatusError}>
                We Get Error From Database
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default SearchShowResult;
