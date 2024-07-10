const Logo = () => {
  return (
    <div className="logo">
      <svg className="logo__hexagon" viewBox="0 0 100 100">
        <path
          className="logo__hexagon-path"
          d="M50 5 L11 27.5 L11 72.5 L50 95 L89 72.5 L89 27.5 Z"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="logo__letter"
        >
          FM
        </text>
      </svg>
      <svg className="logo__hexagon" viewBox="0 0 100 100">
        <path
          className="logo__hexagon-path fill"
          d="M50 5 L11 27.5 L11 72.5 L50 95 L89 72.5 L89 27.5 Z"
        />
      </svg>
    </div>
  );
};

export default Logo;
