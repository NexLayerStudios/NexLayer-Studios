export default function AboutPage() {
  return (
    <section id="about">
      <div className="flex justify-center items-center min-h-[60vh] py-10 px-2">
        <div
          className="w-full max-w-3xl bg-gradient-to-br from-[#221d36] via-[#1e1831] to-[#18152b] rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-10 border-t-2 border-purple-900"
          style={{ boxShadow: "0 4px 24px 0 rgba(170, 72, 255, 0.65), 0 1.5px 4px rgba(60, 72, 255, 0.27)" }}
        >
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="relative z-10">
              <div className="headshot-tighter shadow-2xl" style={{ boxShadow: "0 6px 48px rgba(170, 72, 255, 0.33)" }}>
                <div className="w-full h-full flex items-center justify-center text-5xl text-purple-300">
                  <i className="fas fa-user-circle"></i>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div className="text-xl font-bold text-white">Jalen Stanberry</div>
              <div className="text-sm text-purple-300 font-medium">
                Computer Science Student
                <br />
                Georgia State University
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="text-3xl font-bold gradient-text mb-2 text-center md:text-left">About Me</div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mb-4 mx-auto md:mx-0"></div>
            <div className="text-gray-300 text-lg max-w-2xl text-center md:text-left">
              Hello! I'm Jalen Stanberry, a passionate computer science student at Georgia State University. My
              expertise is in bridging businesses with the latest AI agent technologies and developing web experiences
              that are modern, functional, and striking.
              <br />
              <br />
              With a persistent curiosity for emerging tech and practical digital solutions, I help companies like yours
              take their customer experience, workflow, and online presence to the next level—one innovative layer at a
              time.
              <br />
              <br />
              Let's create your future-forward web and AI experience together!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
