import React from "react";

const MapUpdateModal = (props) => {
  return (
    <div
      class="modal fade"
      id="EditModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Cập Nhật Map
            </h5>
            <button
              type="button"
              class="btn-close"
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
                      key={props?.centerUpdate.join(",")} // Để render lại bản đồ khi vị trí trung tâm thay đổi
                      center={props?.centerUpdate} // Cập nhật vị trí trung tâm của bản đồ
                      zoom={17} // Độ zoom của bản đồ
                      style={{ height: "620px", width: "100%" }} // Kích thước bản đồ
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <ShowMapUpdateWrapper />
                      {props?.selectedShowLocationUpdate && (
                        <Marker
                          position={props?.selectedShowLocationUpdate} // Vị trí marker cập nhật
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
                          value={props?.updateMap.map_name}
                          onChange={(e) => {
                            setUpdateMap({
                              ...updateMap,
                              map_name: e.target.value,
                            });
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
                          value={props?.updateAddress}
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
                          value={props?.updateWard}
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
                          value={props?.updateDistrict}
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
                          value={props?.updateProvince}
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
                          value={props?.updateLon}
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
                          value={props?.updateLat}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => props?.handleUpdateMap()}
            >
              Cập Nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapUpdateModal;
