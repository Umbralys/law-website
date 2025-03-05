import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Handshake } from 'lucide-react';

const LawTypes = () => {
  const lawSpecialties = [
    {
      id: 1,
      title: "Corporate Law",
      icon: <Briefcase size={40} />,
      description: "Our corporate law practice provides comprehensive legal services to businesses of all sizes, from startups to multinational corporations. We assist with entity formation, corporate governance, regulatory compliance, and strategic transactions.",
      services: [
        "Business Formation & Entity Selection",
        "Corporate Governance",
        "Regulatory Compliance",
        "Corporate Restructuring",
        "Shareholder Agreements"
      ]
    },
    {
      id: 2,
      title: "Contract Law",
      icon: <FileText size={40} />,
      description: "Effective contracts are essential to protecting your business interests. Our attorneys draft, review, and negotiate contracts that clearly define terms, mitigate risks, and help avoid future disputes while achieving your business objectives.",
      services: [
        "Contract Drafting & Review",
        "Negotiation Support",
        "Breach of Contract Litigation",
        "Risk Assessment",
        "Contract Management Systems"
      ]
    },
    {
      id: 3,
      title: "Mergers & Acquisitions",
      icon: <Handshake size={40} />,
      description: "Our M&A team provides strategic guidance throughout the entire transaction process. We conduct due diligence, structure deals, negotiate terms, and ensure regulatory compliance to help clients achieve their strategic objectives.",
      services: [
        "Transaction Structuring",
        "Due Diligence",
        "Negotiation & Documentation",
        "Regulatory Compliance",
        "Post-Closing Integration"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Page Header with Background Image */}
<div className="relative bg-slate-900 py-20">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 bg-slate-900 bg-opacity-80">
    {/* 
      Recommended image size: 1920x400px
      This gives enough width for large screens while keeping the header height reasonable.
      The high resolution ensures the image looks crisp on retina displays.
    */}
    <div 
      className="bg-cover bg-center absolute inset-0 mix-blend-overlay" 
      style={{backgroundImage: "url('/images/legal-header-bg.png')"}}
    ></div>
  </div>
  
  {/* Content (positioned relative to appear above the background) */}
  <div className="relative container mx-auto px-6 text-center">
    <h1 className="text-4xl font-normal text-white">Our Legal Specialties</h1>
    <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
      Expert legal counsel across a range of business law specialties to address your most complex challenges.
    </p>
  </div>
</div>

      {/* Main Content */}
<div className="container mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {lawSpecialties.map((specialty) => (
      <div key={specialty.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Card Header with Background Image */}
        <div className="relative text-white p-6 text-center">
          {/* 
            Recommended image size: 600x300px 
            This works well for card headers while maintaining quality on retina displays
          */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url('/images/${specialty.id === 1 ? 'corporate-law.png' : 
                             specialty.id === 2 ? 'contract-law.png' : 'mergers-acquisitions.png'}')`
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Icon and title (now relative to appear above the background) */}
          <div className="relative z-10">
            <div className="flex justify-center">
              {specialty.icon}
            </div>
            <h3 className="text-2xl font-semibold mt-2">{specialty.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-6">{specialty.description}</p>
          <h4 className="font-semi-bold text-lg mb-3 text-gray-900">Key Services:</h4>
          <ul className="space-y-2">
            {specialty.services.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-md transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-normal text-white mb-6">Need Legal Expertise for Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experienced attorneys is ready to help you navigate complex legal challenges and achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-md transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawTypes;