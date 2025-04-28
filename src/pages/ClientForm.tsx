
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';
import { Button } from '@/components/ui/button';

const ClientForm = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8]">
      <header className="w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/19d7897ab9ee47debf28f9b69f2cc8db/c4d00d8b5eefb4fbffde665bff7946be8860e391?placeholderIfAbsent=true"
          alt="Header banner"
          className="aspect-[17.24] object-contain w-full"
        />
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start h-16">
              <Link 
                to="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="w-full bg-[rgba(11,53,98,1)] text-white py-12">
          <h1 className="text-4xl font-bold text-center">Project Creation</h1>
        </div>
        
        <div className="max-w-3xl w-full px-4 py-8 mx-auto">
          <p className="text-center mb-8 text-gray-600">
            Share your business challenge by completing the questionnaire below, or feel free to contact us directly for a personalized discussion.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Is this a company project or a personal project?</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Personal Project</option>
                  <option>Company Project</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Is this a paid project or not?</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Company Name</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Contact Person</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Tell us a little bit about what you need:</label>
              <textarea className="w-full p-2 border rounded-md h-32"></textarea>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Which of these best describes what you are hoping to achieve working with us:</label>
              <select className="w-full p-2 border rounded-md mb-2">
                <option>I want to build my software product</option>
              </select>
              <select className="w-full p-2 border rounded-md mb-2">
                <option>I want to create more opportunities</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>I need to generate more leads/customers</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Project timeline:</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter timeline" />
            </div>

            <Button type="submit" className="w-full bg-[rgba(11,53,98,1)] text-white py-3 rounded-md hover:bg-[rgba(11,53,98,0.9)] transition-colors">
              Submit
            </Button>
          </form>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default ClientForm;
