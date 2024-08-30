export const logEvent = (event: Record<string, any>) => {
  const key = Object.keys(event)[0];
  if (key) {
    console.log(`Event: ${key}`);
    if (Array.isArray(event[key].messages)) {
      const lastMsg = event[key].messages[event[key].messages.length - 1];
      console.log(
        {
          role: lastMsg._getType(),
          content: lastMsg.content,
        },
        "\n"
      );
    } else {
      console.log(
        {
          role: event[key].messages._getType(),
          content: event[key].messages.content,
        },
        "\n"
      );
    }
  }
};

export const logStateUpdate = (newBuildup: string, newPunchline: string) => {
  console.log(
    "Updating state to:",
    {
      buildup: newBuildup,
      punchline: newPunchline,
    },
    "\n"
  );
};

export const logLastMessageToolCalls = (lastMessage: Record<string, any>) => {
  console.log("Last message tool calls:", {
    name: lastMessage.tool_calls[0].name,
    args: lastMessage.tool_calls[0].args,
  });
};
