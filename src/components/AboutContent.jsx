import AuthorImg from "@/assets/img/author.png";

const AboutContent = () => {
  return (
    <div className="about__wrapper">
      <div className="about__wrapper-left">
        <p>
          Hello! I&apos;m Fisayo, a mechanical engineer turned software
          developer. I build scalable, user-centric solutions that blend
          engineering precision with cloud innovation. My journey into
          technology began in earnest in 2022 when I led FM Technologies
          deployment at Max-Migold. Starting with HTML, CSS, and JavaScript for
          a simple facilities management dashboard, I progressed to deploying an
          open-source Moodle LMS on shared hosting, which I&apos;ve since
          migrated to AWS as my cloud engineering skills advanced.
        </p>
        <p>
          Today, I&apos;m driving internal software development at Max-Migold
          and Star University, while also building JoyMatcher, a professional
          matchmaking platform. My focus has expanded beyond facilities
          management to encompass the full software engineering lifecycle,
          leveraging DevOps practices to create robust, efficient solutions
          across various domains.
        </p>
        <p>
          This diverse experience allows me to approach problems with a unique
          perspective, combining practical industry knowledge with cutting-edge
          software development techniques to deliver innovative, impactful
          solutions.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="about__tech">
          <ul>
            <li>gsgsgs</li>
            <li>gsgsgs</li>
            <li>gsgsg</li>
            <li>gsgsg</li>
          </ul>
          <ul>
            <li>gsgsgs</li>
            <li>gsgsgs</li>
            <li>gsgsg</li>
            <li>gsgsg</li>
          </ul>
          <ul>
            <li>gsgsgs</li>
            <li>gsgsgs</li>
            <li>gsgsg</li>
            <li>gsgsg</li>
          </ul>
        </div>
      </div>
      <div className="about__wrapper-right">
        <div className="about__img-wrapper">
          <img src={AuthorImg} alt="Animashaun Fisayo portrait" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
