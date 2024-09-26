import React from "react";

function MapPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      {/* Header with black background and white text */}
      <div className="bg-black text-white text-center py-4">
        <h1 className="text-3xl font-bold">Russo-Ukrainian War Map</h1>
        <p>
          Continuously updated map of the Russo-Ukrainian war. Fortifications
          can be found from the items panel, under tools.
        </p>
      </div>

      {/* Map container that fully uses remaining space */}
      <div className="flex-grow w-full bg-black">
        <iframe
          src="https://www.scribblemaps.com/maps/view/091194"
          width="100%"
          height="90%" // Keep the 90% height
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Russo-Ukrainian War Map"
        ></iframe>
      </div>

      {/* Ensures footer/background below the map stays black */}
      <div className="w-full bg-black text-white text-center py-2">
        <p>The War in Ukraine</p>
      </div>
    </div>
  );
}

export default MapPage;
