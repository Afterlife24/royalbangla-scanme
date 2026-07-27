//fatching the table number from url

import React, { useEffect, useState } from "react";
import Mainmenu from "../../components/Mainmenu/Mainmenu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTableNum } from "../../components/context/TableNumContext";
import { generalpics,loadMenuData } from "../../assets/Suraj Menu/pictures";
import { icons } from "../../assets/icons/icons";


function Landingpage() {
  const { tableNum, setTableNum } = useTableNum();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenuData()
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      });

    if (!tableNum) {
      const params = new URLSearchParams(window.location.search);
      const tableNumValue = params.get("table_num");
      if (tableNumValue) {
        setTableNum(parseInt(tableNumValue, 10));
        console.log(`Table Number: ${tableNumValue}`);
      }
    }
  }, [tableNum, setTableNum]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-brand">
          <img src={generalpics.suraj_img} alt="surajlogo" className="loading-logo" />
          <h1 className="loading-title">Royal Bangla</h1>
          <p className="loading-subtitle">Preparing your menu...</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-powered">
          <span>Propulsé par</span>
          <img src={icons.scanme_logo} alt="scanmelogo" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Mainmenu items={filteredItems} searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default Landingpage;
