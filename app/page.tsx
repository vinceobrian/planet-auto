import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Book cars in minutes — fair, fast & flexible.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Kenya-wide coverage (Nairobi, Mombasa, Kisumu & beyond). Clear pricing, top-rated hosts, and 24/7 support. No surprises.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="bg-white rounded-lg shadow-md px-6 py-4">
            <strong>4.9★</strong> avg rating
          </div>
          <div className="bg-white rounded-lg shadow-md px-6 py-4">
            <strong>5000+</strong> successful trips
          </div>
          <div className="bg-white rounded-lg shadow-md px-6 py-4">
            <strong>KES & USD</strong> payments
          </div>
        </div>
        
        <Link 
          href="/cars"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
        >
          Explore Cars
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get started in 4 steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Create an account", desc: "Verify your ID once. You're set for all future bookings." },
              { step: 2, title: "Tell us what you need", desc: "Dates, location, and must-have features. We'll show the best fits." },
              { step: 3, title: "Pick & pay securely", desc: "M-Pesa, Visa/Mastercard. Transparent pricing, no hidden extras." },
              { step: 4, title: "Meet, inspect, drive", desc: "Free delivery in select areas. 24/7 roadside assistance." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}