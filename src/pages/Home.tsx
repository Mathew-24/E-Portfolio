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
            <p className="text-sm text-muted-foreground mb-8">Tagline Here:</p>

            <Link to="/contact" className="hire-btn">
              Hire Me
            </Link>
          </div>

          {/* Right - Hero Image Placeholder */}
          <div className="placeholder-img w-full aspect-[4/3] border border-border">
            {/* Place your hero image here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="5" y="5" width="90" height="90" />
                  <line x1="5" y1="5" x2="95" y2="95" />
                  <line x1="95" y1="5" x2="5" y2="95" />
                </svg>
                <p className="text-xs">Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
