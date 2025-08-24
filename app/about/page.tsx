import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PlanetAuto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing car rental in Kenya with transparency, convenience, and exceptional service.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At PlanetAuto, we're on a mission to make car rental in Kenya simple, transparent, and affordable. 
            We connect car owners with trusted drivers, creating opportunities for both while providing exceptional 
            service and peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-700">Successful Trips</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Vehicles Available</div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, PlanetAuto emerged from a simple observation: car rental in Kenya was often 
            characterized by hidden fees, complicated processes, and limited options. We set out to change that.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small platform with just a few vehicles has grown into Kenya's most trusted 
            car rental marketplace. Our success is built on transparency, customer satisfaction, and 
            continuous innovation.
          </p>
          <p className="text-gray-700">
            Today, we serve customers across Nairobi, Mombasa, Kisumu, and beyond, helping Kenyans and 
            visitors alike discover the freedom of flexible mobility.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <span className="text-blue-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-700">No hidden fees, no surprises. Just clear pricing and honest service.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-700">Every vehicle on our platform undergoes rigorous quality checks.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <span className="text-purple-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">Car rental options for every budget and need across Kenya.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <span className="text-orange-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">Continually improving our platform to serve you better.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-gray-700 mb-6">
            PlanetAuto is powered by a diverse team of tech enthusiasts, automotive experts, and customer service 
            professionals who are passionate about transforming transportation in Kenya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Nairobi Headquarters</h3>
              <p className="text-gray-700">Our main office where our tech, operations, and customer service teams work together.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Mombasa Branch</h3>
              <p className="text-gray-700">Serving the coastal region with dedicated local support and vehicles.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience PlanetAuto?</h2>
          <Link 
            href="/cars"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Browse Our Cars
          </Link>
        </div>
      </div>
    </div>
  );
}