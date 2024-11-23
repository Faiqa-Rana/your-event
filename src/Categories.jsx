

import 'tailwindcss/tailwind.css'; 

const categories = [
  {
    title: "Education & Training",
    imgSrc: "/education.jpg" ,
  
  },
  {
    title: "Business & Marketing",
    imgSrc: "/business.jpg"
  },
  {
    title: "Technology & Innovation",
    imgSrc: "/technology.jpg"
  },
  {
    title: "Medical & Health",
    imgSrc: "/medical.jpg"
  },
  {
    title: "Concert & Festival",
    imgSrc: "/festival.jpg"
  },
  {
    title: "Art & Craft",
    imgSrc: "/art.jpg"
  },
  {
    title: "Music & Entertainment",
    imgSrc: "/music.jpg"
  },
  {
    title: "Sport & Travel",
    imgSrc: "/sports.jpg"
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map((category, index) => (
          <div className="relative" key={index}>
            <img
              alt={category.title}
              className=" w-fit h-fit object-cover rounded-lg"
              height="200"
              src={category.imgSrc}
              width="200"
              
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg font-semibold">{category.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">
            Bringing the world together through live experiences
          </h2>
          <p className="text-gray-600 mb-6">
            Join an event to meet people, make friends, find support, grow a business, and explore your interests. Thousands of events are happening every day, both online and in person!
          </p>
          <a href="/Banners.jsx" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg" >
            Explore our events
          </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            alt="Live event with crowd and stage"
            className="w-full h-full object-cover rounded-lg"
            height="600"
            src="/live event.jpg"
            width="500"
          />
        </div>
      </div>
    </div>
    
  );
};


export default Categories;