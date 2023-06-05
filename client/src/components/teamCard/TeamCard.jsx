import React from "react";
import { API_URL } from "../../http";

const TeamCard = ({ filename, name, info, blockStyles }) => {
  return (
    <div className="team-card">
      <img
        src={`${API_URL}/images/${filename}`}
        alt=""
        className="team-card__image"
      />
      <h3
        className="subtitle"
        style={{
          color: blockStyles?.nameColor,
          textAlign: blockStyles?.nameAlign,
        }}
      >
        {name}
      </h3>
      <p
        className="paragraph"
        style={{
          color: blockStyles?.infoColor,
          textAlign: blockStyles?.infoAlign,
        }}
      >
        {info}
      </p>
    </div>
  );
};

export default TeamCard;
