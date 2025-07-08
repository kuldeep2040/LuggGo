
type City = {
  name: string;
  storageCount: number;
  imageUrl: string;
};

const cities: City[] = [
  {
    name: 'Delhi',
    storageCount: 30,
    imageUrl: 'https://t4.ftcdn.net/jpg/07/24/54/37/360_F_724543702_X6g0dRWzWtEFPWXoiHAzXwZWnG3xKLxp.jpg',
  },
  {
    name: 'Jaipur',
    storageCount: 6,
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/754/557/317/palace-of-the-winds-jaipur-rajasthan-india-wallpaper-preview.jpg',
  },
  {
    name: 'Lucknow',
    storageCount: 7,
    imageUrl: 'https://i.ytimg.com/vi/CMYKTIA-c6M/hqdefault.jpg',
  },
  {
    name: 'Varanasi',
    storageCount: 6,
    imageUrl: 'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg',
  },
  {
    name: 'Jodhpur',
    storageCount: 3,
    imageUrl: 'https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=',
  },
  {
    name: 'Mumbai',
    storageCount: 26,
    imageUrl: 'https://t4.ftcdn.net/jpg/01/46/43/87/360_F_146438747_3XYwVkfnYZuukBZYmDM8xeoqENzyhAqa.jpg',
  },
];

export default function TopCitiesSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#f8fafd] overflow-hidden">
      {/* Decorative elements */}
      <span className="hidden sm:block absolute left-[8vw] top-[60px] w-3 h-3 bg-[#f6a623] rounded-full"/>
      <span className="hidden sm:block absolute right-[15vw] top-[120px] w-2.5 h-2.5 bg-[#fd4c5c] rounded-full"/>
      <span className="hidden md:block absolute left-[18vw] bottom-[80px] w-8 h-8 border-2 border-dashed border-[#a884ff] rounded-full opacity-50"/>
      <span className="hidden md:block absolute right-[22vw] bottom-[140px] w-9 h-9 border-2 border-[#ffe58f] rounded-full opacity-75"/>
      <span className="hidden sm:block absolute left-[28vw] top-[90px] w-2.5 h-2.5 bg-[#27d06f] rounded-full"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-[#25244c] tracking-tight drop-shadow-sm">
            Popular <span className="text-[#2a8efc]">Cities</span>
          </h2>
          <p className="mt-4 text-[#757493] text-lg max-w-2xl mx-auto">
            Secure, convenient luggage storage available in these top destinations across India
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={city.imageUrl}
                  alt={`${city.name} luggage storage`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]"></div>
                
                {/* City stats badge */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full py-1 px-3 shadow-md">
                  <span className="text-sm font-bold text-[#1536ec]">{city.storageCount}+ Locations</span>
                </div>
              </div>
              
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#25244c]">{city.name}</h3>
                    <p className="text-[#757493] mt-1">From ₹99/day</p>
                  </div>
                  
                  <a href="/units">
                  <button className="flex items-center justify-center w-10 h-10 bg-[#edf0fd] rounded-full text-[#1536ec] hover:bg-[#1536ec] hover:text-white transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </button></a>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#e8fff8] border border-[#1bc46a] rounded-full text-xs font-medium text-[#09b95c]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Near Station
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#edf2ff] border border-[#bed2ff] rounded-full text-xs font-medium text-[#1536ec]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    Insured
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#fff8e8] border border-[#ffe58f] rounded-full text-xs font-medium text-[#f6a623]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    24/7 Access
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all cities button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-7 py-3 bg-[#1536ec] hover:bg-[#0d1dab] transition-colors duration-300 rounded-full text-white font-bold shadow-lg shadow-[#bed2ff]/40">
            View All Cities
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}