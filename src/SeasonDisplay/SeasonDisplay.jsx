import React from "react";
const seasonConfig = {
  summer: {
    text: "Nóng quá , Thèm vitaminC!",
    iconName: "sun",
  },
  winter: {
    text: "Trời ơi nó lạnh",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];
  const backGround = document.querySelector("body");
  backGround.classList.add(season);

  return (
    <div className="App">
      <i className={`fa-${iconName} fa`}></i>
      <h1>{text}</h1>
      <i className={`fa-${iconName} fa`}></i>
    </div>
  );
};

export default SeasonDisplay;
