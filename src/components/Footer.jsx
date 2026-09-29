import logo from "../assets/logo.png";
import instagramIcon from "../assets/instagram-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import whatsappIcon from "../assets/whatsapp-icon.png";
import locationIcon from "../assets/location-icon.png";
import callIcon from "../assets/call-icon.png";
import emailIcon from "../assets/email-icon.png";

function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white px-[80px] py-[64px]"
      style={{ backgroundColor: "#471556" }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "317px",
          height: "309px",
          backgroundColor: "#872FA1",
          filter: "blur(80px)",
          top: "-60px",
          left: "20px",
        }}
      />

      <div className="relative grid md:grid-cols-4 gap-10 max-w-6xl mx-auto pb-10 border-b border-white/20">
        {/* Logo + description */}
        <div>
          <img src={logo} alt="KS Smart Technologies" className="h-8 w-auto mb-4" />
          <p className="text-sm text-purple-200 mb-1">
            Formerly known as{" "}
            <span className="font-semibold text-white">
              Soma Papers &amp; Industries Limited
            </span>
          </p>
          <p className="text-sm text-purple-200 mb-4">
            Excellence decisively nay man yet impression for contrasted
            remarkably. There spoke happy for you are out. Fertile how old
            address did showing.
          </p>
          <p className="text-sm font-semibold mb-2">Contacts:</p>
          <div className="flex gap-[8px]">
            <a
              href="#"
              className="rounded-full bg-white/10 flex items-center justify-center"
              style={{ width: "44px", height: "44px", padding: "8px" }}
            >
              <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 flex items-center justify-center"
              style={{ width: "44px", height: "44px", padding: "8px" }}
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 flex items-center justify-center"
              style={{ width: "44px", height: "44px", padding: "8px" }}
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm text-purple-200">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Product</li>
            <li>Our Projects</li>
            <li>Our People</li>
            <li>Case Study</li>
            <li>Investors</li>
            <li>Contact US</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal Information</h3>
          <ul className="space-y-2 text-sm text-purple-200">
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <div className="flex gap-2 mb-4">
            <img src={locationIcon} alt="" className="w-4 h-4 mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold mb-1">
                Registered Office Address
              </p>
              <p className="text-sm text-purple-200">
                S No.18, 3rd Floor, B Block, Win Win Hub, JNTU Hi Tech City
                main road, Madhapur, Khanamet, Rangareddy, Madhapur,
                Hyderabad, Shaikpet, Telangana, India, 500081.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <img src={callIcon} alt="" className="w-4 h-4" />
            <p className="text-sm text-purple-200">+91 72003 94611</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={emailIcon} alt="" className="w-4 h-4" />
            <p className="text-sm text-purple-200">hello@ksstech.co</p>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto flex justify-between text-xs text-purple-300 pt-6">
        <p>© Copyright 2026</p>
        <p>All Rights Reserved by KS Smart Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
