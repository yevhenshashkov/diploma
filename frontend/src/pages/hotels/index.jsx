import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getHotels } from "../../store/thunks/hotelsThunk";

const Hotels = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.hotels);

    useEffect(() => {
        dispatch(getHotels({ destinationId: 1, query: "" }));
    }, [dispatch]);

    useEffect(() => {
        console.log(items); // <--- выведет массив отелей
    }, [items]);

    return (
        <div>
            <h2>Отели</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            <ul>
                {items.map(hotel => (
                    <li key={hotel.id}>
                        {hotel.name} — {hotel.label}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Hotels