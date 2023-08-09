import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Subject from "@/Components/Subject";
import Search from "@/Components/Search";
import CardList from "@/Components/CardList";
import data from "../../../database/data.json";

const Test = () => {
    return (
        <>
            <Header />
            <div className="mt-[84px] flex justify-center">
                <div className="w-full mx-[34px] lg:w-[1060px] lg:mx-0 py-8">
                    <Subject />
                    <div className="h-10" />
                    <Search />
                    <div className="h-10" />
                    <p>{data.length}개의 상품이 있습니다.</p>
                    <div className="h-5" />
                    <CardList data={data} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Test;
