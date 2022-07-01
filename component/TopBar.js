import React from "react";
import { Tabs } from "antd";
import Link from 'next/link'

const { TabPane } = Tabs;
function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img src="/mp-logo.png" alt="MP Telecom logo" width={200} />
      </div>
      <div style={{ width: "70%", maxWidth: 500 }}>
        <Tabs
          tabBarStyle={{ marginBottom: 0, color: "rgba(31, 21, 52, 0.5)" }}
          size="small"
          defaultActiveKey="1"
        >
          <TabPane tab={<Link href={"#"}>Home</Link>} key="1"></TabPane>
          <TabPane tab={<Link href={"#aboutus"}>About us</Link>} key="2"></TabPane>
          <TabPane tab={<Link href={"#hiring"}>Recruit</Link>} key="3"></TabPane>
          <TabPane tab={<Link href={"#training"}>Training</Link>} key="4"></TabPane>
          <TabPane tab={<Link href={"#register"}>Apply now</Link>} key="5"></TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default TopBar;
