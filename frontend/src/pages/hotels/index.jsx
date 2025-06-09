import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHotels } from "../../store/thunks/hotelsThunk";

const Hotels = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.hotels);

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    useEffect(() => {
        console.log(items);
    }, [items]);

    return <div>

    </div>;
};

export default Hotels;

