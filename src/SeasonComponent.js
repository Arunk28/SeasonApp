import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};
const SeasonConfig = {
  Winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
  Summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
};
const SeasonComponent = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon`}></i>
    </div>
  );
};

export default SeasonComponent;
