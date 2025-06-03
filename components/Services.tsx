"use client";
import React, { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // please add specific feedbox related services here , currently i am some adding dummy services
  const services = [
    {
      title: "Accounting and Analysis",
      description: "We've designed and built ecommerce experiences that have driven sales.",
      bgColor: "bg-yellow-200"
    },
    {
      title: "Finance and Banking", 
      description: "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
      bgColor: "bg-green-200"
    },
    {
      title: "Strategic Business Leader",
      description: "Strategic Business Leader is a training course from the Strategic Professional level.",
      bgColor: "bg-red-200"
    },
    {
      title: "Preparatory Course",
      description: "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
      bgColor: "bg-pink-200"
    },
    {
      title: "Business English Writing Skills",
      description: "A unique opportunity to gain guidance and feedback from our expert.",
      bgColor: "bg-yellow-200"
    },
    {
      title: "Strategic Business Reporting",
      description: "Strategic Business Reporting is a Professional level training course. It covers topics related to advanced financial reporting, including leasing.",
      bgColor: "bg-green-200"
    }
  ];

  const faqs = [
    {
      id: 0,
      question: "What is FeedBox College Clubs?",
      answer: "A student-driven community that fosters digital skills, creativity, and professional growth across college campuses."
    },
    {
      id: 1,
      question: "Who can join FeedBox?",
      answer: "Any college student passionate about learning, innovation, and contributing to real-world projects is welcome to join."
    },
    {
      id: 2,
      question: "Are there any fees to become a member?",
      answer: "No, joining FeedBox is completely free. We believe in open access to opportunities and knowledge."
    },
    {
      id: 3,
      question: "What kind of activities does FeedBox conduct?",
      answer: "We host workshops, speaker sessions, hands-on projects, hackathons, and networking events throughout the academic year."
    },
    {
      id: 4,
      question: "Is FeedBox available outside VIT Bhopal?",
      answer: "Yes! FeedBox has a presence in over 20 colleges across Madhya Pradesh and is constantly expanding."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Services we provide
          </h1>
          <p className="text-gray-600">
            We specialise in organising professional training courses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} p-6 rounded-lg`}>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-black mb-6">
                {service.description}
              </p>
              <button className="bg-gray-800 text-white-900 font-semibold py-2 px-6 rounded-lg w-full cursor-pointer onClick">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              FAQ
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              If you have any further questions please contact us.
            </p>
          </div>

          {/* FAQ List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`border-2 rounded-lg p-4 cursor-pointer ${
                  openFaq === faq.id ? 'border-purple-300 bg-gray-900' : 'border-gray-600'
                }`}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className="text-white text-xl">
                    {openFaq === faq.id ? '−' : '+'}
                  </span>
                </div>
                {openFaq === faq.id && (
                  <p className="text-white mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-white mr-2"></div>
                <span className="text-xl font-bold">Feedbox club</span>
              </div>
            </div>

          
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Services</li>
                <li>Works</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>

            
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Feedbox club!</h4>
              <div className=" flex flex-col sm:flex-row gap-2">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="w-100 flex-1 px-3 py-2 rounded bg-amber-50 text-black"
                />
                <button className=" w-full sm:w-auto bg-red-300 text-gray-900 px-4 py-2 rounded font-semibold cursor-pointer
                 hover:bg-green-400 transition-colors ease-in-out  ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;