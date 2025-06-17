import {Check, ClipboardList, SquareCheck} from 'lucide-react'
import { Card, CardHeader, CardContent} from "../components/ui/card"; 
import ServicesCards from '../components/ServicesCards';

export default function Services() {
  const reasons = [
    {
      heading: "Engineer-Tested",
      paragraph: "B.S.E.E/Ph.D leader who speaks tech executive language",
      iconColor: "bg-teal-500"
    },
    {
      heading: "Fortune 500 Proven",
      paragraph: "Used by IBM, Coca Cola and other leading organizations",
      iconColor: "bg-teal-600"
    },
    {
      heading: "Metrics-Driven",
      paragraph: "70% promotion rate for coached leaders",
      iconColor: "bg-teal-400"
    }
  ]
  
  return(
    <main className="w-screen bg-gradient-to-b from-white to-teal-50">
      {/* Hero Section */}
      <section className="w-full pt-36 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-6xl font-bold text-teal-800 mb-4">Services</h1>
          <p className="text-center text-xl text-teal-600 max-w-2xl mx-auto">
            Leadership Solutions For Tech Executives
          </p>
          
          {/* Cards Section */}
          <div className="mt-16">
            <ServicesCards/>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-teal-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-2">
            Why Choose James
          </h2>
          <p className="text-center text-teal-600 mb-12 max-w-2xl mx-auto">
            Proven expertise for executive leadership development
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {reasons.map((reason, index) => (
              <Card 
                 initial={{ scale: 0.65}}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6,delay:0.5}}
              viewport={{ once: true }}
                key={index} 
                className="w-full md:w-72 flex flex-col items-center p-6 
                bg-white border-teal-200 hover:border-teal-400 border-2 
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`${reason.iconColor} p-3 rounded-full mb-4 text-white`}>
                  <SquareCheck className="w-6 h-6" />
                </div>
                <CardHeader className="text-center p-0">
                  <h4 className="font-bold text-xl text-teal-700">{reason.heading}</h4>
                </CardHeader>
                <CardContent className="text-center p-0 mt-2 text-teal-600">
                  <p>{reason.paragraph}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}