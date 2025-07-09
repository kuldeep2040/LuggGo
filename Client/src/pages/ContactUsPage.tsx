import { useState, useEffect } from 'react';

export default function ContactUsPage() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Animation effect for elements when page loads
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
      setTimeout(() => {        
        element.classList.add('active');
      }, 150 * index);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowSuccessMessage(true);
      setIsSubmitting(false);
      
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }, 1000);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafd] to-[#edf0fd] min-h-screen overflow-hidden">
      {/* Animated Decorative Shapes */}
      <span className="hidden sm:block absolute left-[6vw] top-[88px] w-3.5 h-3.5 bg-[#f6a623] rounded-full animate-pulse"/>
      <span className="hidden sm:block absolute left-[12vw] top-[350px] w-3 h-3 bg-[#1338fc] rounded-full animate-pulse"/>
      <span className="hidden md:block absolute left-[25vw] bottom-[140px] w-9 h-9 border-2 border-dashed border-[#a884ff] rounded-full opacity-50 animate-spin" style={{animationDuration: '15s'}}/>
      <span className="hidden md:block absolute right-[13vw] top-[100px] w-9 h-9 border-2 border-[#ffe58f] rounded-full opacity-75 animate-ping" style={{animationDuration: '10s', animationIterationCount: 'infinite'}}/>
      <span className="hidden sm:block absolute right-[22vw] top-[172px] w-2.5 h-2.5 bg-[#1338fc] rounded-full animate-pulse"/>
      <span className="hidden sm:block absolute right-[11vw] top-[429px] w-2.5 h-2.5 bg-[#27d06f] rounded-full animate-pulse"/>
      <span className="hidden sm:block absolute right-[7vw] bottom-[76px] w-2.5 h-2.5 bg-[#fd4c5c] rounded-full animate-pulse"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8fff8] border border-[#1bc46a] rounded-full text-xs font-bold text-[#09b95c] mb-4 shadow-sm">
            GET IN TOUCH
            <span className="font-medium text-[#3f3f46] ml-2 whitespace-nowrap">We'd love to hear from you</span>
          </span>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl text-[#25244c] tracking-tight drop-shadow-xl">
            Contact <span className="text-[#2a8efc] relative">
              Us
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,6 L100,6 C60,6 40,0 0,0 Z" fill="#2a8efc" opacity="0.3"/>
              </svg>
            </span>
          </h1>
          <p className="mt-4 text-[#757493] text-lg max-w-2xl mx-auto">
            Have questions about our luggage storage service? Our team is here to help you with anything you need.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Support */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in">
              <div className="w-12 h-12 bg-[#edf0fd] rounded-2xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1536ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#25244c] mb-2">Customer Support</h3>
              <p className="text-[#757493] mb-4">Available 24/7 to assist with your queries and booking issues.</p>
              <a href="tel:+917018531623" className="flex items-center gap-2 text-[#1536ec] font-semibold hover:text-[#0d1dab] transition-colors">
                +91 7018 531 623
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in">
              <div className="w-12 h-12 bg-[#edf0fd] rounded-2xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1536ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#25244c] mb-2">Email Us</h3>
              <p className="text-[#757493] mb-4">Send us your queries anytime. We'll get back to you within 24 hours.</p>
              <a href="mailto:support@luggagehero.in" className="flex items-center gap-2 text-[#1536ec] font-semibold hover:text-[#0d1dab] transition-colors">
                support@luggagehero.in
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in">
              <div className="w-12 h-12 bg-[#edf0fd] rounded-2xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1536ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#25244c] mb-2">Head Office</h3>
              <p className="text-[#757493] mb-4">Visit our main office at IIIT UNA, Himachal Pradesh.</p>
              <a href="https://maps.google.com/?q=Indian+Institute+of+Information+Technology+Una+Himachal+Pradesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1536ec] font-semibold hover:text-[#0d1dab] transition-colors">
                IIIT Una, Saloh, H.P. - 177209
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
              <h3 className="text-xl font-bold text-[#25244c] mb-4">Our Location</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 border-2 border-[#edf0fd]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.401040256468!2d76.16955537617637!3d32.0018919248052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4c1%3A0x395f92d3a202a7d0!2sIndian%20Institute%20of%20Information%20Technology%20Una!5e0!3m2!1sen!2sin!4v1713518532201!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIIT Una Location"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 fade-in">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#25244c] mb-6">Send us a message</h3>
              
              {showSuccessMessage && (
                <div className="mb-6 bg-[#e8fff8] border border-[#1bc46a] text-[#09b95c] px-4 py-3 rounded-xl flex items-center gap-2 animate-fadeIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#757493] mb-1 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a8efc] focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#757493] mb-1 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a8efc] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#757493] mb-1 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="What is this regarding?" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a8efc] focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#757493] mb-1 ml-1">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..." 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a8efc] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-[#757493]">
                    <span>We'll get back to you within 24 hours</span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#2a8efc] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#176ddb] transition-colors flex items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg fade-in">
              <h3 className="text-xl font-bold text-[#25244c] mb-4">Connect with us</h3>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <a href="#" className="w-10 h-10 rounded-full bg-[#edf0fd] flex items-center justify-center text-[#1536ec] hover:bg-[#1536ec] hover:text-white transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.15l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#edf0fd] flex items-center justify-center text-[#1536ec] hover:bg-[#1536ec] hover:text-white transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#edf0fd] flex items-center justify-center text-[#1536ec] hover:bg-[#1536ec] hover:text-white transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#edf0fd] flex items-center justify-center text-[#1536ec] hover:bg-[#1536ec] hover:text-white transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style >{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}