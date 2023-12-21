import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://images.unsplash.com/photo-1575540538034-c69be309c367?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>Nature's Friend</Typography>
        <Typography color={main}>naturesfriend.org</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Discover the beauty of nature and all it has to offer at Nature's
        friend. We strive to promote global awareness about nature.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
