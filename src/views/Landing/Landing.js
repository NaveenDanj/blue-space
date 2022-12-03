import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function Landing() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="h-[100vh] bg-[#1A1D21] p-10">
        <div className=" mx-auto flex justify-center">
          <div>
            <HomeWorkOutlinedIcon sx={{ fontSize: 40 }} className="mt-[-8px]" />
            <label className="text-2xl font-bold ml-3">Blue Space</label>
          </div>
        </div>

        <div className="mt-10">
          <center>
            <h1 className=" text-5xl font-bold">Welcome back</h1>
          </center>
          <center className="mt-3">
            <label className=" font-semibold">
              Workspaces for naveenhettiwaththa@gmail.com
            </label>
          </center>
          <div className="mt-10 mx-auto flex justify-center">
            <div
              className=" rounded-sm max-w-[100%] sm:max-w-6xl"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                width: "100%",
              }}
            >
              <div className="p-3 flex justify-between bg-[#222529]">
                <label className="text-sm my-auto">
                  Currently available Workspaces for
                  naveenhettiwaththa@gmail.com
                </label>

                <Button
                    onClick={() => navigate('/workspace/step1')}
                  variant="outlined"
                  className="h-8"
                  color="primary"
                  autoFocus
                >
                  Create Workspace
                </Button>
              </div>

              <div className="h-[300px] overflow-y-auto">
                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                  className="p-3 flex justify-between"
                >
                  <div className="flex my-auto">
                    <GroupsIcon className="my-auto" sx={{ fontSize: 80 }} />
                    <div className="ml-3 my-auto">
                      <label>Naveen's Workspace</label>
                      <br />
                      <label className="text-sm">1 Member</label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="contained"
                      className="h-8"
                      color="primary"
                      autoFocus
                    >
                      Open Workspace
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Landing;
