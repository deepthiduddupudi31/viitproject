import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-white via-white to-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["Careers", "/careers"],
                ["Hostels", "/hostels"],
                ["Transport", "/transport"],
                ["Policies", "/policies"],
                ["Gallery", "/gallery"],
                ["Equal Opportunity Cell", "/equal-opportunity"],
                ["Facilities for differently-abled", "/facilities"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Research</h4>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["Centers", "/research/centers"],
                ["Google Scholar", "/research/google-scholar"],
                ["Scopus", "/research/scopus"],
                ["Patents", "/research/patents"],
                ["Projects", "/research/projects"],
                ["Publications", "/research/publications"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VIT Connect & Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VIT Connect</h3>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["V-TOP Login", "/vtop-login"],
                ["Mail", "/mail"],
                ["Alumni", "/alumni"],
                ["Contact Us", "/contact"],
                ["Vitie-Bot", "/vitie-bot"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Academics</h4>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["All Schools", "/academics/schools"],
                ["Programs Offered", "/academics/programs"],
                ["Academic Calendar", "/academics/calendar"],
                ["Academic Leadership", "/academics/leadership"],
                ["Application Process", "/academics/application"],
                ["Fee Structure", "/academics/fee-structure"],
                ["Scholarship", "/academics/scholarship"],
                ["IQAC", "/academics/iqac"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rankings & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ranking & Accreditation</h3>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["RAAC", "/ranking/raac"],
                ["NAAC", "/ranking/naac"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["Public Self Disclosure", "/info/public-disclosure"],
                ["University Act", "/info/university-act"],
                ["Forms", "/info/forms"],
                ["Directory", "/info/directory"],
                ["Feedback", "/info/feedback"],
                ["Academic Bank of Credit (ABC)", "/info/abc"],
                ["Website Credits", "/info/website-credits"],
                ["e-Samadhan", "/info/e-samadhan"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold text-red-800 mt-6 mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/info/public-disclosure" className="hover:text-red-800">
                  Public Self Disclosure
                </Link>
              </li>
              <li>
                <Link href="/info/-act" className="hover:text-red-800">
                  Public Notice:  Act
                </Link>
              </li>
              <li>
                <Link href="/info/forms" className="hover:text-red-800">
                  Forms
                </Link>
              </li>
              <li>
                <Link href="/info/directory" className="hover:text-red-800">
                  Directory
                </Link>
              </li>
              <li>
                <Link href="/info/feedback" className="hover:text-red-800">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/info/abc" className="hover:text-red-800">
                  Academic Bank of Credit (ABC)
                </Link>
              </li>
              <li>
                <Link href="/info/website-credits" className="hover:text-red-800">
                  Website Credits
                </Link>
              </li>
              <li>
                <Link href="/info/e-samadhan" className="hover:text-red-800">
                  e-Samadhan
                </Link>
              </li>

            </ul>
          </div>

          {/* Location */}
          <div>

            <h3 className="text-lg font-semibold mb-4">VIT-AP University</h3>
            <p className="text-sm text-white/80 mb-2">
              Beside AP Secretariat<br />
              Amaravathi – 522241, Andhra Pradesh
            </p>
            <Link href="/directions" className="text-sm text-white hover:underline flex items-center mt-2">
              How to Reach ↗
            </Link>

            {/* Placeholder map */}
            <div className="mt-6 bg-black/10 rounded-lg p-4 flex flex-col items-center justify-center h-32 border border-black/20">
              <div className="w-8 h-8 bg-red-600 rounded-full mb-1"></div>
              <p className="text-xs">View Map</p>

            <h3 className="text-lg font-semibold text-red-800 mb-4">VIIT , Amaravathi</h3>
            <div className="text-sm text-gray-600 mb-4">
              <p>Beside AP Secretariat - 522241,</p>
              <p>Andhra Pradesh.</p>
            </div>
            <Link href="/directions" className="text-sm text-red-800 hover:underline flex items-center">
              HOW TO REACH VIIT <span className="ml-1">↗</span>
            </Link>

            {/* Map placeholder */}
            <div className="mt-4 bg-green-100 rounded-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-red-600 rounded-full mx-auto mb-2"></div>
                <p className="text-xs text-gray-600">VIIT </p>
                <p className="text-xs text-blue-600">View larger map</p>
              </div>

            </div>
          </div>
        </div>
</div>
        {/* Bottom Section */}
        <div className="w-full">
  {/* Light Red Section */}
  <div className="bg-red-800 border-t border-white/20 pt-8 text-sm w-full">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6">
      <div className="flex items-center space-x-4">
        <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          VIT
        </div>
        <div>
          <p className="font-bold text-white">VIT-AP University</p>
          <p className="text-xs italic text-white">Apply Knowledge. Improve Life!™</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center text-white/80">
        {[
          ["VIT-AP Home", "/"],
          ["Maps & Directions", "/maps"],
          ["Search", "/search"],
          ["Emergency Info", "/emergency"],
        ].map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white transition">
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>

        {/* Bottom Footer */}
        <div className="bg-red-800 text-white py-6 px-8 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-sm">VIT</span>
              </div>
              <div>
                <h4 className="font-bold">VIIT</h4>
                <p className="text-xs"></p>
                <p className="text-xs">Apply Knowledge. Improve Life!™</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <Link href="/" className="hover:text-red-200">
                VIIT Home
              </Link>
              <Link href="/maps" className="hover:text-red-200">
                Maps & Directions
              </Link>
              <Link href="/search" className="hover:text-red-200">
                Search VIIT
              </Link>
              <Link href="/emergency" className="hover:text-red-200">
                Emergency Info
              </Link>
            </div>
          </div>


  {/* Dark Red Section */}
  <div className="bg-red-800 w-full text-white text-xs">
    <div className="border-t border-white/20 mt-0 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
      <div className="flex flex-wrap gap-4 text-white/70 mb-4 md:mb-0">
        {[
          ["Privacy Policy", "/privacy"],
          ["Terms of Use", "/terms"],
          ["Copyright", "/copyright"],
          ["Trademarks", "/trademarks"],
          ["Non-Discrimination", "/non-discrimination"],
          ["Accessibility", "/accessibility"],
        ].map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white transition">
            {label}
          </Link>
        ))}
      </div>

      <div className="flex space-x-3">
        {["Instagram", "LinkedIn", "Facebook", "YouTube", "X"].map((name, i) => (
          <Button
            key={name}
            variant="ghost"
            size="icon"
            className="text-white hover:text-yellow-300 transition"
          >
            <span className="sr-only">{name}</span>
            {["📷", "💼", "📘", "📺", "✖️"][i]}
          </Button>
        ))}
      </div>
    </div>

    <div className="text-center mt-6 pt-4 border-t border-white/20 text-white/60">
      <p>© {new Date().getFullYear()} VIT-AP University. All rights reserved.</p>
      <p className="italic mt-1">Crafted with ❤️ by VIT-AP University</p>
    </div>
  </div>
</div>


          <div className="text-center mt-6 pt-6 border-t border-red-700">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p>Copyright © VIIT 2024. All rights reserved</p>
              <p className="italic mt-2 md:mt-0">Crafted with Passion at VIIT  by Website Team</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
