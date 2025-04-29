"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("")
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    project: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.company || !formData.email || !formData.project || !formData.message) {
      setFormStatus("Please complete all required fields.")
      return
    }

    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus("Submitted! We'll respond within 24 hours.")

    // Reset form
    setFormData({
      company: "",
      email: "",
      project: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row items-center mt-8 mb-12">
        <div className="md:w-[50%] w-full pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="gradient-text text-3xl font-bold mb-2">Get in Touch</div>
          <div className="text-lg text-gray-200 mb-5">
            Companies, founders, teams & brands: use this form to start a conversation with NexLayer Studios. Please
            share your business goals, ideas, or the unique problem you're looking to solve!
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-[#23213c] px-8 py-6 rounded-2xl shadow-lg mb-4"
            style={{ boxShadow: "0 4px 18px rgba(60, 72, 255, 0.27)", borderRadius: "18px" }}
          >
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="company" className="block text-gray-300 font-medium mb-1">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 focus:border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-1">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 focus:border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-gray-300 font-medium mb-1">
                  How can we help?
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  required
                >
                  <option value="">Select focus area...</option>
                  <option>AI Agent Implementation</option>
                  <option>Web Design</option>
                  <option>Both</option>
                  <option>Other / Unsure</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-1">
                  Tell us about your goals, ideas or problems:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg px-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold text-lg hover:scale-105 hover:from-pink-600 hover:to-purple-700 transition-all"
                  style={{ boxShadow: "0 4px 24px 0 rgba(170, 72, 255, 0.4), 0 1.5px 4px rgba(60, 72, 255, 0.27)" }}
                >
                  Send Query
                </button>
              </div>
            </div>
            {formStatus && (
              <div
                className="mt-3 text-base font-semibold text-center"
                style={{ color: formStatus.includes("Please") ? "#FF3C7E" : "#AA48FF" }}
              >
                {formStatus}
              </div>
            )}
          </form>
          <div className="mt-4 text-xs text-gray-400 text-center">
            Or reach out directly:{" "}
            <a href="mailto:nexlayerstudio@gmail.com" className="text-purple-300 underline hover:text-pink-400">
              nexlayerstudio@gmail.com
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.linkedin.com/in/jalen-stanberry"
              className="text-purple-300 underline hover:text-pink-400"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
