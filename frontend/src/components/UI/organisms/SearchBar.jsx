import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "../../../store/slices/hotelsSlice";
import { getHotelsByCity } from "../../../store/thunks/hotelsThunk";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (!city.trim()) return;
        dispatch(setSelectedCity(city));          // 1. Сохраняем выбранный город
        dispatch(getHotelsByCity(city));          // 2. Загружаем отели по городу
    };

    return (
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="border px-3 py-2 rounded w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Show
            </button>
        </div>
    );
};

export default SearchBar;
