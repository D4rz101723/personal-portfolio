function AnimatedBackground() {
  const particles = Array.from({ length: 35 });

  return (
    <div className="animated-background">
      {/* Base Background */}
      <div className="background-base" />

      {/* Futuristic Grid */}
      <div className="background-grid" />

      {/* Gradient Orbs */}
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />
      <div className="background-orb background-orb-three" />

      {/* Ambient Glow */}
      <div className="background-glow" />

      {/* Particles */}
      <div className="background-particles">
        {particles.map((_, index) => {
          const left = (index * 37) % 100;
          const top = (index * 53) % 100;

          return (
            <span
              key={index}
              className="background-particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${index * -0.25}s`,
                animationDuration: `${5 + (index % 5)}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AnimatedBackground;
