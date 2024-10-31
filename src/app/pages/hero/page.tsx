import Link from "next/link";
import Image from "next/image";
import "@/app/style/hero.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="home-section">
      <div className="home-img">
        <Image src="/girl1.png" alt="girl" width={600} height={600}></Image>
      </div>
      <div className="home-content">
        <h1>
          Hi, It&apos;s <span>Falak</span>
        </h1>
        <h3 className="text-animation">
          I&apos;m a <span></span>
        </h3>
        <p>
          Build, Create, Innovate. As a web developer, I craft dynamic digital
          experiences that inspire and engage. Explore my portfolio to see how I
          bring ideas to life with code.
        </p>
        <div className="social-icons">
          <Link
            href="https://linkedin.com/in/falak-naaz-447371262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://github.com/FALAK92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </Link>
          <Link href="#">
            <AiFillInstagram />
          </Link>
          <Link href="#">
            <AiFillFacebook />
          </Link>
        </div>
        <Link href="#" className="btn">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
