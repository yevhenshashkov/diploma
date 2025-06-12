const HotelCard = ({ hotel }) => {
    return (
        <div className="border rounded p-4 shadow-md w-full max-w-md bg-white">
            <img
                src={hotel.image || '/assets/img/placeholder.jpg'}
                alt={hotel.name}
                className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.city}</p>
        </div>
    );
};

export default HotelCard;