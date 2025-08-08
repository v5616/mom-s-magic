import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const DashboardPage: React.FC = () => {
  // In a real application, this data would come from an API
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const userData = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: '123 Park Street, Sector 17, Chandigarh',
    subscription: {
      plan: 'Dabbzo Gold Tiffin',
      status: 'Active',
      nextDelivery: '2023-06-15',
      startDate: '2023-05-15',
      endDate: '2023-08-15',
      mealPreferences: ['Vegetarian', 'No Onion No Garlic'],
      deliveryTime: '12:30 PM',
      serviceType: 'Centralized Kitchen', // Added service type field
    },
    paymentMethod: {
      type: 'Credit Card',
      last4: '4242',
      expiryDate: '05/25',
    },
    orders: [
      { id: 'ORD123456', date: '2023-06-10', status: 'Delivered', amount: 149, type: 'Centralized Kitchen' },
      { id: 'ORD123455', date: '2023-06-09', status: 'Delivered', amount: 149, type: 'Centralized Kitchen' },
      { id: 'ORD123454', date: '2023-06-08', status: 'Delivered', amount: 149, type: 'Centralized Kitchen' },
      { id: 'ORD123453', date: '2023-06-07', status: 'Delivered', amount: 149, type: 'Vendor Subscription' },
      { id: 'ORD123452', date: '2023-06-06', status: 'Delivered', amount: 149, type: 'On-Demand Order' },
    ],
  };
  
  // Service model descriptions
  const serviceModels = [
    {
      id: 'centralized',
      title: 'Centralized Kitchen Orders',
      description: 'Meals prepared and delivered directly from our central kitchen. Enjoy batch deliveries for better efficiency.',
      icon: FaIcons.FaUtensils({ className: "h-8 w-8 text-primary" })
    },
    {
      id: 'vendor',
      title: 'Vendor Subscription Model',
      description: 'Subscribe to meal plans from our listed vendors and home chefs. We handle pickup and delivery.',
      icon: FaIcons.FaStore({ className: "h-8 w-8 text-primary" })
    },
    {
      id: 'ondemand',
      title: 'On-Demand Last-Minute Orders',
      description: 'Order from partner restaurants, vendors, or kitchens for quick preparation and delivery.',
      icon: FaIcons.FaBox({ className: "h-8 w-8 text-primary" })
    }
  ];

  // Mock upcoming meals data
  const upcomingMeals = [
    {
      date: 'Today',
      menu: [
        { name: 'Paneer Butter Masala', type: 'Main Course' },
        { name: 'Jeera Rice', type: 'Rice' },
        { name: 'Butter Naan', type: 'Bread' },
        { name: 'Mixed Vegetable Raita', type: 'Side' },
        { name: 'Gulab Jamun', type: 'Dessert' },
      ],
    },
    {
      date: 'Tomorrow',
      menu: [
        { name: 'Chole Bhature', type: 'Main Course' },
        { name: 'Pulao', type: 'Rice' },
        { name: 'Lachha Paratha', type: 'Bread' },
        { name: 'Boondi Raita', type: 'Side' },
        { name: 'Jalebi', type: 'Dessert' },
      ],
    },
    {
      date: 'Day After Tomorrow',
      menu: [
        { name: 'Rajma Chawal', type: 'Main Course' },
        { name: 'Steamed Rice', type: 'Rice' },
        { name: 'Tandoori Roti', type: 'Bread' },
        { name: 'Cucumber Raita', type: 'Side' },
        { name: 'Rasmalai', type: 'Dessert' },
      ],
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Service Models Section */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-primary-light">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Service Models</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Explore our three core service offerings</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {serviceModels.map((model) => (
                    <div key={model.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        {model.icon}
                        <h4 className="ml-3 text-lg font-medium text-gray-900">{model.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{model.description}</p>
                      {model.id === 'centralized' && userData.subscription.serviceType === 'Centralized Kitchen' && (
                        <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Your Current Plan
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-primary-light">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Subscription Overview</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about your current meal plan.</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.subscription.plan}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Service Type</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.subscription.serviceType}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                    <dd className="mt-1 text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {userData.subscription.status}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Next Delivery</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.subscription.nextDelivery}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Delivery Time</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.subscription.deliveryTime}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Subscription Period</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.subscription.startDate} to {userData.subscription.endDate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Meal Preferences</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userData.subscription.mealPreferences.join(', ')}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Link
                    to="/meal-plans"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Change Plan
                  </Link>
                  <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Pause Subscription
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-primary-light">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Meals</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Preview of your next meals.</p>
              </div>
              <div className="border-t border-gray-200">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border-b border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Menu
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {upcomingMeals.map((meal, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {meal.date}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500">
                                <ul className="list-disc pl-5">
                                  {meal.menu.map((item, idx) => (
                                    <li key={idx}>
                                      <span className="font-medium">{item.name}</span> ({item.type})
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button
                                  type="button"
                                  className="text-primary hover:text-primary-dark font-medium"
                                >
                                  Skip
                                </button>
                                <button
                                  type="button"
                                  className="ml-3 text-primary hover:text-primary-dark font-medium"
                                >
                                  Customize
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-primary-light">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Order History</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Your recent orders and deliveries.</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden border-b border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Service Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {userData.orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {order.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.type === 'Centralized Kitchen' ? 'bg-blue-100 text-blue-800' : order.type === 'Vendor Subscription' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {order.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ₹{order.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button
                                type="button"
                                className="text-primary hover:text-primary-dark font-medium"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-primary-light">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your account details.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={userData.name}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={userData.email}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        defaultValue={userData.phone}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        defaultValue={userData.address}
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-primary-light">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Payment Methods</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your payment information.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="mb-6">
                <h4 className="text-base font-medium text-gray-900">Current Payment Method</h4>
                <div className="mt-2 flex items-center p-4 border border-gray-200 rounded-md">
                  <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{userData.paymentMethod.type} ending in {userData.paymentMethod.last4}</p>
                    <p className="text-sm text-gray-500">Expires {userData.paymentMethod.expiryDate}</p>
                  </div>
                  <div className="ml-auto">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-primary bg-primary-light hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Add New Payment Method
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-2xl leading-6 font-bold text-gray-900">Dabbzo Dashboard</h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Add Special Request
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">Select a tab</label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="overview">Overview</option>
                <option value="orders">Orders</option>
                <option value="profile">Profile</option>
                <option value="payment">Payment</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`${activeTab === 'orders' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Orders
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`${activeTab === 'profile' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={`${activeTab === 'payment' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Payment
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;