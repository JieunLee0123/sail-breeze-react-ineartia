import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Subject from "@/Components/Subject";
import Search from "@/Components/Search";
import CardList from "@/Components/CardList";
import Button from "@/Components/Button";

const Test = () => {
    return (
        <div className="font-pretendard">
          <Header />
      
          <div className="mt-[30px] flex justify-center">
            <div className="container px-4">
              <div className="w-full lg:mx-0 py-8">
                <Subject />
                <div className="h-10" />
                <Search />
                <div className="h-20" />
                <p>34개의 상품이 있습니다.</p>
                <div className="h-5" />
                <CardList />
              </div>
            </div>
          </div>
        
          <Footer />
        </div>
    );
};

export default Test;
