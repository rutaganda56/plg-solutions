"use client";

import { useState } from "react";

const locations = [
  {
    id: "rwanda",
    country: "Rwanda",
    city: "Kigali",
    label: "Kigali / Headquarters",
    address: "PLG Building, KN 3rd street, Kiyovu",
    position: { left: "55%", top: "61%" },
  },
  {
    id: "nigeria",
    country: "Nigeria",
    city: "Lagos",
    label: "Lagos",
    address: "Nigeria",
    position: { left: "51%", top: "60%" },
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    city: "Dubai",
    label: "Dubai",
    address: "United Arab Emirates",
    position: { left: "59%", top: "54%" },
  },
] as const;

type OfficeId = (typeof locations)[number]["id"];

export default function OfficeAtlas() {
  const [selectedId, setSelectedId] = useState<OfficeId>("rwanda");
  const selected = locations.find((location) => location.id === selectedId);

  return (
    <div className="office-atlas">
      <div className="atlas-map">
        <svg
          className="world-map"
          viewBox="0 0 760 390"
          role="img"
          aria-label="Illustrated world map with PLG Solutions office locations in Rwanda, Nigeria and the United Arab Emirates"
        >
          <path d="m75 91 22-24 34-8 19 14 33 2 15 16-8 14 20 10-11 21-24 4-5 18-22 8-7 25-18 4-13-24-20-4-10-23-18-5-13-25-13-7 2-17-16-9 4-15-12-8z" />
          <path d="m193 204 24 11 11 22-8 19 12 22-13 25-9 34-15 20-12-23-2-29-12-20 1-28-12-20 7-24z" />
          <path d="m347 85 18-13 27 4 5 15-14 11-27-4z" />
          <path d="m350 127 21-15 30 5 22 17 10 31-9 36-14 25-12 30-19 14-13-21-2-30-13-14-6-34-12-17z" />
          <path d="m416 83 21-17 42 3 19-9 48 11 12 17 35 6 14 19-21 16-36-5-14 14-25-5-19 14-25-7-11-18-31-5-20-17z" />
          <path d="m463 199 22-12 25 8 11 22-10 34-21 24-19-9-13-29z" />
          <path d="m594 269 17-11 19 8 6 16-15 14-20-4z" />
          <path d="m333 103 10-8 10 7-2 12-10 5-9-7z" />
          <path d="m390 66 8-8 12 4-2 12-11 3z" />
        </svg>
        {locations.map((location) => (
          <button
            aria-label={`${location.country}, ${location.city}`}
            aria-pressed={selectedId === location.id}
            className={`atlas-marker${selectedId === location.id ? " selected" : ""}`}
            key={location.id}
            onClick={() => setSelectedId(location.id)}
            style={location.position}
            type="button"
          >
            <span className="atlas-pin" aria-hidden="true" />
            <span className="atlas-tooltip">
              <strong>{location.country}</strong>
              <small>{location.label}</small>
            </span>
          </button>
        ))}
      </div>
      <div className="atlas-location-list" aria-label="Select an office">
        {locations.map((location) => (
          <button
            aria-pressed={selectedId === location.id}
            className={`atlas-location${selectedId === location.id ? " selected" : ""}`}
            key={location.id}
            onClick={() => setSelectedId(location.id)}
            type="button"
          >
            <strong>{location.country}</strong>
            <span>{location.label}</span>
          </button>
        ))}
      </div>
      {selected && (
        <p className="atlas-address" aria-live="polite">
          <strong>{selected.city}</strong>
          <span> · {selected.address}</span>
        </p>
      )}
    </div>
  );
}
