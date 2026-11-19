"use client";

import { useState, type CSSProperties } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import worldData from "world-atlas/countries-110m.json";

const W = 1000;
const LAT_TOP = 76; 
const LAT_BOTTOM = -56; 

const projection = geoMercator()
  .scale(W / (2 * Math.PI))
  .translate([W / 2, 0])
  .precision(0.2);
const yTop = projection([0, LAT_TOP])![1];
const yBottom = projection([0, LAT_BOTTOM])![1];
projection.translate([W / 2, -yTop]);
const H = yBottom - yTop;

const pathGen = geoPath(projection);
const world = worldData as unknown as Topology<{ countries: GeometryCollection }>;
const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry>;
const LAND = countries.features
  .filter((f) => String(f.id) !== "010") // drop Antarctica
  .map((f, i) => ({ key: String(f.id ?? i), d: pathGen(f) ?? "" }))
  .filter((p) => p.d);

type Anchor = "tl" | "tr" | "bl" | "br";

const locations = [
  {
    id: "rwanda",
    flag: "rw",
    country: "Rwanda",
    tipName: "Rwanda",
    tipLabel: "Kigali / HQ",
    city: "Kigali",
    label: "Kigali / Headquarters",
    address: "PLG Building, KN 3rd street, Kiyovu",
    lon: 30.06,
    lat: -1.95,
    tip: { dx: 24, dy: 26, anchor: "tl" as Anchor },
  },
  {
    id: "nigeria",
    flag: "ng",
    country: "Nigeria",
    tipName: "Nigeria",
    tipLabel: "Lagos",
    city: "Lagos",
    label: "Lagos",
    address: "Nigeria", 
    lon: 3.38,
    lat: 6.52,
    tip: { dx: -24, dy: -18, anchor: "br" as Anchor },
  },
  {
    id: "uae",
    flag: "ae",
    country: "United Arab Emirates",
    tipName: "UAE",
    tipLabel: "Dubai",
    city: "Dubai",
    label: "Dubai",
    address: "United Arab Emirates", 
    lon: 55.27,
    lat: 25.2,
    tip: { dx: 24, dy: -22, anchor: "bl" as Anchor },
  },
] as const;

type OfficeId = (typeof locations)[number]["id"];
type FlagCode = (typeof locations)[number]["flag"];

const ANCHOR: Record<Anchor, [string, string]> = {
  tl: ["0%", "0%"],
  tr: ["-100%", "0%"],
  bl: ["0%", "-100%"],
  br: ["-100%", "-100%"],
};



function Flag({ code }: { code: FlagCode }) {
  return (
    <svg
      className="shrink-0 rounded-sm ring-1 ring-atlas-ink/10"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      aria-hidden="true"
    >
      {code === "rw" && (
        <>
          <rect width="24" height="8" fill="#00A1DE" />
          <rect y="8" width="24" height="4" fill="#FAD201" />
          <rect y="12" width="24" height="4" fill="#20603D" />
        </>
      )}
      {code === "ng" && (
        <>
          <rect width="24" height="16" fill="#fff" />
          <rect width="8" height="16" fill="#008751" />
          <rect x="16" width="8" height="16" fill="#008751" />
        </>
      )}
      {code === "ae" && (
        <>
          <rect x="6" width="18" height="5.34" fill="#00732F" />
          <rect x="6" y="5.33" width="18" height="5.34" fill="#fff" />
          <rect x="6" y="10.66" width="18" height="5.34" fill="#000" />
          <rect width="6" height="16" fill="#E4002B" />
        </>
      )}
    </svg>
  );
}



const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-teal";

