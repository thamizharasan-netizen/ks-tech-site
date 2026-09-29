import heroVideo from "../assets/hero-bg.mp4";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative text-white text-center px-6 overflow-hidden min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="hidden sm:block w-24 h-px bg-gray-600" />
          <span className="flex items-center gap-2 border border-gray-500 rounded-full px-4 py-1 text-sm bg-black/40">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Since 2016
          </span>
          <span className="hidden sm:block w-24 h-px bg-gray-600" />
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Building a Smarter Tomorrow
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          We build scalable, AI-driven technologies that solve real-world
          challenges, delivering proven innovation with measurable impact and
          global potential.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Link
  to="/investors"
  className="flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-medium px-6 py-3 rounded-[14px]"
>
  Invest in the Future
  <ArrowRight size={18} />
</Link>
  <Link
    to="/products"
    className="bg-white hover:bg-gray-100 text-purple-900 font-medium px-6 py-3 rounded-[14px] inline-block"
  >
    Explore Our Product
  </Link>
</div>
      </div>
    </section>
  );
}

export default Hero;