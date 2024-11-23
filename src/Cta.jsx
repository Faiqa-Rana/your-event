const CTABanner = () => {
    return (
        <div className="container mx-auto p-6 relative overflow-hidden">
            <div className="bg-purple-900 text-white font-roboto text-center py-16 px-6 rounded-md">
                <h1 className="text-3xl font-bold mb-4">
                Join Us Today to Arrange the Best Events!
                </h1>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-50 animate-pulse-circle"></div>
                <p className="text-lg mb-6">
                Looking to host unforgettable events or participate in amazing experiences? Our platform makes it easy to organize and attend the best events, from intimate gatherings to grand celebrations. With our user-friendly tools, you can plan with ease and bring your ideas to life. Whether you are hosting a conference, party, wedding, or anything in between, we are here to help you make it extraordinary.
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-50 animate-pulse-circle"></div>
                
                <button className="bg-white text-purple-500 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Get Started
                </button>
                
            </div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30 animate-float-circle"></div>
            <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-30 animate-float-circle"></div>
        </div>
    );
};

export default CTABanner;