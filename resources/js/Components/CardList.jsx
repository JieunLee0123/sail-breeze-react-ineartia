import React from "react";
import Card from "./Card";

const CardList = () => {
    return (
        <div className="flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardList;
