import { useSelector } from "react-redux";
import SearchBar from "../../components/UI/organisms/SearchBar";
import HotelCard from "../../components/UI/organisms/HotelCard";
import SideBar from "../../components/Layout/components/SideBar";

const HotelsPage = () => {
    const { items, loading } = useSelector((state) => state.hotels);

    return (
        <div className="flex gap-6 bg-gray-100 w-full">
            <main className="flex-1 p-6 bg-red">
                <SearchBar />
                {loading ? (
                    <p className="">Загрузка...</p>
                ) : (
                    <div className="bg-red grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {items.map((hotel) => (
                            <HotelCard key={hotel.id} hotel={hotel} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default HotelsPage;
