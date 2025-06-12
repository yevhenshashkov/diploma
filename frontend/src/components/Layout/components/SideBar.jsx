import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../../../store/slices/hotelsSlice";

const SideBar = () => {
    const dispatch = useDispatch();
    const hotels = useSelector((state) => state.hotels.items);
    const uniqueCities = [...new Set(hotels.map((h) => h.city))];

    return (
        <aside className="w-64 p-5 border-r bg-gray-100 text-sm">
            <h2 className="text-lg font-bold mb-4">Фильтры</h2>

            {/* Города */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Города</h3>
                <ul className="space-y-1">
                    {uniqueCities.map((city) => (
                        <li
                            key={city}
                            onClick={() => dispatch(setSelectedCity(city))}
                            className="cursor-pointer hover:text-blue-500 transition"
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Цена */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Цена</h3>
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        placeholder="от"
                        className="w-full px-2 py-1 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="до"
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>
            </div>

            {/* Удобства */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Удобства</h3>
                <label className="flex items-center gap-2 mb-1">
                    <input type="checkbox" /> Wi-Fi
                </label>
                <label className="flex items-center gap-2 mb-1">
                    <input type="checkbox" /> Парковка
                </label>
                <label className="flex items-center gap-2 mb-1">
                    <input type="checkbox" /> Завтрак включен
                </label>
            </div>

            {/* Рейтинг */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Рейтинг</h3>
                <select className="w-full border px-2 py-1 rounded">
                    <option value="">Любой</option>
                    <option value="4">4+ звезды</option>
                    <option value="3">3+ звезды</option>
                    <option value="2">2+ звезды</option>
                </select>
            </div>

            {/* Сброс */}
            <button
                className="mt-4 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                onClick={() => dispatch(setSelectedCity(null))}
            >
                Сбросить фильтры
            </button>
        </aside>
    );
};

export default SideBar;
