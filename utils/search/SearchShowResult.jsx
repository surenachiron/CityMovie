import { BoxStatus, MainBox } from "./styled-search";
import { useSelector } from "react-redux";
import MapSearchShowResult from "./MapSearchShowResult";

const SearchShowResult = () => {

    const dataSearch = useSelector(state => state.SearchReduser.dataSearch)
    const statusShowResult = useSelector(state => state.SearchReduser.statusShowResult)
    console.log(dataSearch)

    return (
        <>
            {dataSearch.d !== undefined ?
                <MainBox>
                    {dataSearch.d.length !== 0 ?
                        <>
                            {dataSearch.d.map(datase => (
                                <MapSearchShowResult key={datase.id} id={datase.id} image={datase.i ? datase.i.imageUrl : ""} title={datase.l} type={datase.qid} year={datase.y} />
                            ))}
                        </>
                        :
                        <BoxStatus sx={{ color: "redmain" }}>
                            We Cant Find Any Movie Or Tv Show
                        </BoxStatus>
                    }
                </MainBox>
                :
                <>
                    {statusShowResult === 1 ?
                        <MainBox>
                            <BoxStatus>
                                Please Enter Name Of Movie Or Tv Show
                            </BoxStatus>
                        </MainBox>
                        : ""}
                    {statusShowResult === 2 ?
                        <MainBox>
                            <BoxStatus sx={{ color: "redmain" }}>
                                We Get Error From Database
                            </BoxStatus>
                        </MainBox>
                        : ""}
                    {dataSearch.message !== undefined ?
                        <MainBox>
                            <BoxStatus sx={{ color: "redmain" }}>
                                We Get Error From Database
                            </BoxStatus>
                        </MainBox> : ""}
                </>
            }
        </>
    );
}

export default SearchShowResult;
