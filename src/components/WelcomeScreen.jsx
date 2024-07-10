const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <svg className="welcome-screen__hexagon" viewBox="0 0 100 100">
        <path
          className="welcome-screen__hexagon-path"
          d="M50 5 L11 27.5 L11 72.5 L50 95 L89 72.5 L89 27.5 Z"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="welcome-screen__letter"
        >
          FM
        </text>
      </svg>
    </div>
  );
};

export default WelcomeScreen;
