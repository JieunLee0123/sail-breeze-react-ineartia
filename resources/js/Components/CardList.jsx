import React, { useEffect } from 'react';
import Card from "./Card";
import Paging from './Paging';

const CardList = ({ data }) => {
    // const [items, setItems] = React.useState([]) //리스트에 나타낼 아이템
    const [totalItemsCount, setTotalItemsCount] = React.useState(0); //아이템 총 개수
    const [activePage, setActivePage] = React.useState(1); //현재페이지
    const [itemsCountPerPage] = React.useState(10); //페이지당 아이템 개수

    const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
    const [pageOfData, setPageOfData] = React.useState([]);

    const onChangePage = (pageNum) => {
      setActivePage(pageNum);
    };
  
    useEffect(() => {
      setTotalItemsCount(data.length);
      setIndexOfLastPost(activePage * itemsCountPerPage);
      setIndexOfFirstPost(indexOfLastPost - itemsCountPerPage);
      setPageOfData(data.slice(indexOfFirstPost, indexOfLastPost));
    }, [activePage, indexOfFirstPost, indexOfLastPost, data, itemsCountPerPage]);

    return (
      <div>
          <div className="flex flex-wrap justify-between">
            {activePage && data.length > 0 ? (
                pageOfData.map((cardData) => (
                      <Card key={cardData.id} cardData={cardData} />
                  ))
              ) : (
                  <h2 className="font-medium text-lg mb-1">
                      펀딩 상품이 없습니다
                  </h2>
            )}
          </div>
            
          <Paging activePage={activePage} itemsCountPerPage={10} totalItemsCount={totalItemsCount} onChangePage={onChangePage} />
        </div>
    );
};

export default CardList;
