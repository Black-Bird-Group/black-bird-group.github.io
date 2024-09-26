import React from "react";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Use a picture element to serve WebP with PNG fallback */}
      <picture>
        <source srcSet="/Black_Bird_insignia.webp" type="image/webp" />
        <img
          src="/Black_Bird_insignia.png"
          alt="Black Bird Insignia"
          className="mb-12"
          style={{ width: "auto", height: "200px", objectFit: "contain" }}
          loading="lazy" // Lazy load the image to improve performance
        />
      </picture>

      <h1 className="text-5xl mb-8 text-center">BLACK BIRD GROUP</h1>
      <p className="text-lg text-center max-w-2xl">
        The Black Bird Group provides OSINT- and GEOINT-based services.
        <br />
        <br />
        We specialize in accurate analysis and situational awareness. Our main
        focus is the Russo-Ukrainian war and security policy in northern Europe
        and the Arctic area.
        <br />
        <br />
        Our group is based in Finland.
      </p>
    </div>
  );
}

export default LandingPage;
