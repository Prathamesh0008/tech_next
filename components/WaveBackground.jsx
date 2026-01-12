const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full animate-waveSlow"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        {/* Wave Layer 1 */}
        <path
          d="M0,320 C240,220 480,420 720,340 C960,260 1200,380 1440,300 L1440,600 L0,600 Z"
          fill="#1E4ED8"
          opacity="0.22"
        />

        {/* Wave Layer 2 */}
        <path
          d="M0,360 C260,280 520,440 780,380 C1040,320 1280,440 1440,360 L1440,600 L0,600 Z"
          fill="#2563EB"
          opacity="0.16"
        />

        {/* Wave Layer 3 */}
        <path
          d="M0,400 C280,340 560,480 840,420 C1120,360 1320,460 1440,420 L1440,600 L0,600 Z"
          fill="#38BDF8"
          opacity="0.12"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
