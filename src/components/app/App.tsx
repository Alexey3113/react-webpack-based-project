import { FC } from "react";

import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import image from "@/assets/nature.png";
import image1 from "@/assets/32620-7-nature-photo.jpg";
import Image from "@/assets/circle.svg";

const App: FC = () => {
  return (
    <div data-testid="ContainerApp" className={classes.container}>
      <h1 className={classes.value}>Project</h1>
      <h3>PLATFORM={__PLATFORM__}</h3>
      <div>
        <img width={100} height={100} src={image} alt="" />
        <img width={100} height={100} src={image1} alt="" />
        <Image fill={"red"} width="100px" />
      </div>
      <Link to="/">Главная</Link>
      <br />
      <Link to="/shop">Магазин</Link>
      <Outlet />
    </div>
  );
};

export default App;
