const WelcomeScreen = () => {
  return (
    <div className="welcome">
      <svg className="hexagon" viewBox="0 0 100 100">
        <path
          id="hexagon-path"
          d="M50 10 L10 30 L10 70 L50 90 L90 70 L90 30 Z"
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="letter">
          B
        </text>
      </svg>
    </div>
  );
};

export default WelcomeScreen;
