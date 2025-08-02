// MapSelector.jsx
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const LazyMap = lazy(() => import("./Map"));

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
      <Suspense
        fallback={<div className="text-sm text-gray-500">Loading map...</div>}
      >
        <LazyMap
          geolocationPosition={geolocationPosition}
          getPosition={getPosition}
          isLoadingPosition={isLoadingPosition}
          mapPosition={mapPosition}
        />
      </Suspense>
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
  mapPosition: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default MapSelector;
