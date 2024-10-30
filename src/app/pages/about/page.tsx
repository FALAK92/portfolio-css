import Link from "next/link";
import "@/app/style/about.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="card">
        <Image
          className="pic"
          src={"/girl2.avif"}
          alt="mypic"
          width={"250"}
          height={"250"}
        ></Image>
        <h1>About me</h1>
        <p>
          "I am a dedicated teacher currently studying at GIAIC, driven by a
          strong passion for learning and career development. With a commitment
          to nurturing knowledge and expanding my skills, I seek to make a
          positive impact in my field and continuously grow both personally and
          professionally."
        </p>
      </div>
    </div>
  );
};

export default About;
