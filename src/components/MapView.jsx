import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useToast } from "@/components/ui/use-toast";

// 修复 Leaflet 默认图标路径问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const FlyToUser = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (
      Array.isArray(position) &&
      typeof position[0] === "number" &&
      typeof position[1] === "number"
    ) {
      map.flyTo(position, 10, { duration: 1.5 });
    }
  }, [position, map]);

  return null;
};

const MapView = ({ tutors = [], onTutorClick }) => {
  const defaultCenter = [-25.2744, 133.7751]; // Australia center
  const [userPosition, setUserPosition] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          if (typeof latitude === "number" && typeof longitude === "number") {
            setUserPosition([latitude, longitude]);
          }
        },
        (err) => {
          console.warn("Geolocation error:", err.message);
          toast({
            title: "Location Access Denied",
            description: "We couldn't access your location. You can still browse tutors manually.",
            variant: "destructive",
          });
        }
      );
    }
  }, [toast]);

  const tutorMarkers = useMemo(() => {
    return tutors.map((tutor) => {
      const validCoords =
        typeof tutor.lat === "number" && typeof tutor.lng === "number";

      if (!validCoords) return null;

      return (
        <Marker
          key={tutor.id}
          position={[tutor.lat, tutor.lng]}
          eventHandlers={{
            click: () => onTutorClick?.(tutor.id),
          }}
        >
          <Popup>
            <strong>{tutor.name}</strong>
            <br />
            {tutor.subjects?.[0]}
            <br />
            {tutor.address}
          </Popup>
        </Marker>
      );
    });
  }, [tutors, onTutorClick]);

  return (
    <MapContainer
      center={defaultCenter}
      zoom={4.2}
      scrollWheelZoom={true}
      className="w-full h-full min-h-[600px] z-0 rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {userPosition && <FlyToUser position={userPosition} />}

      {userPosition && (
        <Marker position={userPosition}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {tutorMarkers}
    </MapContainer>
  );
};

export default MapView;
