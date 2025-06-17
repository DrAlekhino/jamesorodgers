import { useState, useEffect } from 'react';

import '../App.css'

import { Card,CardContent } from "../components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      jobTitle: "Tech Executive at Google",
      image: "../images/user2.jpg",
      testimonial: `James transformed our leadership team's effectiveness in just 3 months. His strategic approach to executive coaching helped us navigate complex organizational changes with confidence.`
    },
    {
      name: "Michael Chen",
      jobTitle: "Senior Director at Microsoft",
      image: "../images/user1.jpg",
      testimonial: `The most valuable coaching experience of my career. James's unique blend of technical insight and emotional intelligence helped me become a better leader and communicator.`
    },
    {
      name: "Daisy Rodriguez",
      jobTitle: "VP of Engineering at Amazon",
      image: "../images/user3.jpg",
      testimonial: `James's coaching helped me secure two promotions in 18 months. His frameworks for stakeholder management and strategic thinking are game-changers for tech leaders.`
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  return (
    <section aria-labelledby="testimonials-heading" className="mx-auto flex flex-col items-center">
      <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
      
      <div className="relative w-full overflow-hidde h-[300px]">
        <div className="relative ">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              aria-hidden={index !== currentIndex}
              className={`absolute inset-0 w-full transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? 'translate-x-0'
                  : direction === 'next'
                    ? index === (currentIndex + 1) % testimonials.length
                      ? 'translate-x-full'
                      : index === (currentIndex - 1 + testimonials.length) % testimonials.length
                        ? '-translate-x-full'
                        : 'translate-x-full'
                    : index === (currentIndex - 1 + testimonials.length) % testimonials.length
                      ? '-translate-x-full'
                      : 'translate-x-full'
              }`}
            >
              <Card className="max-w-md mx-auto p-2 rounded-xl! border-3 border-teal-400 bg-teal-50!">
                <CardContent className="text-center ">
                  <figure className="relative mb-0">
                    <img 
                      src={testimonial.image} 
                      alt={`Portrait of ${testimonial.name}`} 
                      width={80} 
                      height={80} 
                      className="rounded-full  border-teal-400 border-2 absolute -top-12 left-1/2 transform -translate-x-1/2" 
                    />
                    <figcaption className="sr-only">{testimonial.name}</figcaption>
                  </figure>
                
                  <h3 className="text-xl font-bold text-teal-400 pt-10">{testimonial.name}</h3>
                  <p className="text-gray-600 italic mb-4">{testimonial.jobTitle}</p>
                  <blockquote className="mt-4">
                    <p>{testimonial.testimonial}</p>
                  </blockquote>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
      
      <nav aria-label="Testimonial navigation">
        <ul className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <li key={index}>
              <button
                onClick={() => goToTestimonial(index)}
                aria-current={index === currentIndex ? 'true' : 'false'}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-teal-400' : 'bg-gray-300'
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}