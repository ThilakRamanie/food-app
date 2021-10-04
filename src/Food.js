import "./Food.css";
import React, { useEffect, useState } from "react";

const Food = () => {
  const classRef = React.useRef(null);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState("nochange");
  const icons = [
    "",
    "fa-egg",
    "fa-stroopwafel",
    "fa-cheese",
    "fa-hotdog",
    "fa-drumstick-bite",
    "fa-apple-alt",
    "fa-ice-cream",
    "fa-fish",
    "fa-cookie",
    "fa-seedling",
  ];
  let timeout = "";

  useEffect(() => {
    const interval = setInterval(() => {
      setChange("change");

      if (count >= icons.length - 1) {
        setCount(0);
        setChange("nochange");
      } else {
        setCount(count + 1);
        timeout = setTimeout(() => {
          setChange("nochange");
        }, 900);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [count, change]);

  // useEffect(() => {
  //   // const icons = classRef.current.querySelectorAll("section-1-icons");

  //   const interval = setInterval(() => {
  //     i++;
  //     console.log(classRef);
  //     console.log(i, count);
  //     const icon = classRef.current;
  //     icon.children[i].classList.remove("change");
  //     if (i > icons.length) {
  //       icon.children[1].classList.add("change");
  //       i = 1;
  //     } else {
  //       icon.children[i].classList.add("change");
  //       i++;
  //     }
  //   }, 1000);
  //   setCount(count + 1);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [classRef.current]);
  return (
    <div className="container">
      <section className="section-1">
        <h1 className="section-heading">Variety of Foods</h1>
        <div className="section-1-icons">
          <i className={`fas ${icons[count]} ${change}`} ref={classRef}></i>
        </div>
      </section>
    </div>
  );
};

export default Food;
