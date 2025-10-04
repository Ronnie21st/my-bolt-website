import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a typical landscaping project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple patio installation might take 1-2 weeks, while a complete outdoor transformation with pool, kitchen, and extensive landscaping can take 2-3 months. We provide detailed timelines during the design phase and keep you informed throughout the process.',
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer complimentary initial consultations where we visit your property, discuss your vision, and provide preliminary ideas. This no-obligation meeting helps us understand your needs and allows you to get to know our team and approach.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve the Pacific Northwest, including Portland, Seattle, Vancouver, and surrounding areas within a 50-mile radius. Contact us to confirm service availability in your specific location.',
    },
    {
      question: 'Do you handle permits and regulations?',
      answer: 'Absolutely. We handle all necessary permits, inspections, and ensure compliance with local building codes and HOA requirements. Our experience navigating these processes ensures your project proceeds smoothly without unexpected delays.',
    },
    {
      question: 'What is your warranty and guarantee policy?',
      answer: 'We stand behind our work with comprehensive warranties. Materials come with manufacturer warranties, and we provide a 2-year workmanship guarantee on all installations. We also offer ongoing maintenance plans to keep your outdoor space in pristine condition.',
    },
    {
      question: 'Can you work with my existing landscape?',
      answer: 'Yes! We specialize in both new installations and renovations of existing landscapes. We can integrate new features with your current design, relocate plants, or completely reimagine your outdoor space while preserving elements you love.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-forest-700">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sand-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-sand-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-forest-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-forest-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-sand-200">
                    <p className="text-forest-700 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-forest-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex px-8 py-4 bg-forest-600 text-white rounded-full font-semibold hover:bg-forest-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
