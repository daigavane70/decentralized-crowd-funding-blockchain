import { Card, Typography } from "antd";
import React, { useState } from "react";

export default function InvestorProfile() {
  const { Title } = Typography;
  const [investorDetails, setInvestorDetails] = useState({
    name: "Vedant Daigavane",
    totalInvestments: 5,
    amountInvested: 100200,
    netWorth: 120300,
  });

  return (
    <div className="px-4">
      <Title level={2}> Investor Profile </Title>
      <Card className="m-0" title={investorDetails.name}></Card>
    </div>
  );
}
