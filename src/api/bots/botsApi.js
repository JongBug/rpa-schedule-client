const BotsApi = {
  bots: [
    { botId: 1, botName: "Ben Blocker", position: "G" },
    { botId: 2, botName: "Dave Defender", position: "D" },
    { botId: 3, botName: "Sam Sweeper", position: "D" },
    { botId: 4, botName: "Matt Midfielder", position: "M" },
    { botId: 5, botName: "William Winger", position: "M" },
    { botId: 6, botName: "Fillipe Forward", position: "F" }
  ],
  all: function() {
    return this.bots;
  },
  get: function(id) {
    const isBot = p => p.botId === id;
    return this.bots.find(isBot);
  }
};

export default BotsApi;
