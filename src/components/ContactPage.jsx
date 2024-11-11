import React from "react";

function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative"
      style={{
        backgroundImage: `url(/Black_Bird_insignia.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.98, // Control the transparency of the logo
      }}
    >
      {/* Content on top of the background */}
      <div className="relative z-10 text-center">
        <p className="text-lg mb-4">
          Our main publicly operating analysts are Emil Kastehelmi, John Helin,
          Pasi Paroinen, Eerik Matero, and Tuukka Fält.
          <br />
          <br />
          Our whole group consists of approximately ten members.
        </p>

        <p className="text-lg mb-4">
          Please contact us for cooperation and media inquiries at{" "}
          <span className="text-blue-500">contact (at) blackbirdgroup .fi</span>
        </p>

        {/* Centered X Handle Logo and Link */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          <a
            href="https://x.com/Black_BirdGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/X-logo-white.webp" // Use the new X-logo-white.webp file
              alt="X Handle Logo"
              className="w-10 h-10" // Adjust size as needed
            />
            <span className="text-lg ml-2">@Black_BirdGroup</span>{" "}
            {/* Added text */}
          </a>
        </div>
      </div>

      {/* Add a dark background overlay to ensure readability */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Darken the background to enhance text readability
        }}
      ></div>
    </div>
  );
}

export default ContactPage;
