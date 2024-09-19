import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel";
// ลบการนำเข้า Card
// import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Carousel />
      <br />
      {/* ลบการใช้งาน Card */}
      {/* <Card /> */}
      <br />
    </>
  );
}
