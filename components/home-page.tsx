"use client"
import { useInView } from "react-intersection-observer"

export default function HomePage() {
  // Create refs for animation sections
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: reviewsRef, inView: reviewsInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: processRef, inView: processInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="home">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className={`w-full min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#272144] to-[#18152b] py-36 px-6 transition-opacity duration-1000 ${heroInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="hero-animated-text mb-4">Unlock the Next Layer</h1>
        <h2 className="hero-animated-text mb-10">
          of <span className="gradient-text">AI & Web Innovation</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-12">
          Elevate your business' digital presence with <b>NexLayer Studios</b> — Your partner in AI agent implementation
          and modern web design, led by tech-driven expertise.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="button-animated px-12 py-5 font-bold rounded-2xl text-white text-2xl hover:scale-105 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* REVIEWS/TESTIMONIALS SECTION */}
      <section
        ref={reviewsRef}
        className={`w-full py-24 bg-[#1e1831] transition-opacity duration-1000 ${reviewsInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-5xl font-bold gradient-text text-center mb-16">Client Highlights</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-14">
          <div className="bg-[#23213c] card-hover-glow rounded-2xl p-10 shadow-xl flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4 bg-gray-800 flex items-center justify-center">
              <i className="fas fa-user text-3xl text-gray-400"></i>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
            </div>
            <div className="text-gray-200 font-semibold mb-2 text-lg">Sarah T.</div>
            <div className="text-gray-400 text-center text-base">
              "Jalen made our website look incredible and the AI bot is a game changer!"
            </div>
          </div>
          <div className="bg-[#23213c] card-hover-glow rounded-2xl p-10 shadow-xl flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4 bg-gray-800 flex items-center justify-center">
              <i className="fas fa-user text-3xl text-gray-400"></i>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
            </div>
            <div className="text-gray-200 font-semibold mb-2 text-lg">Mike R.</div>
            <div className="text-gray-400 text-center text-base">
              "Fast, professional, and creative. Highly recommend NexLayer Studios!"
            </div>
          </div>
          <div className="bg-[#23213c] card-hover-glow rounded-2xl p-10 shadow-xl flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4 bg-gray-800 flex items-center justify-center">
              <i className="fas fa-user text-3xl text-gray-400"></i>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
            </div>
            <div className="text-gray-200 font-semibold mb-2 text-lg">David L.</div>
            <div className="text-gray-400 text-center text-base">
              "The process was smooth and the results exceeded our expectations."
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        ref={servicesRef}
        id="services-header"
        className={`w-full py-28 bg-[#18152b] transition-opacity duration-1000 ${servicesInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-5xl font-bold gradient-text text-center mb-16">Our Services</h2>
        <div id="services" className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16">
          <div
            className="service-card rounded-2xl p-12 flex flex-col items-center text-center cursor-pointer transition-all"
            onClick={() => (window.location.hash = "aiagent")}
          >
            <div className="service-3d-shape mb-6">
              <div className="service-cube flex items-center justify-center mx-auto">
                <i className="fas fa-robot text-4xl text-white"></i>
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text mb-3">AI Agent Implementation</div>
            <div className="text-xl text-gray-300 mb-6">
              Empower your business using advanced AI solutions uniquely designed for your workflow.
            </div>
            <a href="#aiagent" className="button-animated px-7 py-3 rounded-xl text-white font-semibold mt-2 text-lg">
              Learn More
            </a>
          </div>
          <div
            className="service-card rounded-2xl p-12 flex flex-col items-center text-center cursor-pointer transition-all"
            onClick={() => (window.location.hash = "webdesign")}
          >
            <div className="service-3d-shape mb-6">
              <div className="service-cube flex items-center justify-center mx-auto">
                <i className="fas fa-layer-group text-4xl text-white"></i>
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text mb-3">Web Design Consultation</div>
            <div className="text-xl text-gray-300 mb-6">
              Next-gen, responsive design to captivate and convert your online audience seamlessly.
            </div>
            <a href="#webdesign" className="button-animated px-7 py-3 rounded-xl text-white font-semibold mt-2 text-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS/METHODOLOGY SECTION */}
      <section
        ref={processRef}
        className={`w-full py-28 bg-[#1e1831] transition-opacity duration-1000 ${processInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-5xl font-bold gradient-text text-center mb-16">Our Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-14">
          <div className="bg-[#23213c] rounded-2xl p-10 flex flex-col items-center card-hover-glow">
            <div className="w-20 h-20 mb-4 flex items-center justify-center text-4xl text-purple-300">
              <i className="fas fa-comments"></i>
            </div>
            <div className="font-semibold text-2xl mb-2">Discovery Call</div>
            <div className="text-gray-400 text-lg text-center">Understand your business and pain points</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex flex-col items-center card-hover-glow">
            <div className="w-20 h-20 mb-4 flex items-center justify-center text-4xl text-blue-300">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <div className="font-semibold text-2xl mb-2">Design Strategy</div>
            <div className="text-gray-400 text-lg text-center">UX/UI mockups tailored to your brand</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex flex-col items-center card-hover-glow">
            <div className="w-20 h-20 mb-4 flex items-center justify-center text-4xl text-green-300">
              <i className="fas fa-code"></i>
            </div>
            <div className="font-semibold text-2xl mb-2">Build & Integrate</div>
            <div className="text-gray-400 text-lg text-center">Responsive design + AI functionality</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex flex-col items-center card-hover-glow">
            <div className="w-20 h-20 mb-4 flex items-center justify-center text-4xl text-pink-300">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="font-semibold text-2xl mb-2 whitespace-nowrap">Launch & Support</div>
            <div className="text-gray-400 text-lg text-center">Live deployment + post-launch support</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        ref={whyUsRef}
        className={`w-full py-28 bg-[#18152b] transition-opacity duration-1000 ${whyUsInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-5xl font-bold gradient-text text-center mb-16">Why NexLayer Studios?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
          <div className="bg-[#23213c] rounded-2xl p-10 flex items-center card-hover-glow">
            <span className="text-green-400 text-4xl mr-6">⚡</span>
            <div className="text-2xl text-white font-semibold">Lightning-fast delivery, no agency delays</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex items-center card-hover-glow">
            <span className="text-blue-400 text-4xl mr-6">🤖</span>
            <div className="text-2xl text-white font-semibold">Cutting-edge AI expertise for real business results</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex items-center card-hover-glow">
            <span className="text-yellow-400 text-4xl mr-6">🎯</span>
            <div className="text-2xl text-white font-semibold">
              100% satisfaction guarantee — I'm not happy until you are
            </div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex items-center card-hover-glow">
            <span className="text-pink-400 text-4xl mr-6">💡</span>
            <div className="text-2xl text-white font-semibold">Creative, modern design that stands out</div>
          </div>
          <div className="bg-[#23213c] rounded-2xl p-10 flex items-center card-hover-glow md:col-span-2">
            <span className="text-purple-400 text-4xl mr-6">🤝</span>
            <div className="text-2xl text-white font-semibold">Personal, responsive support from start to finish</div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        ref={faqRef}
        className={`w-full py-24 bg-[#1e1831] transition-opacity duration-1000 ${faqInView ? "opacity-100" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-5xl font-bold gradient-text text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-700">
          <div className="mb-8 bg-[#23213c] rounded-2xl shadow-xl overflow-hidden">
            <div
              tabIndex={0}
              className="w-full text-left px-8 py-6 font-semibold text-gray-200 cursor-pointer text-xl hover:text-purple-300 focus:text-purple-300 transition-colors"
            >
              Q: How long does a typical project take?
            </div>
            <div className="px-8 pb-6 text-gray-400 text-lg">A: Usually 1–3 weeks depending on scope.</div>
          </div>
          <div className="mb-8 bg-[#23213c] rounded-2xl shadow-xl overflow-hidden">
            <div
              tabIndex={0}
              className="w-full text-left px-8 py-6 font-semibold text-gray-200 cursor-pointer text-xl hover:text-purple-300 focus:text-purple-300 transition-colors"
            >
              Q: Do you offer support after launch?
            </div>
            <div className="px-8 pb-6 text-gray-400 text-lg">
              A: Yes — I include 2 weeks of post-launch support for every project.
            </div>
          </div>
          <div className="mb-8 bg-[#23213c] rounded-2xl shadow-xl overflow-hidden">
            <div
              tabIndex={0}
              className="w-full text-left px-8 py-6 font-semibold text-gray-200 cursor-pointer text-xl hover:text-purple-300 focus:text-purple-300 transition-colors"
            >
              Q: Can you integrate AI into my existing website?
            </div>
            <div className="px-8 pb-6 text-gray-400 text-lg">A: I can add AI features to most modern sites.</div>
          </div>
        </div>
      </section>
    </section>
  )
}
