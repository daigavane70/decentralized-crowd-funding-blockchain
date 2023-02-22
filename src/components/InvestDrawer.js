import React from "react";
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

export default function InvestDrawer({
  currentStatupDetails,
  setInvestDrawerOpen,
  investDrawerOpen,
}) {
  const closeIvest = () => {
    setInvestDrawerOpen(false);
  };
  return (
    <Drawer
      title="Invest"
      placement="right"
      onClose={closeIvest}
      open={investDrawerOpen}
    >
      <Card
        title={
          <div>
            <img src={currentStatupDetails.image} className="h-[200px] mx-auto"></img>
            <h1 className="text-cyan-400">{currentStatupDetails.name}</h1>
          </div>
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
  );
}
