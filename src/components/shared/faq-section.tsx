"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faqs.indexOf(faq))}
                className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === faqs.indexOf(faq) ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === faqs.indexOf(faq) && (
                <div className="p-4 md:p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                  <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
