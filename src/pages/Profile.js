import { Fragment } from "react";
import ProfileCard from "../component/ProfileCard";
import "./Profile.css";

export default function Profile() {

    const names = [
      {
        id: 1,
        name: "Nisrina Shofa Nadhifa",
        NIM: "211201191300902",
        img: "https://i.imgur.com/1q8kmHj.jpeg",
        github: "https://github.com/nsrndv",
        ig: "https://www.instagram.com/nsrndv/"
      }, 
      {
        id: 2,
        name: "Anadda Ferrell Ramadhan",
        NIM: "21120119130035",
        img: "https://i.imgur.com/q24j43C.jpeg",
        github: "https://github.com/anadda",
        ig: "https://www.instagram.com/ferrel.rmdhn/"
      }, 
      {
        id: 3,
        name: "Indriawan Muhammad Akbar",
        NIM: "21120119130070",
        img: "https://i.imgur.com/aaE5git.jpeg",
        github: "https://github.com/silumankadal",
        ig: "https://www.instagram.com/indriawanakbar/"
      }, 
      {
        id: 4,
        name: "M. Farhan Athaullah",
        NIM: "21120119130072",
        img: "https://i.imgur.com/g7zv2HN.jpeg",
        github: "https://github.com/hanndot",
        ig: "https://www.instagram.com/athaullahfarhan/"
      }];

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="profileCard"> 
          {names.map((item, index) => (
            <Fragment key={item.id}>
              <ProfileCard
                name={item.name}
                nim={item.NIM}
                img={item.img}
                github={item.github}
                ig={item.ig}
              />
              {names.length === index + 1 && <div style={{ marginBottom: 60 }} />}
            </Fragment>
          ))}
        </div>
      </div>
    );
  }