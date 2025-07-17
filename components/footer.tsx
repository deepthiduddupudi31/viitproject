import { Button } from "../components/ui/button"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/careers" className="hover:text-red-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/hostels" className="hover:text-red-800">
                  Hostels
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-red-800">
                  Transport
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-red-800">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-800">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/equal-opportunity" className="hover:text-red-800">
                  Equal Opportunity Cell
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-red-800">
                  Facilities for differently-abled
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-red-800 mt-6 mb-4">Research</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research/centers" className="hover:text-red-800">
                  Centers
                </Link>
              </li>
              <li>
                <Link href="/research/google-scholar" className="hover:text-red-800">
                  Google Scholar
                </Link>
              </li>
              <li>
                <Link href="/research/scopus" className="hover:text-red-800">
                  Scopus
                </Link>
              </li>
              <li>
                <Link href="/research/patents" className="hover:text-red-800">
                  Patents
                </Link>
              </li>
              <li>
                <Link href="/research/projects" className="hover:text-red-800">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research/publications" className="hover:text-red-800">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* VIT Connect & Academics */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4">VIT Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vtop-login" className="hover:text-red-800">
                  V-TOP Login
                </Link>
              </li>
              <li>
                <Link href="/mail" className="hover:text-red-800">
                  Mail
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-red-800">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-800">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/vitie-bot" className="hover:text-red-800">
                  Vitie-Bot
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-red-800 mt-6 mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics/schools" className="hover:text-red-800">
                  All Schools
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-red-800">
                  Programs Offered
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="hover:text-red-800">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/academics/leadership" className="hover:text-red-800">
                  Academic Leadership
                </Link>
              </li>
              <li>
                <Link href="/academics/application" className="hover:text-red-800">
                  Application Process
                </Link>
              </li>
              <li>
                <Link href="/academics/fee-structure" className="hover:text-red-800">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link href="/academics/scholarship" className="hover:text-red-800">
                  Scholarship
                </Link>
              </li>
              <li>
                <Link href="/academics/iqac" className="hover:text-red-800">
                  IQAC
                </Link>
              </li>
            </ul>
          </div>

          {/* Ranking & Information */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4">Ranking & Accreditation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ranking/raac" className="hover:text-red-800">
                  RAAC
                </Link>
              </li>
              <li>
                <Link href="/ranking/naac" className="hover:text-red-800">
                  NAAC
                </Link>
              </li>
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

          {/* Location & Map */}
          <div>
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

          <div className="border-t border-red-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-red-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-red-200">
                Terms of Use
              </Link>
              <Link href="/copyright" className="hover:text-red-200">
                Copyright
              </Link>
              <Link href="/trademarks" className="hover:text-red-200">
                Trademarks
              </Link>
              <Link href="/non-discrimination" className="hover:text-red-200">
                Non-Discrimination
              </Link>
              <Link href="/accessibility" className="hover:text-red-200">
                Accessibility
              </Link>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200 p-1">
                <span className="sr-only">Instagram</span>📷
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200 p-1">
                <span className="sr-only">LinkedIn</span>💼
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200 p-1">
                <span className="sr-only">Facebook</span>📘
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200 p-1">
                <span className="sr-only">YouTube</span>📺
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200 p-1">
                <span className="sr-only">X (Twitter)</span>
                ✖️
              </Button>
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
