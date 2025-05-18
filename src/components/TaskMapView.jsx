import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 修复默认图标加载问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

// 地图飞行组件
const FlyToUser = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (
      position &&
      Array.isArray(position) &&
      typeof position[0] === "number" &&
      typeof position[1] === "number"
    ) {
      map.flyTo(position, 10, { duration: 1.5 });
    }
  }, [position, map]);
  return null;
};

const TaskMapView = ({ tasks, onTaskClick }) => {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserPosition([latitude, longitude]);
        },
        (err) => {
          console.warn("用户位置获取失败：", err.message);
        }
      );
    }
  }, []);

  const defaultCenter = [-25.2744, 133.7751];
  const defaultZoom = 4.2;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      className="w-full h-full z-0 rounded-xl min-h-[600px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {userPosition && <FlyToUser position={userPosition} />}

      {userPosition && (
        <Marker position={userPosition}>
          <Popup>You're here</Popup>
        </Marker>
      )}

      {tasks.map((task) => (
        <Marker
          key={task.id}
          position={[task.lat, task.lng]}
          eventHandlers={{ click: () => onTaskClick?.(task.id) }}
        >
          <Popup>
            <strong>{task.title}</strong><br />
            {task.subject}<br />
            {task.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TaskMapView;
