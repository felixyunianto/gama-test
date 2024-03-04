import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import styles from "./index.module.scss";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { BRANCH_OF_COMPANY } from "../../../../constant/common";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [16, 24],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Branch = () => {
  return (
    <div className={styles.branch}>
      <div className={styles.section}>
        <div className={styles.text_container}>
          <div className={styles.title}>Cabang kami</div>
          <div className={styles.description}>
            Kami memiliki beberapa kantor cabang di beberapa kota.
          </div>
        </div>
        <div className={styles.map_container}>
          <MapContainer
            center={[-6.995016, 110.418427]}
            zoom={7.4}
            scrollWheelZoom={false}
            style={{ width: "100%", height: 500, zIndex: 0 }}
            zoomControl={false}
            doubleClickZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {BRANCH_OF_COMPANY.map((item, index) => (
              <Marker
                position={item.latLong as any}
                key={`marker-map-${index}`}
              >
                <Popup>
                  {item.title} <br />
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Lihat di map
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Branch;
