import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center px-6 md:px-12 py-16 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div>
            <h1 className="section-title leading-tight mb-2">
              <span className="block">MY</span>
              <span className="flex items-center gap-3">
                PORTFOLIO
                <span className="section-title-line" />
              </span>
            </h1>
            <div className="mt-6 mb-2">
              <h2 className="text-2xl font-bold text-foreground">Venzon, Mathew Jeremy M</h2>
              <p className="text-base text-muted-foreground mt-1">Web Developer | UI Designer</p>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Turning Ideas Into Interactive Reality.</p>

            <Link to="/contact" className="hire-btn">
              Hire Me
            </Link>
          </div>

          {/* Right - Premium Isometric 3D Orange UI Design */}
          <div className="w-full aspect-[4/3] flex items-center justify-center">
            <svg
              viewBox="0 0 520 420"
              className="w-full h-full max-w-md"
              style={{ filter: "drop-shadow(0 16px 40px rgba(249, 115, 22, 0.25))" }}
            >
              <defs>
                <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fef3e2", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#fdedd4", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fff9f0", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#fff7ed", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Main Central Phone - Highest Quality */}
              <g filter="url(#shadow)">
                {/* Phone body with gradient */}
                <rect x="135" y="95" width="230" height="295" rx="24" fill="url(#phoneGrad)" stroke="#f97316" strokeWidth="2.5" />
                {/* Phone notch area */}
                <rect x="185" y="100" width="130" height="22" rx="12" fill="#f0ede7" stroke="#f97316" strokeWidth="1" opacity="0.8" />
                {/* Phone screen */}
                <rect x="155" y="130" width="190" height="250" rx="14" fill="url(#screenGrad)" stroke="#fb923c" strokeWidth="1.5" opacity="0.6" />
                {/* Screen UI Elements */}
                <circle cx="250" cy="165" r="24" fill="#f97316" opacity="0.25" />
                <rect x="170" y="210" width="160" height="10" rx="5" fill="#f97316" opacity="0.4" />
                <rect x="170" y="235" width="130" height="7" rx="3.5" fill="#fb923c" opacity="0.3" />
                <rect x="170" y="255" width="155" height="7" rx="3.5" fill="#f97316" opacity="0.25" />
                <rect x="170" y="275" width="100" height="6" rx="3" fill="#fbaf17" opacity="0.2" />
              </g>

              {/* Left Phone - Enhanced Depth */}
              <g transform="translate(-95, 95)" filter="url(#shadow)" opacity="0.8">
                <rect x="135" y="95" width="220" height="270" rx="20" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                <rect x="155" y="120" width="180" height="220" rx="12" fill="#fffbf5" />
                <circle cx="245" cy="155" r="18" fill="#fb923c" opacity="0.2" />
                <rect x="170" y="195" width="150" height="8" rx="4" fill="#f97316" opacity="0.15" />
              </g>

              {/* Right Phone - Enhanced Depth */}
              <g transform="translate(110, 95)" filter="url(#shadow)" opacity="0.8">
                <rect x="135" y="95" width="220" height="270" rx="20" fill="#fff9f5" stroke="#fbaf17" strokeWidth="2" />
                <rect x="155" y="120" width="180" height="220" rx="12" fill="#fffbf5" />
                <circle cx="245" cy="155" r="18" fill="#fbaf17" opacity="0.22" />
                <rect x="170" y="195" width="150" height="8" rx="4" fill="#fbaf17" opacity="0.15" />
              </g>

              {/* Premium Floating Icon Elements */}
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Top Left Badge */}
                <g filter="url(#shadow)">
                  <circle cx="95" cy="105" r="28" fill="#fff7ed" stroke="#f97316" strokeWidth="2.5" />
                  <circle cx="95" cy="105" r="22" fill="#f97316" opacity="0.12" />
                  <text x="95" y="115" textAnchor="middle" fontSize="22" fill="#f97316" fontWeight="700" opacity="0.8">UX</text>
                </g>

                {/* Top Right Badge */}
                <g filter="url(#shadow)">
                  <circle cx="430" cy="115" r="26" fill="#fffaf7" stroke="#fbaf17" strokeWidth="2.5" />
                  <circle cx="430" cy="115" r="20" fill="#fbaf17" opacity="0.14" />
                  <text x="430" y="124" textAnchor="middle" fontSize="20" fill="#f97316" fontWeight="700" opacity="0.85">UI</text>
                </g>

                {/* Bottom Left Badge */}
                <g filter="url(#shadow)">
                  <circle cx="88" cy="325" r="24" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                  <circle cx="88" cy="325" r="18" fill="#f97316" opacity="0.1" />
                  <circle cx="88" cy="325" r="9" fill="#f97316" opacity="0.6" />
                </g>

                {/* Bottom Right Badge */}
                <g filter="url(#shadow)">
                  <circle cx="448" cy="320" r="25" fill="#fffaf7" stroke="#fbaf17" strokeWidth="2" />
                  <circle cx="448" cy="320" r="19" fill="#fbaf17" opacity="0.12" />
                  <circle cx="448" cy="320" r="10" fill="#fbaf17" opacity="0.65" />
                </g>
              </g>

              {/* Premium Connection Lines */}
              <g stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="5,5" strokeLinecap="round" opacity="0.4">
                <line x1="123" y1="120" x2="185" y2="145" />
                <line x1="383" y1="128" x2="325" y2="155" />
                <line x1="112" y1="310" x2="185" y2="285" />
                <line x1="432" y1="290" x2="365" y2="270" />
              </g>

              {/* Connection point markers */}
              <g fill="#f97316" opacity="0.65">
                <circle cx="123" cy="120" r="3.5" />
                <circle cx="383" cy="128" r="3.5" />
                <circle cx="112" cy="310" r="3.5" />
                <circle cx="432" cy="290" r="3.5" />
              </g>

              {/* Premium Text Labels */}
              <text x="95" y="365" fontSize="12" fill="#f97316" fontWeight="600" opacity="0.5" textAnchor="middle">Text</text>
              <text x="430" y="368" fontSize="12" fill="#fbaf17" fontWeight="600" opacity="0.5" textAnchor="middle">Margin</text>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
