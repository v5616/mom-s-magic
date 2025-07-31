import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      bio: 'With over 15 years of experience in the food industry, Priya founded MomMagic with a vision to bring authentic home-cooked meals to everyone while empowering local homemakers.'
    },
    {
      name: 'Rahul Verma',
      role: 'Operations Director',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Rahul oversees our centralized kitchen operations and logistics, ensuring that every meal is prepared with love and delivered on time.'
    },
    {
      name: 'Anjali Patel',
      role: 'Head Chef',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'With her expertise in traditional Indian cuisine, Anjali leads our team of talented home chefs, creating delicious and nutritious meal plans.'
    },
    {
      name: 'Vikram Singh',
      role: 'Technology Lead',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Vikram is responsible for our digital platform, ensuring a seamless experience for both customers and vendor partners.'
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in preserving the authentic taste of home-cooked meals, just like mom makes them.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Quality',
      description: 'We never compromise on the quality of ingredients, preparation methods, or service standards.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Empowerment',
      description: 'We are committed to empowering women by providing them with opportunities to showcase their culinary skills and earn a sustainable income.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainability',
      description: 'We are environmentally conscious, using eco-friendly packaging and implementing sustainable practices throughout our operations.',
      icon: (
        <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            About MomMagic
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We're on a mission to bring the warmth and love of home-cooked meals to every plate while empowering local homemakers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MomMagic was born out of a simple observation: in today's fast-paced world, people are missing out on the joy and nutrition of home-cooked meals. At the same time, many talented home cooks, especially women, have limited opportunities to showcase their culinary skills and earn from them.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023, we set out to bridge this gap by creating a platform that connects hungry customers with skilled home chefs. Our centralized kitchen in Chandigarh serves as the heart of our operations, where we prepare meals with the same love and care that goes into a mother's cooking.
              </p>
              <p className="text-gray-600">
                Today, MomMagic is more than just a meal delivery service. We're a community that celebrates the art of home cooking and empowers women to become entrepreneurs in their own right.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/about-story.jpg" 
                alt="MomMagic Kitchen" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 italic text-lg">
                "To bring back the warmth of homemade food to every plate and empower every mom to become a chef-preneur."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 italic text-lg">
                "To make healthy, affordable, and soulful meals accessible to all, every day, everywhere."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-xl text-gray-600">Daily Meals Served</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-xl text-gray-600">Women Empowered</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-xl text-gray-600">Eco-friendly Packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the MomMagic Family</h2>
          <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for delicious meals or want to showcase your culinary skills, we welcome you to be a part of our journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/meal-plans" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Meal Plans
            </Link>
            <Link 
              to="/vendors" 
              className="bg-accent text-gray-800 hover:bg-accent-dark font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;