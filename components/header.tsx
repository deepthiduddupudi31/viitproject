import { Button } from "../components/ui/button"
import { Search, Menu } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-red-800 text-white">
      {/* Top Bar */}
      <div className="border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-red-800 text-xs font-bold">🏛️</span>
              </div>
              <span className="text-sm">CAMPUSES</span>
              <span className="text-xs">›</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link href="/careers" className="hover:text-red-200">
              Careers
            </Link>
            <Link href="/alumni" className="hover:text-red-200">
              Alumni
            </Link>
            <Link href="/advantages" className="hover:text-red-200">
              VIT-AP Advantages
            </Link>
            <Button variant="ghost" size="sm" className="text-white hover:text-red-200">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-red-200">
              360
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-800 font-bold text-sm">VIT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">VIT-AP</h1>
              <p className="text-xs text-red-200">UNIVERSITY</p>
              <p className="text-xs text-red-200">Apply Knowledge. Improve Life!™</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-red-200 transition-colors">
              About
            </Link>
            <Link href="/admissions" className="text-white hover:text-red-200 transition-colors">
              Admissions
            </Link>
            <Link href="/academics" className="text-white hover:text-red-200 transition-colors">
              Academics
            </Link>
            <Link href="/career-development" className="text-white hover:text-red-200 transition-colors">
              Career Development Center
            </Link>
            <Link href="/research" className="text-white hover:text-red-200 transition-colors">
              Research
            </Link>
            <Link href="/campus-life" className="text-white hover:text-red-200 transition-colors">
              Campus Life
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
