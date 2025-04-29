"use client"

import { useState } from "react"

export default function ChatWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <>
      {/* Floating Chat Widget Button */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <button
          aria-label="Open AI Agent Chat"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-700 to-pink-600 shadow-lg flex items-center justify-center hover:scale-105 transition-all border-2 border-white/10"
          style={{ boxShadow: "0 4px 24px rgba(170, 72, 255, 0.6)" }}
          onClick={openModal}
        >
          <i className="fas fa-robot text-2xl text-white"></i>
        </button>
        {/* Callout text with arrow */}
        <div className="fixed bottom-28 right-8 z-[9999] flex items-center">
          <div
            className="bg-gradient-to-br from-purple-700 to-pink-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg border border-purple-400 relative"
            style={{ fontSize: "1rem" }}
          >
            <span>Try our AI agent demo!</span>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <div
            className="relative w-full max-w-md md:max-w-lg bg-[#23213ce6] rounded-2xl shadow-2xl border-2 border-purple-700 p-0 md:p-6 mx-2 md:mx-0 mb-4 md:mb-0 transition-all duration-300"
            style={{
              minHeight: "340px",
              boxShadow: "0 4px 24px 0 rgba(170, 72, 255, 0.65), 0 1.5px 4px rgba(60, 72, 255, 0.27)",
              animation: "fadeIn 0.3s ease-out forwards",
            }}
          >
            <button
              aria-label="Close Chat"
              className="absolute top-3 right-3 text-gray-400 hover:text-pink-400 text-2xl font-bold focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="w-full h-64 flex items-center justify-center text-gray-400 italic opacity-70 p-6">
              [ Your AI Agent Embed Goes Here ]
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
