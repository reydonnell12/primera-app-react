import rey_atanagildo from "./img/rey_atanagildo.png";
import rey_leogivildo from "./img/rey_leogivildo.png";
import rey_sisebuto from "./img/rey_sisebuto.png";

import "./App.css";
export const App = () => {
  let names = ["rey_sisebuto", "rey_leogivildo", "rey_atanagildo"];

  return (
    <>
      <div className="im">
        <img src={rey_sisebuto} alt={names[2]} className="im" />
        <p>{names[0]}</p>
      </div>

      <div className="im">
        <img src={rey_leogivildo} alt={names[1]} className="im" />
        <p>{names[1]}</p>
      </div>

      <div className="im">
        <img src={rey_atanagildo} alt={names[0]} className="im" />
        <p>{names[2]}</p>
      </div>
    </>
  );
};
