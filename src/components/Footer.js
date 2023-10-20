import { Grid, Link, Stack } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  const styleIcon = {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      opacity: "0.4",
    },
  };
  const styleLink = {
    textDecoration: "none",
    color: "#648080",
    "&:hover": {
      opacity: "0.4",
    },
  };
  return (
    <Grid container px="34px" pb="40px" rowGap={3}>
      <Stack
        color="white"
        direction="row"
        spacing={2}
        mb='10px'
        sx={{ display: "block", width: "100%" }}
      >
        <Link sx={styleIcon} href="#">
          <InstagramIcon fontSize="large" />
        </Link>
        <Link sx={styleIcon} href="#">
          <FacebookIcon fontSize="large" />
        </Link>
        <Link sx={styleIcon} href="#">
          <YouTubeIcon fontSize="large" />
        </Link>
        <Link sx={styleIcon} href="#">
          <TwitterIcon fontSize="large" />
        </Link>
      </Stack>
      <Grid item xs={12} md={6} xl={3} lg={3}>
        <Stack direction="column" rowGap={1}>
          <Link sx={styleLink} href="#">
            Mô tả âm thanh
          </Link>
          <Link sx={styleLink} href="#">
            Quan hệ với nhà đầu tư
          </Link>
          <Link sx={styleLink} href="#">
            Thông báo pháp lý
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} xl={3} lg={3}>
        <Stack direction="column" rowGap={1}>
          <Link sx={styleLink} href="#">
            Trung tâm trợ giúp
          </Link>
          <Link sx={styleLink} href="#">
            Việc làm
          </Link>
          <Link sx={styleLink} href="#">
            Tùy chọn cookie
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} xl={3} lg={3}>
        <Stack direction="column" rowGap={1}>
          <Link sx={styleLink} href="#">
            Trung tâm trợ giúp
          </Link>
          <Link sx={styleLink} href="#">
            Việc làm
          </Link>
          <Link sx={styleLink} href="#">
            Tùy chọn cookie
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} xl={3} lg={3}>
        <Stack direction="column" rowGap={1}>
          <Link sx={styleLink} href="#">
            Thẻ quà tặng
          </Link>
          <Link sx={styleLink} href="#">
            Điều khoản sử dụng
          </Link>
          <Link sx={styleLink} href="#">
            Thông tin doanh nghiệp
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
