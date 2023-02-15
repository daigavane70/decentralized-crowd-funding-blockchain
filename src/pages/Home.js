import {
  Alert,
  Avatar,
  Button,
  Card,
  Divider,
  Drawer,
  Input,
  List,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStartups } from "../config/Requests";

export default function Home() {
  const [investDrawerOpen, setInvestDrawerOpen] = useState(false);
  const [currentStatupDetails, setCurrentStatupDetails] = useState({});
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(false);

  const openInvest = (data) => {
    setInvestDrawerOpen(true);
    setCurrentStatupDetails(data);
  };

  const closeIvest = () => {
    setInvestDrawerOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await getAllStartups();
        setStartups(res.data);
        setLoading(false);
      } catch (e) {}
    }

    setLoading(true);
    getData();
  }, []);

  return (
    <div className="">
      <Card>
        <Divider>
          <div className="text-3xl">Welcome</div>
        </Divider>
        <p>
          This is an open platform for crowdfunding campaigns. You can launch a
          campaign using one of our contract templates or integrate your own
          smart contracts. Join our mailing list to learn more about our
          upcoming platform releases.
        </p>
        <Divider orientation="left">
          <div className="text-xl font-bold text-cyan-400">
            Available Startups
          </div>
        </Divider>
        <List className=" max-h-[500px] overflow-auto " loading={loading}>
          {startups.map((item, _id) => {
            return (
              <List.Item className="">
                <List.Item.Meta
                  avatar={<Avatar src={item?.image} />}
                  title={
                    <div
                      className=" cursor-pointer font-bold text-xl"
                      onClick={() => navigate("/startup/" + item._id)}
                    >
                      {item.title}
                    </div>
                  }
                  description={
                    <div>
                      <p className="mb-2">{item.description}</p>
                      <div className="grid grid-cols-5 gap-2 mb-2">
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Valuation: </div>
                          <div className="text-black">{item.valuation}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Sector: </div>
                          <div className="text-black">{item.category}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">CEO: </div>
                          <div className="text-black">{item.ceo}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Country: </div>
                          <div className="text-black">{item.country}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Head Quarters: </div>
                          <div className="text-black">{item.headQuarters}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          type="primary"
                          onClick={() => openInvest(item)}
                          className="bg-blue-300"
                        >
                          Invest
                        </Button>
                        <Button
                          onClick={() => {
                            navigate("/startups/" + item._id);
                          }}
                        >
                          More Info
                        </Button>
                      </div>
                    </div>
                  }
                ></List.Item.Meta>
              </List.Item>
            );
          })}
        </List>
      </Card>
      <Drawer
        title="Invest"
        placement="right"
        onClose={closeIvest}
        open={investDrawerOpen}
      >
        <Card
          title={
            <h1 className="text-cyan-400">{currentStatupDetails.title}</h1>
          }
        >
          <p className="text-gray-400">{currentStatupDetails.description}</p>
          <Divider></Divider>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <div className="text-gray-500">Valuation: </div>
              <div className="text-black">{currentStatupDetails.valuation}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">Sector: </div>
              <div className="text-black">{currentStatupDetails.sector}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">CEO: </div>
              <div className="text-black">{currentStatupDetails.ceo}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">Country: </div>
              <div className="text-black">{currentStatupDetails.country}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">Head Quarters: </div>
              <div className="text-black">
                {currentStatupDetails.headQuarters}
              </div>
            </div>
          </div>
          <Divider orientation="left">
            <div className="text-sm text-cyan-600">Enter details</div>
          </Divider>
          <div className="space-y-2">
            <Input placeholder="Amount" type="number"></Input>
            <Input placeholder="Installments"></Input>
            <div className="space-x-2">
              <Button type="primary" className="bg-green-400">
                Proceed to pay
              </Button>
              <Button type="primary" danger>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </Drawer>
    </div>
  );
}
