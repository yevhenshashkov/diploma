// src/pages/hotels/HotelsPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/UI/organisms/SearchBar";
import HotelCard from "../../components/UI/organisms/HotelCard";

const HotelsPage = () => {
    const { items, loading } = useSelector(state => state.hotels);

    return (
        <main className="p-6">
            <SearchBar />
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map(h => (
                        <HotelCard key={h.id} hotel={h} />
                    ))}
                </div>
            )}
        </main>
    );
};
export default HotelsPage;
