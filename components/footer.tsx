import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full text-black mt-0 mb-0">
      {/* Main Footer Section */}
      <div className="bg-white-100 w-full">
        <div
          className="max-w-7xl mx-auto px-4 py-12
                     grid grid-cols-2 gap-x-4 gap-y-8
                     md:flex md:gap-16 md:overflow-x-auto"
        >
          {/* Column 1 - Quicklinks */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold mb-4">Quicklinks</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["AICTE", "https://vignaniit.edu.in/aicte/EOA%20Report%202025-2026%20(1).pdf"],
                ["JNTU", "https://vignaniit.edu.in/jntuk/JNTUGV%20Affiliation_21.03.2023.pdf"],
                ["ARIIA", "https://vignaniit.edu.in/iqac/rankings/C-17965_certificateold_-DCF%20(13).pdf"],
                ["AISHE", "https://vignaniit.edu.in/aria/Certificate%20ARI-C-17965_2021.pdf"],
                ["INAAC", "/about/Accreditation"],
                // ["NBA", "/nba"],
                // ["NIRF", "/nirf"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-linkedin transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                // ["AICTE", "/aicte"],
                // ["JNTU", "/jntu"],
                // ["ARIIA", "/ariia"],
                // ["AISHE", "/aishe"],
                // ["INAAC", "/inaac"],
                ["NBA", "https://vignaniit.edu.in/NBA%202024-2026.pdf"],
                ["NIRF", "/about/Accreditation"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-linkedin transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Column 2 - Alumni + Complaint */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold mb-4">Alumni</h3>
            <ul className="space-y-2 text-sm text-black/90 mb-6">
              {[
                ["Alumni", "https://alumni.vignaniit.edu.in/"],
                ["V-Alumni", "https://alumni.vignaniit.edu.in/"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-linkedin transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">Complaint</h4>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["V-Grievances", "/v-grievances"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-linkedin transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3a - Screen Reader Access */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold mb-4">Screen Reader Access</h3>
            <ul className="space-y-2 text-sm text-black/90">
              {[
                ["NAD", "https://nad.gov.in/"],
                ["RTI", "/rti"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:underline hover:text-linkedin transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3b - Contact Address */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold mb-4">Contact Address</h3>
            <p className="text-sm text-black/80 mb-2">
              Beside AP Secretariat
              <br />
              Amaravathi – 522241, Andhra Pradesh
            </p>
            <Link
              href="/directions"
              className="text-sm text-linkedin hover:underline flex items-center mt-2"
            >
              How to Reach ↗
            </Link>
          </div>

          {/* Column 4 - Map Location (spans two columns on mobile) */}
          <div className="col-span-2 md:col-auto min-w-0">
            <h4 className="text-lg font-semibold mb-4">Map Location</h4>
            <div className="mt-2 rounded-lg overflow-hidden w-full h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.095670486325!2d83.1633426!3d17.7104743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cb428b8087%3A0xaa3e198c43836a65!2sVignan's%20Institute%20Of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1722050754825!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-linkedin w-full text-white text-sm mt-0 mb-0">
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
              <Link
                key={href}
                href={href}
                className="hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Uncomment if you want social buttons */}
          {/* <div className="flex space-x-3">
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
          </div> */}
        </div>

        <div className="text-center border-t border-white/20 py-4 text-white/60 text-xs">
          <p>© {new Date().getFullYear()} VIIT . All rights reserved.</p>
          <p className="italic mt-1">Crafted VIIT</p>
        </div>
      </div>
    </footer>
  )
}