export default function OfficeAtlas() {
  const [selectedId, setSelectedId] = useState<OfficeId>("rwanda");
  const selected = locations.find((l) => l.id === selectedId);

  return (
    <div className="bg-atlas-sea text-atlas-ink">

      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: `${W} / ${H.toFixed(1)}` }}
      >
        <svg
          className="block size-full"
          viewBox={`0 0 ${W} ${H.toFixed(1)}`}
          role="img"
          aria-label="World map with PLG Solutions office locations in Rwanda, Nigeria and the United Arab Emirates"
        >
          {LAND.map((p) => (
            <path
              key={p.key}
              d={p.d}
              className="fill-atlas-land stroke-white/45 stroke-[0.6] [stroke-linejoin:round] [vector-effect:non-scaling-stroke]"
            />
          ))}
        </svg>

        {locations.map((location) => {
          const [x, y] = projection([location.lon, location.lat])!;
          const { dx, dy, anchor } = location.tip;
          const [tx, ty] = ANCHOR[anchor];
          const isSelected = selectedId === location.id;

          const style = {
            left: `${(x / W) * 100}%`,
            top: `${(y / H) * 100}%`,
            "--dx": `${dx}px`,
            "--dy": `${dy}px`,
            "--tx": tx,
            "--ty": ty,
          } as CSSProperties;

          const hideOnMobile = isSelected ? "" : "max-sm:hidden";

          return (
            <button
              key={location.id}
              type="button"
              aria-label={`${location.country}, ${location.city}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedId(location.id)}
              onMouseEnter={() => setSelectedId(location.id)}
              style={style}
              className={`absolute size-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-0 ${
                isSelected ? "z-3" : "z-1"
              } ${focusRing}`}
            >
              {/* leader line */}
              <svg
                className={`pointer-events-none absolute left-1/2 top-1/2 overflow-visible ${hideOnMobile}`}
                width="1"
                height="1"
                aria-hidden="true"
              >
                <line x1="0" y1="0" x2={dx} y2={dy} className="stroke-atlas-ink/55" strokeWidth="1" />
              </svg>

              {/* dot + pulse ring */}
              <span
                aria-hidden="true"
                className={`absolute inset-[5px] rounded-full border-2 border-white transition-colors ${
                  isSelected ? "bg-atlas-green" : "bg-atlas-teal"
                }`}
              >
                <span
                  className={`pointer-events-none absolute -inset-1.5 rounded-full border-[1.5px] border-atlas-green ${
                    isSelected
                      ? "animate-atlas-pulse motion-reduce:scale-150 motion-reduce:animate-none motion-reduce:opacity-60"
                      : "opacity-0"
                  }`}
                />
              </span>

              {/* tooltip card */}
              <span
                className={`absolute left-[calc(50%+var(--dx))] top-[calc(50%+var(--dy))] flex translate-x-(--tx) translate-y-(--ty) items-center gap-2.5 whitespace-nowrap rounded-md border border-atlas-ink/5 bg-white py-[9px] pr-4 pl-2.5 text-left transition-shadow max-sm:py-[7px] max-sm:pr-3 max-sm:pl-2 ${
                  isSelected
                    ? "shadow-[0_0_0_1.5px_var(--color-atlas-teal),0_4px_14px_rgba(16,41,58,0.16)]"
                    : "shadow-[0_2px_10px_rgba(16,41,58,0.12)]"
                } ${hideOnMobile}`}
              >
                <Flag code={location.flag} />
                <span>
                  <strong className="block text-[13px] leading-tight font-bold max-sm:text-xs">
                    {location.tipName}
                  </strong>
                  <small className="block text-[11px] leading-snug text-atlas-muted">
                    {location.tipLabel}
                  </small>
                </span>
              </span>
            </button>
          );
        })}
      </div>


      <div
        role="group"
        aria-label="Select an office"
        className="grid grid-cols-1 border-t border-atlas-line sm:grid-cols-3"
      >
        {locations.map((location) => {
          const isSelected = selectedId === location.id;
          return (
            <button
              key={location.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedId(location.id)}
              className={`flex cursor-pointer items-center gap-3.5 px-4 py-[18px] text-left transition-colors ${focusRing} ${
                isSelected
                  ? "border-b-2 border-atlas-ink bg-atlas-mint"
                  : "border-b border-atlas-line hover:bg-atlas-mint/60"
              }`}
            >
              <Flag code={location.flag} />
              <span>
                <strong className="block text-sm font-bold">{location.country}</strong>
                <span className="block text-xs text-atlas-muted">{location.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {selected && (
        <p className="m-0 px-1 pt-3.5 pb-1 text-[13px] text-atlas-muted" aria-live="polite">
          <strong className="text-atlas-ink">{selected.city}</strong>
          <span> · {selected.address}</span>
        </p>
      )}
    </div>
  );
}