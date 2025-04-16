import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { appInfo } from "../../constants/appInfos";
import "leaflet-control-geocoder";
import { authSelector } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";
import { buildingSelector } from "../../redux/reducers/buildingReducer";

const MapCreateModal = (props) => {
  const auth = useSelector(authSelector);
  const buildingReducer = useSelector(buildingSelector);
  const [item, setItem] = useState(null);

  return (
    <div
      className="modal fade"
      id="themMoiModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Thêm Mới Map
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-header">
                    <MapContainer
                      center={props?.center} // Tọa độ trung tâm Việt Nam
                      zoom={15} // Độ zoom phù hợp để hiển thị toàn bộ lãnh thổ
                      style={{ height: "620px", width: "100%" }} // Kích thước của bản đồ
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      {props?.ShowMapWrapper}
                      {props?.selectedShowLocation && (
                        <Marker
                          position={props?.selectedShowLocation} // Vị trí đã click
                          icon={L.icon({
                            iconUrl: appInfo.currentLocationIcon,
                            iconSize: [35, 35],
                            iconAnchor: [17, 35],
                          })}
                        />
                      )}
                    </MapContainer>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Tên Map
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.nameMap}
                          onChange={(e) => {
                            props?.setNameMap(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Địa Chỉ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.address}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Phường / Thị Trấn
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.ward}
                          readOnly
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Quận / Huyện
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.district}
                          readOnly
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Tỉnh
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.province}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Kinh Độ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.lon}
                          readOnly
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="" className="mb-2">
                          Vĩ Độ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={props?.lat}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => props?.handleCreateMap()}
            >
              Thêm Mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCreateModal;
