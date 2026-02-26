'use client'

import React, { useState } from 'react'

interface Question {
  q: string
  a: string | React.ReactNode
}

interface FAQSectionProps {
  title: string
  questions: Question[]
}

export default function FAQSection({ title, questions }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-2xl font-title font-semibold mb-6 text-indigo">{title}</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-2 border-indigo rounded-lg overflow-hidden hover:border-bubblegum transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 bg-black hover:bg-indigo/10 transition-colors flex justify-between items-center"
            >
              <span className="font-title font-semibold text-white pr-4">{item.q}</span>
              <svg
                className={`w-5 h-5 text-bubblegum flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-black text-white/80 leading-relaxed border-t-2 border-indigo">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
