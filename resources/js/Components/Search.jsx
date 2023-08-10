import React, { useState } from "react";
import Select from "./Select";

const Search = ({ data, setDisplayedCardData }) => {
    const [detailSelectBox, setDetailSelectBox] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const onClickDetailBtn = (e) => {
        e.preventDefault();
        setDetailSelectBox(!detailSelectBox);
    };

    const filterNames = (input) => {
        return input ? data.filter((e) => e.preview.includes(input)) : [];
    };

    const checkEqualName = (input) => {
        const filteredArray = filterNames(input);
        return filteredArray[0]?.name === input ? [] : filteredArray;
    };

    let searchText = checkEqualName(searchTerm);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = searchTerm.trim();
        setDisplayedCardData(filterNames(text));
        setSearchTerm("");
    };

    return (
        <>
            <form
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3"
                onSubmit={handleSubmit}
            >
                <div className="w-full sm:w-[60%] lg:w-[70%]">
                    <label htmlFor="voice-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-3 h-3 text-gray-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="voice-search"
                            className="focus:ring-0 border-0 shadow-md bg-gray-50 text-gray-900 text-sm rounded-sm block w-full pl-10 p-2.5"
                            placeholder="Search"
                            required
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchText.length > 0 && (
                            <ul className="p-4 bg-gray_bg text-gray-900 text-sm rounded-sm block w-full pl-10 absolute shadow-md">
                                {searchText.map((e) => (
                                    <li key={e.id}>
                                        <button
                                            onClick={() =>
                                                setSearchTerm(e.preview)
                                            }
                                        >
                                            {e.preview}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="flex items-center w-full sm:w-[40%] lg:w-[30%] gap-2">
                    <button
                        style={{ color: "#fff" }}
                        type="submit"
                        className="box-border inline-flex w-full items-center justify-center py-2.5 px-3 text-sm font-semibold text-white bg-blue_01 rounded-sm"
                    >
                        검색하기
                    </button>
                    <button
                        type="button"
                        onClick={onClickDetailBtn}
                        className="box-border inline-flex w-full items-center justify-center py-2.5 px-3 text-sm font-semibold text-gray-900 bg-yellow_00 rounded-sm"
                    >
                        상세검색
                    </button>
                </div>
            </form>

            {detailSelectBox ? (
                <div className="flex flex-wrap justify-between gap-5 mt-20 sm:gap-3">
                    <div className="w-full sm:w-[48%] lg:w-[24%]">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-semibold text-gray-900"
                        >
                            투자 진행상태
                        </label>
                        <Select
                            options={["전체", "준비중", "투자중", "투자완료"]}
                        />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%]">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-semibold text-gray-900"
                        >
                            그룹별
                        </label>
                        <Select options={["전체", "동네", "한살림"]} />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%]">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-semibold text-gray-900"
                        >
                            사업별
                        </label>
                        <Select
                            options={[
                                "전체",
                                "2023 우리동네 크라우드펀딩",
                                "우리동네 펀딩",
                                "한살림상생협력펀딩",
                                "한국사회적기업진흥원크라우드펀딩",
                                "2022 수원시 도시재생 크라우드펀딩",
                                "아시아재단 경기 여성기업가 펀딩",
                                "서울시사회투자기금",
                                "성동구사회적경제활성화기금",
                                "MG희망나눔지역상생펀딩",
                                "MG희망나눔 소셜성장 지원사업",
                                "한전사회적경제조직크라우드펀딩",
                                "경상북도소셜크라우드펀딩대회",
                                "아름다운가게뷰티풀펠로우지원사업",
                                "로컬메이트펀딩",
                                "부산HUG크라우드펀딩",
                                "하나 파워온 사회혁신기업 성장지원",
                                "LH소셜벤처크라우드펀딩",
                                "창원시 사회적경제기업 크라우드펀딩",
                                "제주 사회적경제기업 경쟁력 강화 [소셜 리부트]",
                                "경기도청 주변 도시재생 상권 크라우드펀딩",
                            ]}
                        />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%]">
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-semibold text-gray-900"
                        >
                            지역별
                        </label>
                        <Select
                            options={[
                                "전체",
                                "서울",
                                "경기",
                                "인천",
                                "강원",
                                "충북",
                                "세종",
                                "충남",
                                "대전",
                                "경북",
                                "대구",
                                "울산",
                                "부산",
                                "경남",
                                "전북",
                                "전남",
                                "광주",
                                "제주",
                            ]}
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Search;
