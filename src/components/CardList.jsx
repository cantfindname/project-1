import React from "react";
import Card from "./Card";
import wicse from "../assets/wicse-logo-beige.png";
import acm from "../assets/Frame+852.png";
import sec from "../assets/download.png";
import ace from "../assets/ace.jpg";
import programmingTeam from "../assets/programmingTeam.jpg";
import openSource from "../assets/openSource.jpg";
import DSC from "../assets/DSC.png";
import SSD from "../assets/SSD.png";
import swampHack from "../assets/swamphack.png";
import SIT from "../assets/SIT.jpg";

const CardList = () => {
  const cards = [
    {
      clubName: "WiCSE",
      clubImage: { wicse },
      clubLink: "https://ufwicse.com/",
    },
    {
      clubName: "ACM",
      clubImage: "fds",
      clubLink: "https://www.uf-acm.com/",
    },
  ];

  return (
    <div className="card-list">
      <table>
        <tbody>
          <tr>
            <Card name="WiCSE" image={wicse} link="https://ufwicse.com"></Card>
            <Card name="ACM" image={acm} link="https://www.uf-acm.com/"></Card>
            <Card
              name="SEC"
              image={sec}
              link="https://orgs.studentinvolvement.ufl.edu/Organization/Software-Engineering-Club"
            ></Card>
            <Card
              name="ACE"
              image={ace}
              link="https://www.facebook.com/GatorACE/?fref=ts"
            ></Card>
          </tr>
          <tr>
            <Card
              name="UF Programming Team"
              image={programmingTeam}
              link="https://www.facebook.com/groups/ufprogteam/"
            ></Card>
            <Card
              name="Open Source Club"
              image={openSource}
              link="https://www.facebook.com/groups/ufosc/"
            ></Card>
            <Card
              name="DSC UF"
              image={DSC}
              link="https://www.dscuf.com/"
            ></Card>
            <Card
              name="Society of Software Developers"
              image={SSD}
              link="https://ufssd.org/"
            ></Card>
          </tr>
          <tr>
            <Card
              name="SwampHack"
              image={swampHack}
              link="https://2023.swamphacks.com/"
            ></Card>
            <Card
              name="UF SIT"
              image={SIT}
              link="https://www.instagram.com/uf.sit/"
            ></Card>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
