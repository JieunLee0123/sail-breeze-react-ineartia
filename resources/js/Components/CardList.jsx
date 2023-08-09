import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-between">
            {data.length > 0 ? (
                data.map((cardData) => (
                    <Card key={cardData.id} cardData={cardData} />
                ))
            ) : (
                <h2 className="font-medium text-lg mb-1">
                    펀딩 상품이 없습니다
                </h2>
            )}
        </div>
    );
};

export default CardList;
