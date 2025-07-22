import Image from "next/image";
import { Briefcase, Zap, Star, Award, Building, TrendingUp } from "lucide-react";

export default function BluePlacementHighlightPage() {
  const primaryColor = "#005f9e";

  const stats = [
    {
      icon: <Star className="w-7 h-7 text-white/80" />,
      value: "2,807",
      label: "Super Dream Offers",
    },
    {
      icon: <Award className="w-7 h-7 text-white/80" />,
      value: "2,862",
      label: "Dream Offers",
    },
    {
      icon: <Zap className="w-7 h-7 text-white/80" />,
      value: "530",
      label: "Marquee Offers",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-white/80" />,
      value: "4,051",
      label: "Industry Internships",
    },
  ];

  const recruiters = [
    "Microsoft", "Google", "Amazon", "TCS", "Infosys", "Wipro", 
    "Accenture", "IBM", "Cognizant", "HCL", "Oracle", "Salesforce"
  ];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-4 py-16 text-white">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Placement Achievements 2025
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Celebrating the success of our students as they embark on their professional journeys with top global companies.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Left Column: Key Stats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-white" />
              <p className="text-4xl font-bold">₹1 Crore</p>
              <p className="text-blue-200 mt-1">Highest CTC</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Building className="w-10 h-10 mx-auto mb-3 text-white" />
              <p className="text-4xl font-bold">632</p>
              <p className="text-blue-200 mt-1">Companies Visited</p>
            </div>
             <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <Award className="w-10 h-10 mx-auto mb-3 text-white" />
              <p className="text-4xl font-bold">12,579</p>
              <p className="text-blue-200 mt-1">Overall Offers</p>
            </div>
          </div>

          {/* Right Column: Detailed Stats and Recruiters */}
          <div className="lg:col-span-3 bg-black/20 p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Detailed Offer Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 p-5 rounded-lg flex items-center space-x-4 border border-transparent hover:border-white/20 transition-all duration-300">
                  {stat.icon}
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-6">Our Valued Recruiters</h2>
            <div className="flex flex-wrap gap-3">
              {recruiters.map((company) => (
                <div key={company} className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
