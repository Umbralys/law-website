import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      category: "Business Formation & Structuring",
      services: [
        {
          title: "Entity Selection",
          description: "Strategic guidance on choosing the optimal business structure (LLC, Corporation, Partnership) based on liability concerns, tax implications, and growth objectives."
        },
        {
          title: "Business Registration",
          description: "Handling all filings with state and federal agencies to establish your business entity and ensure compliance with regulatory requirements."
        },
        {
          title: "Governance Documents",
          description: "Creating comprehensive bylaws, operating agreements, and partnership agreements that clearly define roles, responsibilities, and conflict resolution procedures."
        }
      ]
    },
    {
      id: 2,
      category: "Contracts & Transactions",
      services: [
        {
          title: "Contract Drafting & Review",
          description: "Creating custom contracts and agreements tailored to your specific business needs, ensuring clarity and legal enforceability."
        },
        {
          title: "Negotiation Strategy",
          description: "Representing your interests in complex negotiations, identifying potential issues, and securing favorable terms."
        },
        {
          title: "Due Diligence",
          description: "Thorough investigation and analysis of financial records, contracts, intellectual property, and potential liabilities before completing transactions."
        }
      ]
    },
    {
      id: 3,
      category: "Corporate Governance",
      services: [
        {
          title: "Board Advisory Services",
          description: "Strategic counsel to boards of directors on governance best practices, fiduciary duties, and corporate decision-making processes."
        },
        {
          title: "Compliance Programs",
          description: "Developing and implementing comprehensive compliance programs tailored to industry-specific regulations and requirements."
        },
        {
          title: "Shareholder Relations",
          description: "Managing complex shareholder matters including agreements, disputes, meetings, and communications."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to your business needs with a focus on practical, results-oriented guidance.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-6 py-16">
        {serviceCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Approach Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Understand</h3>
              <p className="text-gray-700">We take the time to deeply understand your business, goals, and challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-gray-700">Our team conducts thorough legal analysis to identify risks and opportunities.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Strategize</h3>
              <p className="text-gray-700">We develop customized strategies aligned with your business objectives.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Execute</h3>
              <p className="text-gray-700">Our attorneys implement solutions with precision and attention to detail.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <p className="text-xl text-gray-700 italic mb-6">
              "Morgan & Associates provided invaluable guidance during our recent acquisition. Their attention to detail and strategic approach saved us from several potential pitfalls and ensured a smooth transaction process."
            </p>
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">JD</div>
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-gray-600">CEO, Tech Innovations Inc.</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-md transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;