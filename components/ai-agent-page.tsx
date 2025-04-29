export default function AIAgentPage() {
  return (
    <section id="aiagent">
      <div className="flex flex-col md:flex-row items-start mt-8 mb-12">
        <div className="flex-shrink-0 mr-8">
          <div className="service-3d-shape floating-3d mb-4 mx-auto">
            <div className="service-cube flex items-center justify-center text-3xl">
              <i className="fas fa-robot text-white"></i>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-2">AI Agent Implementation</h2>
          <div className="text-lg text-gray-300 mb-3">
            Unlock efficiencies, automate operations, and create engaging customer experiences with custom{" "}
            <b>AI agent solutions</b>!
          </div>
          <ul className="list-disc ml-6 text-base text-gray-300 mb-2">
            <li>
              <span className="text-purple-300 font-semibold">Tailored AI Chatbots:</span> Advanced chat interfaces
              trained for your business or service niche.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">Business Workflow Automation:</span> Automate tasks,
              customer inquiries, bookings, and support.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">AI-enabled Forms & Data Collection:</span> Create smarter,
              context-aware data flows and analytics dashboards.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">API & 3rd-Party Automation:</span> Seamlessly connect APIs
              and services to scale your workflow with intelligence.
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-700 to-pink-600 shadow hover:scale-105 transform-gpu transition"
              style={{ boxShadow: "0 4px 24px 0 rgba(170, 72, 255, 0.4), 0 1.5px 4px rgba(60, 72, 255, 0.27)" }}
            >
              Start an AI Project
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 mb-2">
        <span className="text-gray-300 text-base md:text-lg font-semibold">
          Ready to build an AI agent custom-fit for your unique business needs?{" "}
          <a href="#contact" className="text-purple-300 underline hover:text-pink-500">
            Contact Jalen today!
          </a>
        </span>
      </div>
      <section className="w-full py-10 bg-[#201b34] rounded-2xl shadow-lg mb-10">
        <h3 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-8">
          How AI Agents Transform Your Business
        </h3>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">
              <i className="fas fa-bolt text-yellow-300"></i>
            </div>
            <div className="font-semibold text-lg mb-1 text-white">24/7 Automated Support</div>
            <div className="text-gray-400 text-sm">For clients and staff</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">🤖</div>
            <div className="font-semibold text-lg mb-1 text-white">Conversational Interfaces</div>
            <div className="text-gray-400 text-sm">That feel natural</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">
              <i className="fas fa-chart-line text-green-400"></i>
            </div>
            <div className="font-semibold text-lg mb-1 text-white">Actionable Insights</div>
            <div className="text-gray-400 text-sm">From every interaction</div>
          </div>
        </div>
      </section>
    </section>
  )
}
