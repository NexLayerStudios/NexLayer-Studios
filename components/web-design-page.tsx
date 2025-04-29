export default function WebDesignPage() {
  return (
    <section id="webdesign">
      <div className="flex flex-col md:flex-row items-start mt-8 mb-12">
        <div className="flex-shrink-0 mr-8">
          <div className="service-3d-shape floating-3d mb-4 mx-auto">
            <div className="service-cube flex items-center justify-center text-3xl bg-gradient-to-br from-blue-500 to-purple-700">
              <i className="fas fa-layer-group text-white"></i>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-2">Web Design Consultation</h2>
          <div className="text-lg text-gray-300 mb-3">
            Stand out and grow online with beautifully crafted web design that converts visitors into clients!
          </div>
          <ul className="list-disc ml-6 text-base text-gray-300 mb-2">
            <li>
              <span className="text-blue-300 font-semibold">Modern Responsive Design:</span> Sleek, fast, and fully
              mobile-friendly layouts built for 2024 and beyond.
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Brand-Driven Customization:</span> Websites tailored to your
              unique business personality and goals.
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Conversion & Engagement:</span> Strategic layouts,
              calls-to-action, and lead funnels.
            </li>
            <li>
              <span className="text-blue-300 font-semibold">End-to-End Implementation:</span> From concept to launch,
              hosting, optimization and future updates.
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow hover:scale-105 transform-gpu transition"
              style={{ boxShadow: "0 4px 24px 0 rgba(60, 72, 255, 0.4), 0 1.5px 4px rgba(170, 72, 255, 0.27)" }}
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
      {/* How Modern Web Design Grows Your Business: New Section */}
      <section className="w-full py-10 bg-[#201b34] rounded-2xl shadow-lg mb-10">
        <h3 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-8">
          How Modern Web Design Grows Your Business
        </h3>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">
              <i className="fas fa-paint-brush text-pink-400"></i>
            </div>
            <div className="font-semibold text-lg mb-1 text-white">First Impressions that Convert</div>
            <div className="text-gray-400 text-sm">Beautiful, on-brand, and memorable</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">
              <i className="fas fa-mobile-alt text-blue-400"></i>
            </div>
            <div className="font-semibold text-lg mb-1 text-white">Mobile-First, Always</div>
            <div className="text-gray-400 text-sm">Seamless experience on any device</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#23213c] rounded-xl card-hover-glow">
            <div className="text-4xl mb-3">
              <i className="fas fa-rocket text-green-400"></i>
            </div>
            <div className="font-semibold text-lg mb-1 text-white">SEO & Speed Optimized</div>
            <div className="text-gray-400 text-sm">Rank higher and load faster</div>
          </div>
        </div>
      </section>
    </section>
  )
}
