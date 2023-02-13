import { Avatar, Button, Card, Divider, Drawer, Input, List } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [investDrawerOpen, setInvestDrawerOpen] = useState(false);
  const [currentStatupDetails, setCurrentStatupDetails] = useState({});
  const [startups, setStartups] = useState(allStartups);

  const openInvest = (data) => {
    setInvestDrawerOpen(true);
    setCurrentStatupDetails(data);
  };

  const closeIvest = () => {
    setInvestDrawerOpen(false);
  };

  const navigate = useNavigate();

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
        <List className=" max-h-[500px] overflow-auto ">
          {startups.map((item, _id) => {
            return (
              <List.Item className="">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
                          <div className="text-black">{item.Domain}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">CEO: </div>
                          <div className="text-black">{item.CEO}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Country: </div>
                          <div className="text-black">{item.Country}</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-gray-500">Head Quarters: </div>
                          <div className="text-black">{item.HQ}</div>
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
                        <Button>More Info</Button>
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
              <div className="text-black">{currentStatupDetails.Domain}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">CEO: </div>
              <div className="text-black">{currentStatupDetails.CEO}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">Country: </div>
              <div className="text-black">{currentStatupDetails.Country}</div>
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-500">Head Quarters: </div>
              <div className="text-black">{currentStatupDetails.HQ}</div>
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

const allStartups = [
  {
    title: "Skidoo",
    valuation: 1116448,
    HQ: "San Ignacio",
    CEO: "Dukey Baleine",
    Domain: "n/a",
    Country: "Honduras",
    Founded: 2005,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    title: "Viva",
    valuation: 401183,
    HQ: "Koh Tao",
    CEO: "Pail Larret",
    Domain: "Health Care",
    Country: "Thailand",
    Founded: 2000,
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    title: "LiveZ",
    valuation: 1608651,
    HQ: "Jamalteca",
    CEO: "Ferdinande Baskwell",
    Domain: "Transportation",
    Country: "Honduras",
    Founded: 1993,
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    title: "Yamia",
    valuation: 783136,
    HQ: "Wringinsari",
    CEO: "Kristoffer Pesterfield",
    Domain: "n/a",
    Country: "Indonesia",
    Founded: 1993,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    title: "Youtags",
    valuation: 584528,
    HQ: "Turangi",
    CEO: "Sabrina Minghetti",
    Domain: "Consumer Services",
    Country: "New Zealand",
    Founded: 2004,
    description:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
  },
  {
    title: "Devpulse",
    valuation: 800359,
    HQ: "Sieroszewice",
    CEO: "Meggie Huttley",
    Domain: "Health Care",
    Country: "Poland",
    Founded: 2007,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
  },
  {
    title: "Topicblab",
    valuation: 973995,
    HQ: "Bancak Wetan",
    CEO: "Daune McAuliffe",
    Domain: "Consumer Services",
    Country: "Indonesia",
    Founded: 2012,
    description: "Maecenas tincidunt lacus at velit.",
  },
  {
    title: "Latz",
    valuation: 1466584,
    HQ: "Lisiy Nos",
    CEO: "Clemens Keasey",
    Domain: "n/a",
    Country: "Russia",
    Founded: 1995,
    description: "In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    title: "Vimbo",
    valuation: 1641065,
    HQ: "Parksville",
    CEO: "Dorree Strowger",
    Domain: "Health Care",
    Country: "Canada",
    Founded: 2010,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    title: "Trilith",
    valuation: 1823098,
    HQ: "Văn Điển",
    CEO: "Laurence Bodsworth",
    Domain: "n/a",
    Country: "Vietnam",
    Founded: 1993,
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    title: "Pixonyx",
    valuation: 1401040,
    HQ: "Opoczno",
    CEO: "Fanya Cyster",
    Domain: "Technology",
    Country: "Poland",
    Founded: 2002,
    description:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
  },
  {
    title: "Edgeblab",
    valuation: 289163,
    HQ: "Angoulême",
    CEO: "Anitra Greenman",
    Domain: "Energy",
    Country: "France",
    Founded: 2000,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    title: "Tazz",
    valuation: 135324,
    HQ: "Aluminé",
    CEO: "Maressa Maymond",
    Domain: "Technology",
    Country: "Argentina",
    Founded: 2007,
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
  },
  {
    title: "Jayo",
    valuation: 507551,
    HQ: "San Isidro",
    CEO: "Hirsch Domenichini",
    Domain: "n/a",
    Country: "Philippines",
    Founded: 2010,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
  },
  {
    title: "Tagchat",
    valuation: 1927698,
    HQ: "Norrahammar",
    CEO: "Gae Bischop",
    Domain: "Technology",
    Country: "Sweden",
    Founded: 1999,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
  },
  {
    title: "Babbleblab",
    valuation: 581384,
    HQ: "Sosnovaya Polyana",
    CEO: "Francklin Elderidge",
    Domain: "Technology",
    Country: "Russia",
    Founded: 2006,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
  },
  {
    title: "Browsecat",
    valuation: 1221922,
    HQ: "Garbolovo",
    CEO: "Baxie Dunthorn",
    Domain: "n/a",
    Country: "Russia",
    Founded: 2003,
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    title: "Abata",
    valuation: 1226966,
    HQ: "Jurh",
    CEO: "Fonsie Leadbeater",
    Domain: "Basic Industries",
    Country: "China",
    Founded: 2008,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
  },
  {
    title: "Devpulse",
    valuation: 1108884,
    HQ: "Changning",
    CEO: "Fulvia Romke",
    Domain: "n/a",
    Country: "China",
    Founded: 1996,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
  },
  {
    title: "Shuffledrive",
    valuation: 1744848,
    HQ: "Chirpan",
    CEO: "Deina Mably",
    Domain: "Finance",
    Country: "Bulgaria",
    Founded: 2011,
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
  },
  {
    title: "Flipstorm",
    valuation: 846825,
    HQ: "Xueshan",
    CEO: "North Cheel",
    Domain: "Health Care",
    Country: "China",
    Founded: 2005,
    description:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  },
  {
    title: "Browsetype",
    valuation: 784747,
    HQ: "Swedru",
    CEO: "Vassili Thridgould",
    Domain: "Energy",
    Country: "Ghana",
    Founded: 2003,
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
  },
  {
    title: "Gigabox",
    valuation: 1258859,
    HQ: "Lewolang",
    CEO: "Athene Tothacot",
    Domain: "Finance",
    Country: "Indonesia",
    Founded: 1993,
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    title: "Photospace",
    valuation: 785711,
    HQ: "Parintins",
    CEO: "Juana Bendson",
    Domain: "Capital Goods",
    Country: "Brazil",
    Founded: 1989,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  },
  {
    title: "Rhyloo",
    valuation: 1525625,
    HQ: "Irtyshskiy",
    CEO: "Lila Tedridge",
    Domain: "Health Care",
    Country: "Russia",
    Founded: 1996,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  },
  {
    title: "Gabtune",
    valuation: 1260304,
    HQ: "Xiaozhang",
    CEO: "Patin Lyles",
    Domain: "Health Care",
    Country: "China",
    Founded: 1999,
    description:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
  },
  {
    title: "Shufflebeat",
    valuation: 414045,
    HQ: "Trzcinica",
    CEO: "Berni Rouzet",
    Domain: "n/a",
    Country: "Poland",
    Founded: 2011,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
  },
  {
    title: "Tavu",
    valuation: 1234718,
    HQ: "Anjiang",
    CEO: "Noland Beccero",
    Domain: "Consumer Durables",
    Country: "China",
    Founded: 2012,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    title: "Mudo",
    valuation: 1087042,
    HQ: "Wąpielsk",
    CEO: "Philippe Weighell",
    Domain: "Miscellaneous",
    Country: "Poland",
    Founded: 2005,
    description:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
  },
  {
    title: "DabZ",
    valuation: 1170769,
    HQ: "Mbuji-Mayi",
    CEO: "Casper Greenstock",
    Domain: "Finance",
    Country: "Democratic Republic of the Congo",
    Founded: 1981,
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
  },
  {
    title: "Meembee",
    valuation: 209279,
    HQ: "Mudanjiang",
    CEO: "Leeanne Berthel",
    Domain: "n/a",
    Country: "China",
    Founded: 1990,
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    title: "Photobug",
    valuation: 729397,
    HQ: "Mpraeso",
    CEO: "Lewes Gallienne",
    Domain: "Health Care",
    Country: "Ghana",
    Founded: 1998,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  },
  {
    title: "Thoughtsphere",
    valuation: 1539116,
    HQ: "Dalovice",
    CEO: "Wait Mullany",
    Domain: "Public Utilities",
    Country: "Czech Republic",
    Founded: 2005,
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
  },
  {
    title: "Kwinu",
    valuation: 235621,
    HQ: "Numazu",
    CEO: "Brooks Bilbee",
    Domain: "Consumer Non-Durables",
    Country: "Japan",
    Founded: 1984,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    title: "Browseblab",
    valuation: 1980839,
    HQ: "Liucheng",
    CEO: "Lori Newell",
    Domain: "Finance",
    Country: "China",
    Founded: 1999,
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
  },
  {
    title: "Yoveo",
    valuation: 1456534,
    HQ: "Gaolong",
    CEO: "Tawsha Fain",
    Domain: "Finance",
    Country: "China",
    Founded: 1995,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    title: "Livefish",
    valuation: 249312,
    HQ: "Santana de Parnaíba",
    CEO: "Husein Cisco",
    Domain: "n/a",
    Country: "Brazil",
    Founded: 2008,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    title: "Kwinu",
    valuation: 382232,
    HQ: "Fengyang Fuchengzhen",
    CEO: "Benjamin Jevon",
    Domain: "n/a",
    Country: "China",
    Founded: 1988,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
  },
  {
    title: "Skiptube",
    valuation: 743031,
    HQ: "Mogilany",
    CEO: "Clem Dallow",
    Domain: "Consumer Services",
    Country: "Poland",
    Founded: 1990,
    description:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    title: "Demivee",
    valuation: 1548018,
    HQ: "Macun",
    CEO: "Shaughn Tonkes",
    Domain: "Consumer Services",
    Country: "China",
    Founded: 1991,
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    title: "Agivu",
    valuation: 1557616,
    HQ: "Židlochovice",
    CEO: "Evelyn Wakelam",
    Domain: "Consumer Services",
    Country: "Czech Republic",
    Founded: 1997,
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    title: "Yakidoo",
    valuation: 1641602,
    HQ: "Karlstad",
    CEO: "Bordie Byrd",
    Domain: "Consumer Non-Durables",
    Country: "Sweden",
    Founded: 2006,
    description: "Ut tellus.",
  },
  {
    title: "Zooxo",
    valuation: 324349,
    HQ: "Kurnia",
    CEO: "Nina Ketcher",
    Domain: "Energy",
    Country: "Indonesia",
    Founded: 1986,
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
  },
  {
    title: "Snaptags",
    valuation: 1358931,
    HQ: "Ketampak",
    CEO: "Ronald Hinstridge",
    Domain: "Finance",
    Country: "Indonesia",
    Founded: 2011,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
  },
  {
    title: "Centimia",
    valuation: 542921,
    HQ: "Wichita",
    CEO: "Rory Candwell",
    Domain: "Technology",
    Country: "United States",
    Founded: 2000,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  },
  {
    title: "Jaxworks",
    valuation: 1218682,
    HQ: "Dolulolong",
    CEO: "Abe Domeny",
    Domain: "Consumer Non-Durables",
    Country: "Indonesia",
    Founded: 2002,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    title: "LiveZ",
    valuation: 934554,
    HQ: "Novosel’ye",
    CEO: "Lucienne Pennone",
    Domain: "Consumer Non-Durables",
    Country: "Belarus",
    Founded: 1993,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  },
  {
    title: "Tagchat",
    valuation: 1518921,
    HQ: "Az Zaytūnīyah",
    CEO: "Darlleen Mugglestone",
    Domain: "Energy",
    Country: "Palestinian Territory",
    Founded: 2006,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    title: "Zoozzy",
    valuation: 523894,
    HQ: "Panjerrejo",
    CEO: "Gil Huxtable",
    Domain: "Consumer Services",
    Country: "Indonesia",
    Founded: 2004,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
  },
  {
    title: "Snaptags",
    valuation: 679565,
    HQ: "Caen",
    CEO: "Ainslee Caccavale",
    Domain: "Finance",
    Country: "France",
    Founded: 2012,
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
  },
  {
    title: "Photolist",
    valuation: 656633,
    HQ: "Macapo",
    CEO: "Fabien Gippes",
    Domain: "Technology",
    Country: "Venezuela",
    Founded: 2007,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  },
  {
    title: "Zazio",
    valuation: 663113,
    HQ: "San Martín de los Andes",
    CEO: "Delmer Spensley",
    Domain: "Finance",
    Country: "Argentina",
    Founded: 1985,
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    title: "Shuffletag",
    valuation: 1656834,
    HQ: "Miami",
    CEO: "Liana Mapson",
    Domain: "Public Utilities",
    Country: "United States",
    Founded: 1996,
    description:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
  },
  {
    title: "Roodel",
    valuation: 885295,
    HQ: "Kumalarang",
    CEO: "Carrol Brockbank",
    Domain: "Health Care",
    Country: "Philippines",
    Founded: 2012,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
  {
    title: "Skinder",
    valuation: 320591,
    HQ: "Venezuela",
    CEO: "Fidole Egiloff",
    Domain: "Public Utilities",
    Country: "Cuba",
    Founded: 2010,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  },
  {
    title: "Jaxspan",
    valuation: 1921357,
    HQ: "Kaeng Khoi",
    CEO: "Barry Dymocke",
    Domain: "Capital Goods",
    Country: "Thailand",
    Founded: 2009,
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
  },
  {
    title: "Voolia",
    valuation: 875835,
    HQ: "Silca",
    CEO: "Mario Signoret",
    Domain: "Basic Industries",
    Country: "Honduras",
    Founded: 1987,
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    title: "Yabox",
    valuation: 1605281,
    HQ: "Patos",
    CEO: "Letisha Shergill",
    Domain: "Basic Industries",
    Country: "Brazil",
    Founded: 2000,
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    title: "Gabtype",
    valuation: 673350,
    HQ: "Abreu e Lima",
    CEO: "Chery Reboulet",
    Domain: "n/a",
    Country: "Brazil",
    Founded: 2006,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    title: "Rhyloo",
    valuation: 1944256,
    HQ: "Sasnovy Bor",
    CEO: "Siward Dole",
    Domain: "n/a",
    Country: "Belarus",
    Founded: 2009,
    description:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    title: "Twitterbeat",
    valuation: 126274,
    HQ: "Kaji",
    CEO: "Katrine Kahen",
    Domain: "Health Care",
    Country: "China",
    Founded: 1993,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
  },
  {
    title: "Twitterlist",
    valuation: 1419130,
    HQ: "Wanmao",
    CEO: "Veronike Wilbore",
    Domain: "Public Utilities",
    Country: "China",
    Founded: 2000,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    title: "Yakidoo",
    valuation: 33781,
    HQ: "Kolumbug",
    CEO: "Phyllis McLevie",
    Domain: "n/a",
    Country: "Philippines",
    Founded: 2005,
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
  },
  {
    title: "Kayveo",
    valuation: 1986066,
    HQ: "Baoyang",
    CEO: "Esma Shimman",
    Domain: "Capital Goods",
    Country: "China",
    Founded: 1994,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
  },
  {
    title: "Wordpedia",
    valuation: 418062,
    HQ: "Chuangwang",
    CEO: "Arri Caught",
    Domain: "n/a",
    Country: "China",
    Founded: 2010,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  },
  {
    title: "Yozio",
    valuation: 1108048,
    HQ: "Habana del Este",
    CEO: "Cart Beushaw",
    Domain: "Public Utilities",
    Country: "Cuba",
    Founded: 1993,
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
  },
  {
    title: "Agimba",
    valuation: 1167791,
    HQ: "Ferrol",
    CEO: "June Beek",
    Domain: "Energy",
    Country: "Spain",
    Founded: 2002,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    title: "Oloo",
    valuation: 1027623,
    HQ: "Fernando Gutierrez Barrios",
    CEO: "Kial Caustick",
    Domain: "Basic Industries",
    Country: "Mexico",
    Founded: 2009,
    description: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    title: "Yombu",
    valuation: 98909,
    HQ: "Kanshi",
    CEO: "Dannye Vowell",
    Domain: "Technology",
    Country: "China",
    Founded: 2002,
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
  },
  {
    title: "Kamba",
    valuation: 677583,
    HQ: "Anton",
    CEO: "Gustave Retallick",
    Domain: "Consumer Services",
    Country: "Bulgaria",
    Founded: 1986,
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  },
  {
    title: "Katz",
    valuation: 1909913,
    HQ: "Saint-Louis du Sud",
    CEO: "Constance Gerardet",
    Domain: "Consumer Services",
    Country: "Haiti",
    Founded: 2011,
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
  },
  {
    title: "Snaptags",
    valuation: 694590,
    HQ: "Silgueiros",
    CEO: "Tadd Begbie",
    Domain: "Consumer Services",
    Country: "Portugal",
    Founded: 1996,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    title: "BlogXS",
    valuation: 1847767,
    HQ: "Fangshan",
    CEO: "Damian Aleksandrikin",
    Domain: "Health Care",
    Country: "China",
    Founded: 1996,
    description:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    title: "Shufflebeat",
    valuation: 1114084,
    HQ: "San Francisco de Coray",
    CEO: "Cornelius Letch",
    Domain: "Basic Industries",
    Country: "Honduras",
    Founded: 1992,
    description:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
];
