import PropTypes from "prop-types";
import Map from "./Map";

function MapSelector({
  geolocationPosition,
  getPosition,
  isLoadingPosition,
  mapPosition,
}) {
  return (
    <div className="z-[0] relative">
      <label className="text-gray-700 dark:text-stone-50 font-medium mb-1">
        Use the map to choose your location.
      </label>
      <Map
        geolocationPosition={geolocationPosition}
        getPosition={getPosition}
        isLoadingPosition={isLoadingPosition}
        mapPosition={mapPosition}
      />
    </div>
  );
}

MapSelector.propTypes = {
  geolocationPosition: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  getPosition: PropTypes.func.isRequired,
  isLoadingPosition: PropTypes.bool,
  mapPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MapSelector;
