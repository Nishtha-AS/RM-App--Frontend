// src/screens/home/home.tsx
import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import "./home.css";

import Header from "components/header/header";
import Button2Set from "components/button2/button2-set";
import Button3Set from "components/button3/button3-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import MyTasksSectionHomeSet from "components/mytaskshome/my-tasks-section-home-set";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import { useNavigate } from "react-router-dom";

// ⬇️ Importing from JSON file placed in src/data/tasks-list.json
import taskListData from "data/tasks-list.json";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Active" | "Completed">("Active");

  return (
    <Box className="home-screen">
      <Header />

      <Box className="master-search-wrapper">
        <Box className="master-search-input-container">
          <input
            type="text"
            className="master-search-input"
            placeholder="Customer Name/ Customer ID/ CRM ID/ CBS ID/ Phone"
          />
        </Box>
      </Box>

      <Box className="body-section">
        <Box className="content-wrapper">
          <Box className="action-block">
            <Box className="button2-wrapper">
              <Button2Set
                onMyApplicationsClick={() => navigate("/applications/list")}
                onMeetingRecordingsClick={() => navigate("/meeting-recordings/saved")}
                onMyMessagesClick={() => navigate("/messages")}
              />
            </Box>

            <Box className="button3-wrapper">
              <Button3Set
                onNewCustomerClick={() => navigate("/add-customer/pan")}
                onMyCustomersClick={() => navigate("/customers")}
              />
            </Box>
          </Box>

          <Box className="tasks-section">
            <SectionHeaderWithActions
              headingText="My Tasks – Customer Data"
              hideBackIcon
            />

            <Box className="search-filter-row">
              {/* ... */}
            </Box>

            <Box className="task-toggle-tabs aligned-tabs">
              {/* ... */}
            </Box>

            <Box className="my-tasks-section-wrapper aligned-tabs">
              <MyTasksSectionHomeSet taskData={taskListData} />
            </Box>
          </Box>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default Home;
