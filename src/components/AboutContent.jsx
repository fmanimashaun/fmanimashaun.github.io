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
          deployment at{" "}
          <a href="#" target="_blank">
            Max-Migold
          </a>
          . Starting with HTML, CSS, and JavaScript for a simple facilities
          management dashboard, I progressed to deploying an open-source Moodle
          LMS on shared hosting, which I&apos;ve since migrated to AWS as my
          cloud engineering skills advanced.
        </p>
        <p>
          Today, I&apos;m driving internal software development at{" "}
          <a href="#" target="_blank">
            Max-Migold
          </a>{" "}
          ,while also building{" "}
          <a href="#" target="_blank">
            JoyMatcher
          </a>
          , a professional matchmaking platform. My focus has expanded beyond
          facilities management to encompass the full software engineering
          lifecycle, leveraging DevOps practices to create robust, efficient
          solutions across various domains.
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
            <li>JavaScript/Typescript</li>
            <li>React/React Native</li>
            <li>React Bootstrap</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
            <li>React Testing Library</li>
            <li>Node (Express.js)</li>
          </ul>

          <ul>
            <li>Ruby on Rails</li>
            <li>RSpec</li>
            <li>SASS</li>
            <li>Tailwind CSS</li>
            <li>Webpack/Vite</li>
            <li>Jest</li>
            <li>ESLint</li>
          </ul>

          <ul>
            <li>Rubocop</li>
            <li>Stylelint</li>
            <li>Git/GitHub</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>AWS/GCP</li>
            <li>Figma</li>
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
