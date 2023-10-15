import { classesSearchShowResult } from "./Style-Search";
import { useSelector } from "react-redux";
import MapSearchShowResult from "./MapSearchShowResult";
import { Box } from "@mui/material";

const SearchShowResult = () => {

    const dataSearch = useSelector(state => state.SearchReducer.dataSearch)
    const statusShowResult = useSelector(state => state.SearchReducer.statusShowResult)

    return (
        <>
            {dataSearch.d !== undefined ?
                <Box sx={classesSearchShowResult.mainBox}>
                    {dataSearch.d.length !== 0 ?
                        <>
                            {dataSearch.d.map(data => (
                                <MapSearchShowResult key={data.id} id={data.id} image={data.i && data.i.imageUrl} title={data.l} type={data.qid} year={data.y} />
                            ))}
                        </>
                        :
                        <Box sx={classesSearchShowResult.boxStatusError}>
                            We Cant Find Any Movie Or Tv Show
                        </Box>
                    }
                </Box>
                :
                <>
                    {statusShowResult === 1 &&
                        <Box sx={classesSearchShowResult.mainBox}>
                            <Box sx={classesSearchShowResult.boxStatusInfo}>
                                Please Enter Name Of Movie Or Tv Show
                            </Box>
                        </Box>
                    }
                    {statusShowResult === 2 &&
                        <Box sx={classesSearchShowResult.mainBox}>
                            <Box sx={classesSearchShowResult.boxStatusError}>
                                We Get Error From Database
                            </Box>
                        </Box>
                    }
                    {dataSearch.message !== undefined &&
                        <Box sx={classesSearchShowResult.mainBox}>
                            <Box sx={classesSearchShowResult.boxStatusError}>
                                We Get Error From Database
                            </Box>
                        </Box>
                    }
                </>
            }
        </>
    );
}

export default SearchShowResult;