import  { useState, useEffect } from 'react';

// Using placeholder API for development - replace with actual CDN hosted images in production
const avatar1 =  'https://images.unsplash.com/photo-1701615004837-40d8573b6652?fm=jpg&q=80&w=120';
const avatar2 = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=80&w=120';
const avatar3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=80&w=120';
const avatar4 = 'https://plus.unsplash.com/premium_photo-1693000696650-e73643956033?fm=jpg&q=80&w=120';

const testimonials = [
  {
    text: "Luggo made my layover so much easier! I stored my bags safely near the airport and explored the city hands-free.",
    name: 'Rahul Verma',
    role: 'Frequent Traveler',
    avatar: avatar1,
    avatarDecor: '#cde4fe',
    stars: 5
  },
  {
    text: "The convenience of booking luggage storage right from the website saved me from dragging my bags around the train station.",
    name: 'Ananya Singh',
    role: 'Tourist',
    avatar: avatar2,
    avatarDecor: '#f9e7dc',
    stars: 5
  },
  {
    text: "Secure, reliable, and friendly staff. Luggo's storage locations gave me peace of mind during my business trip.",
    name: 'Karan Mehta',
    role: 'Business Traveler',
    avatar: avatar3,
    avatarDecor: '#d0f0e7',
    stars: 4
  },
  {
    text: "I was skeptical at first, but Luggo exceeded my expectations. The pickup process was seamless and the staff was very professional.",
    name: 'Priya Sharma',
    role: 'International Student',
    avatar: avatar4,
    avatarDecor: '#f0f7fa',
    stars: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [index]);

  const handleTransition = (callback) => {
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prev = () => handleTransition(() => 
    setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  );
  
  const next = () => handleTransition(() => 
    setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  );

  // Avatars for blob (visually balanced)
  const blobAvatars = [
    { src: avatar1, className: 'left-[50%] -top-7 -translate-x-1/2 w-14 h-14 border-[#cde4fe]' },
    { src: avatar2, className: 'left-[76%] top-[37%] w-14 h-14 border-[#f9e7dc]' },
    // { src: avatar3, className: 'left-[5%] top-[55%] w-11 h-11 border-[#d0f0e7]' },
    { src: avatar4, className: 'left-[47%] bottom-3 -translate-x-1/2 w-11 h-11 border-[#f0f7fa]' },
  ];
  
  // Render stars based on rating
  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`} 
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <div
      className="relative w-full bg-[#f4f8fd] flex items-center justify-center font-sans overflow-hidden py-16 md:py-24"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background elements */}
      <div className="absolute top-24 left-[38%] w-4 h-4 rounded-full bg-[#6CC551] shadow-lg" />
      <div className="absolute bottom-28 left-[32%] w-4 h-4 rounded-full bg-[#34CB4A] shadow-lg" />
      <div className="absolute top-20 right-44 w-3 h-3 rounded-full bg-[#1350FF] shadow-sm" />
      <div className="absolute bottom-16 right-[15%] w-2 h-2 rounded-full bg-[#FF5B14] shadow-sm" />
      <svg className="absolute bottom-0 right-0 w-56 md:w-72" viewBox="0 0 200 120" fill="none">
        <path d="M0 120Q45 30 195 5C200 60 120 130 0 120Z" fill="#3F62FB" />
      </svg>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl px-6 md:px-8 items-center justify-between gap-12 md:gap-6">
        {/* LEFT - testimonial with carousel */}
        <div className="flex-1 max-w-[480px] pl-4 md:pl-8 pt-6">
          <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center mb-7">
            <svg width="34" height="34" className="text-[#34CB4A]" viewBox="0 0 34 34">
              <text x="2" y="30" fontSize="38" fontWeight="bold" fill="#34CB4A">
                "
              </text>
            </svg>
          </div>
          
          {/* Testimonial text */}
          <div className="relative min-h-[130px] mb-8">
            {testimonials.map((tes, i) => (
              <div
                key={tes.name}
                className={`absolute top-0 left-0 w-full transition-all duration-300 ${
                  index === i 
                    ? 'opacity-100 z-10 translate-y-0' 
                    : 'opacity-0 z-0 pointer-events-none translate-y-4'
                } text-lg md:text-xl leading-relaxed text-[#3C4253]`}
              >
                {tes.text}
              </div>
            ))}
          </div>
          
          {/* Rating stars */}
          <div className="flex space-x-1 mb-4">
            {renderStars(testimonials[index].stars)}
          </div>
          
          {/* User info */}
          <div className="flex items-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-green-400/20 blur-sm" />
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="relative rounded-full w-12 h-12 border-4 object-cover"
                style={{ borderColor: testimonials[index].avatarDecor }}
              />
            </div>
            <div className="ml-4">
              <div className="font-bold text-base text-[#15181f]">{testimonials[index].name}</div>
              <div className="text-sm text-[#6B7280] font-normal">{testimonials[index].role}</div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex gap-4 mt-5">
            {/* Pagination indicator */}
            <div className="hidden md:flex items-center mr-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                    index === i ? 'bg-[#34CB4A] w-4' : 'bg-gray-300'
                  }`} 
                />
              ))}
            </div>
            
            {/* Buttons */}
            <button
              aria-label="Previous"
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center active:scale-90 transition-all hover:bg-gray-50 disabled:opacity-50"
              onClick={prev}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#303446" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              aria-label="Next"
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center active:scale-90 transition-all hover:bg-gray-50 disabled:opacity-50"
              onClick={next}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#303446" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* RIGHT - blob, heading, avatars */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center min-h-[340px] min-w-[320px] md:min-w-[380px]">
            {/* Animated blob SVG */}
            <svg
              className="absolute left-0 top-0 z-0"
              width="352"
              height="322"
              viewBox="0 0 352 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93 23C177 -24 329 17 348 106c19 89-53 206-168 209-73.8 1.6-183-39-179-106C5 142 27 60 93 23Z"
                fill="#F4F8FD"
                className="drop-shadow-sm"
              />
              <path
                d="M89 85c18-8 98-22 175 23M73 99c61 17 120 32 213 70M111 60c53-20 161-9 179 90M115 229c37-7 84-23 100-50M55 175c53 53 131 54 214 41"
                stroke="#E6EBF7"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            
            {/* Heading Text */}
            <div className="absolute z-10 top-14 left-10 w-[220px]">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#15181F] mb-3">
                What Our Customers Say About <span className="text-[#3F62FB]">Luggo</span>
              </h2>
              <p className="text-sm text-gray-600">Join thousands of happy travelers</p>
            </div>
            
            {/* Profile avatars positioned around the blob */}
            {blobAvatars.map((a, idx) => (
              <div key={idx} className={`absolute z-10 ${a.className}`}>
                <div className="absolute inset-0 rounded-full bg-white/50 blur-sm" />
                <img
                  src={a.src}
                  alt=""
                  className={`relative rounded-full border-4 object-cover hover:scale-110 transition-transform duration-300 ${a.className}`}
                />
              </div>
            ))}
            
            {/* Badge */}
            <div className="absolute bottom-10 right-0 z-20 bg-white px-3 py-2 rounded-lg shadow-lg flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#34CB4A] flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium">Trusted by 10,000+ travelers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}