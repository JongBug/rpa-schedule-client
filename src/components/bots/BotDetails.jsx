import React from "react";
import BotsApi from "../../api/bots/botsApi";
import { Link } from "react-router-dom";

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const AllBots = () => (
  <div>
    <ul>
      {BotsApi.all().map(p => (
        <li key={p.botId}>
          <Link to={`/bot/${p.botId}`}>{p.botName}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AllBots;

// https://codesandbox.io/s/vVoQVk78
