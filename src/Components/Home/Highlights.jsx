import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const Highlights = () => (
  <div className="grid grid-cols-4 gap-5">
    <div>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title="Гарчиг" description="This is the description" />
      </Card>
    </div>
    <div>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title="Гарчиг" description="This is the description" />
      </Card>
    </div>
  </div>
);
export default Highlights;
