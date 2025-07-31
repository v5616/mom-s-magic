import React from 'react';
import { Link } from 'react-router-dom';

const MealPlansPage: React.FC = () => {
  const mealPlans = [
    {
      id: 'basic',
      name: 'Basic Tiffin',
      price: 99,
      description: 'Simple, nutritious meals for those on a budget',
      features: ['2 Roti', '1 Sabzi', 'Rice', 'Pickle'],
      color: 'bg-gray-100',
      popular: false
    },
    {
      id: 'gold',
      name: 'Gold Tiffin',
      price: 149,
      description: 'Our most popular plan with balanced nutrition',
      features: ['3 Roti', '1 Sabzi', '1 Dal', 'Rice', 'Salad', 'Sweet (occasionally)'],
      color: 'bg-yellow-50',
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum Tiffin',
      price: 199,
      description: 'Premium plan with variety and extra portions',
      features: ['4 Roti', '2 Sabzi', '1 Dal', 'Rice', 'Salad', 'Raita', 'Sweet'],
      color: 'bg-gray-50',
      popular: false
    }
  ];

  const subscriptionOptions = [
    { id: 'daily', name: 'Daily', discount: '0%' },
    { id: 'weekly', name: 'Weekly', discount: '5%' },
    { id: 'monthly', name: 'Monthly', discount: '10%' }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Meal Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of meal plans designed to provide you with nutritious, 
            home-style meals at affordable prices.
          </p>
        </div>

        {/* Subscription Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Choose Your Subscription</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {subscriptionOptions.map((option) => (
              <div 
                key={option.id}
                className="border border-gray-200 rounded-lg p-4 w-full sm:w-auto text-center cursor-pointer hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-medium">{option.name}</h3>
                <p className="text-sm text-gray-500">Save {option.discount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mealPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-lg shadow-lg overflow-hidden ${plan.color} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/day</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/register?plan=${plan.id}" 
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-md font-medium transition-colors"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Special Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-3">Surprise Dish Days</h3>
              <p className="text-gray-600 mb-4">
                Add excitement to your meal routine with our chef's special surprise dishes, 
                delivered on selected days of the week.
              </p>
              <p className="text-primary font-medium">+₹20 per surprise dish</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-semibold mb-3">Festival Specials</h3>
              <p className="text-gray-600 mb-4">
                Celebrate festivals with our special thematic meals, featuring traditional 
                delicacies and festive favorites.
              </p>
              <p className="text-primary font-medium">Prices vary by festival</p>
            </div>
          </div>
        </div>

        {/* Electric Lunchbox Promo */}
        <div className="mt-16 bg-gradient-to-r from-primary-light to-primary rounded-lg shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Premium Electric Lunchbox</h2>
              <p className="mb-6">
                Subscribe to our monthly plans and get a complimentary electric lunchbox that keeps your meals 
                warm and fresh. Experience the premium dining experience, anywhere you go.
              </p>
              <Link 
                to="/register?plan=monthly" 
                className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg"
              >
                Get Monthly Plan
              </Link>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">Electric Lunchbox Included</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-2">How does the delivery work?</h3>
              <p className="text-gray-600">
                We deliver meals daily between 11:30 AM and 1:00 PM. You can track your delivery in real-time through our app.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-2">Can I customize my meals?</h3>
              <p className="text-gray-600">
                Yes, you can customize your meals based on dietary preferences. Just update your preferences in the app.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium mb-2">What if I need to skip a day?</h3>
              <p className="text-gray-600">
                You can pause or skip deliveries up to 24 hours in advance through your account dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to enjoy homemade meals?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your journey with MomMagic today and experience the warmth and love of home-cooked food.
          </p>
          <Link 
            to="/register" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealPlansPage;