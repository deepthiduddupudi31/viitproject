import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full text-black">
      {/* Light Red Section (Main Footer) */}
      <div className="bg-white-100 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
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
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
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
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VIT Connect & Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VIIT Connect</h3>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["V-TOP Login", "/vtop-login"],
                ["Mail", "/mail"],
                ["Alumni", "/alumni"],
                ["Contact Us", "/contact"],
                ["Vitie-Bot", "/vitie-bot"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
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
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
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
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
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
                  <Link href={href} className="hover:underline hover:text-linkedin transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VIIT University</h3>
            <p className="text-sm text-black/80 mb-2">
              Beside AP Secretariat<br />
              Amaravathi – 522241, Andhra Pradesh
            </p>
            <Link href="/directions" className="text-sm text-linkedin hover:underline flex items-center mt-2">
              How to Reach ↗
            </Link>

            <div className="mt-6 bg-green-100 rounded-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-linkedin rounded-full mx-auto mb-2"></div>
                <p className="text-xs text-gray-600">View larger map</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Red Section (Bottom Footer) */}
      <div className="bg-linkedin w-full text-white text-sm">
        <div className="border-t border-white/20 px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-linkedin w-10 h-10 rounded-full flex items-center justify-center font-bold">
              VIIT
            </div>
            <div>
              <p className="font-bold">VIIT University</p>
              <p className="text-xs italic">Apply Knowledge. Improve Life!™</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-white/80">
            {[
              ["VIIT Home", "/"],
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

        <div className="border-t border-white/20 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
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

        <div className="text-center border-t border-white/20 py-4 text-white/60 text-xs">
          <p>© {new Date().getFullYear()} VIIT University. All rights reserved.</p>
          <p className="italic mt-1">Crafted with ❤️ by VIIT University</p>
        </div>
      </div>
    </footer>
  )
}