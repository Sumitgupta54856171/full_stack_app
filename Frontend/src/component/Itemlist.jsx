function Itemlist() {
    return (
        // Wrapper for the entire list (assuming multiple items will be rendered by a parent)
        // For a single item, this div acts as the container.
        <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-8 bg-gray-100 min-h-screen items-center font-sans">
            {/* Item Card Container - Designed for a sleek, modern look */}
            <div className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden
                            hover:shadow-2xl transition-all duration-300 ease-in-out
                            w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl
                            transform hover:-translate-y-1">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 overflow-hidden flex items-center justify-center bg-gray-200">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDykslgE83yWvgu2tU69olaeqOVIFdwPeLyg&s"
                        alt="Product Image"
                        className="w-full h-48 object-cover md:h-full md:max-h-80 rounded-t-xl md:rounded-l-xl md:rounded-tr-none
                                   transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                    {/* Optional: Add a badge for new/sale items */}
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        New Arrival
                    </span>
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-8 flex-1 flex flex-col justify-between"> {/* Adjusted padding for mobile */}
                    {/* Product Info */}
                    <div className="flex-grow">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 leading-tight">Stylish Urban Jacket</h3> {/* Adjusted text size for mobile */}
                        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed"> {/* Adjusted text size for mobile */}
                            A versatile jacket perfect for any season. Crafted with premium materials for comfort and durability.
                        </p>

                        {/* Feature Tags/Pills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800 shadow-sm">
                                Good Quality
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 shadow-sm">
                                Free Shipping
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800 shadow-sm">
                                Top Rated
                            </span>
                        </div>

                        {/* Price Display */}
                        <div className="text-2xl sm:text-3xl font-extrabold text-indigo-700 mb-6"> {/* Adjusted text size for mobile */}
                            $49.99
                            <span className="text-base sm:text-lg font-normal text-gray-400 line-through ml-2">$69.99</span> {/* Adjusted text size for mobile */}
                        </div>
                    </div>

                    {/* Actions (Buttons) */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto"> {/* Adjusted gap for mobile */}
                        <button className="flex-1 w-full bg-blue-600 text-white font-semibold py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg
                                           hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300
                                           transition-all duration-300 ease-in-out shadow-md hover:shadow-lg text-sm sm:text-base"> {/* Adjusted padding and text size */}
                            Add to Cart
                        </button>
                        <a href="/apparel" className="flex-1 w-full text-center bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg
                                                   hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300
                                                   transition-all duration-300 ease-in-out shadow-md hover:shadow-lg text-sm sm:text-base"> {/* Adjusted padding and text size */}
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemlist;