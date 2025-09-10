import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      id: 'ride',
      title: 'Ride',
      description: 'Go anywhere with Uber. Request a ride, hop in, and go.',
      image: 'https://placehold.co/400x300?text=Modern+sedan+car+in+urban+setting+professional+automotive+photography',
      features: ['Affordable', 'Reliable', 'Safe'],
      ctaText: 'Get a ride',
      bgColor: 'bg-gray-50'
    },
    {
      id: 'drive',
      title: 'Drive',
      description: 'Make money driving on your schedule. Sign up to drive with Uber.',
      image: 'https://placehold.co/400x300?text=Professional+driver+in+car+smiling+confident+portrait',
      features: ['Flexible hours', 'Extra income', 'Be your own boss'],
      ctaText: 'Start driving',
      bgColor: 'bg-green-50'
    },
    {
      id: 'eat',
      title: 'Eat',
      description: 'Get your favorite food delivered fast. Order from local restaurants.',
      image: 'https://placehold.co/400x300?text=Delicious+restaurant+food+delivery+bag+fresh+meals',
      features: ['Fast delivery', 'Wide selection', 'Track your order'],
      ctaText: 'Order now',
      bgColor: 'bg-red-50'
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Create business travel solutions that work for everyone.',
      image: 'https://placehold.co/400x300?text=Business+professional+in+premium+car+corporate+travel',
      features: ['Expense management', 'Priority support', 'Flexible billing'],
      ctaText: 'Learn more',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services built for you
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re looking for a ride, food delivery, or business solutions, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card key={service.id} className={`${service.bgColor} border-0 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="300" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial" font-size="16">${service.title} Service</text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                    size="sm"
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            More ways to use Uber
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Uber Reserve</h4>
              <p className="text-sm text-gray-600">Reserve your ride up to 30 days in advance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Uber Connect</h4>
              <p className="text-sm text-gray-600">Send packages on-demand across town</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-2">Uber Health</h4>
              <p className="text-sm text-gray-600">Reliable rides to medical appointments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}