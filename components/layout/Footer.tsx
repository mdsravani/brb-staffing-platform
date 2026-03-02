export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            BRB Data InfoTech
          </h3>
          <p className="text-sm leading-relaxed">
            Enterprise IT staffing and direct H-1B sponsorship
            solutions across the United States.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>IT Staffing</li>
            <li>H-1B Sponsorship</li>
            <li>OPT / STEM</li>
            <li>Workforce Deployment</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Compliance</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact + Social */}
        {/* Contact + Social */}
        <div>
          <h4 className="text-white font-semibold mb-8 tracking-wide">
            Connect With Us
          </h4>

          <div className="space-y-4 text-sm text-gray-400">

            {/* Address */}
            <div>
              <p className="text-white/80 uppercase text-xs font-semibold mb-2 tracking-wider">
                Office
              </p>
              <p className="leading-relaxed">
                30 N Gould St, Suite R <br />
                Sheridan, WY 82801 <br />
                United States
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-white/80 uppercase text-xs font-semibold mb-2 tracking-wider">
                Email
              </p>
              <a
                href="mailto:hr@brbdatainfotech.com"
                className="hover:text-white transition"
              >
                hr@brbdatainfotech.com
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/80 uppercase text-xs font-semibold mb-3 tracking-wider">
                Social
              </p>

              <a
                href="https://www.linkedin.com/in/brb-data-infotech-a762183a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 transition text-gray-300 hover:text-white"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </div>
</div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BRB Data InfoTech. All rights reserved.
      </div>
    </footer>
  );
}