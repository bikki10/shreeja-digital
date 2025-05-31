/* eslint-disable no-unused-vars */
import logo from "/shreeja_logo.png";
import { footerText } from "../constants/footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import ButtonComponent from "../Ui/ButtonComponent";
import { motion } from "motion/react";

const date = new Date();
const year = date.getFullYear();

const services = [
  {
    label: "Web Design",
    href: "#footer",
  },
  {
    label: "Web Development",
    href: "#footer",
  },
  {
    label: "Mobile Apps",
    href: "#footer",
  },
  {
    label: "UI/UX Design",
    href: "#footer",
  },
  {
    label: "Digital Marketing",
    href: "#footer",
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-gray-50 pt-16 pb-8 px-4 md:px-6"
      aria-labelledby="footer-heading"
    >
      <div
        className="container max-w-[86rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-200"
        role="contentinfo"
      >
        <div>
          <a href="/" aria-label="Shreeja Digital Agency Home">
            <img
              loading="lazy"
              className="logo"
              src={logo}
              width={100}
              height={100}
              title="Shreeja Digital Agency"
              alt="Shreeja Digital Agency Logo"
            />
          </a>
          <div className="my-5 flex flex-col justify-center gap-4 md:pr-3">
            <p className="text-gray-600 flex flex-wrap">{footerText}</p>
            <span className="flex gap-3 text-2xl">
              <a
                title="Visit our Facebook Page"
                href="https://www.facebook.com/shreejadigitalagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
              >
                <FaFacebook className="text-blue-600" />
              </a>
              <a
                title="Visit our Instagram Page"
                href="https://www.instagram.com/shreejadigitalagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
              >
                <FaInstagram className="text-fuchsia-600" />
              </a>
              <a
                title="Visit our LinkedIn Page"
                href="https://www.linkedin.com/company/shreejadigitalagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
              >
                <FaLinkedin className="text-blue-600" />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="footer-heading" className="text-lg font-semibold">
            Services
          </h2>
          <ul className="text-gray-600 text-md flex flex-wrap gap-4 mt-3 md:pr-4">
            {services.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:text-indigo-500 transition-all ease-in-out duration-200"
                  href={item.href}
                  aria-label={`Learn more about ${item.label}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="mt-3">
            <span className="flex items-center gap-2">
              <GoMail />
              <a
                href="mailto:contact@shreejadigital.com"
                className="text-gray-600 hover:text-indigo-500 transition-all"
                aria-label="Send an email to contact@shreejadigital.com"
              >
                contact@shreejadigital.com
              </a>
            </span>
            <ButtonComponent
              href="#contact"
              className="btn__primary mt-3 w-full md:w-auto"
            >
              Get In Touch
            </ButtonComponent>
          </div>
        </div>
      </div>
      <motion.p
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className="text-[#6B7280] text-center pt-4 text-sm"
      >
        © {year} Shreeja Digital Agency. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
