import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";

const ToolTip = ({ label, children, titleValidation = false }) => {
  return (
    <Tooltip
      title={titleValidation ? label : ""}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [60, -5],
              },
            },
          ],
        },
        tooltip: {
          sx: {
            bgcolor: "#333",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
            px: 2,
            py: 1,
          },
        },
        arrow: {
          sx: {
            color: "#333",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

ToolTip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
  titleValidation: PropTypes.bool,
};

export default ToolTip;
