export const GemailConnectionF = async () => {
  console.log("Sending GemailConnectionF Start...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Sending GemailConnectionF End...");
};

export const SlackNotificationF = async () => {
  console.log("Sending SlackNotificationF Start...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Sending SlackNotificationF End...");
};

export const GoogleDriveActionF = async () => {
  console.log("Interacting with GoogleDriveActionF Start...");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("Interacting with GoogleDriveActionF End...");
};

export const NotionEntryF = async () => {
  console.log("Creating NotionEntryF Start...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Creating NotionEntryF End...");
};

export const DiscordMessageF = async () => {
  console.log("Posting message to DiscordMessageF Start...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Posting message to DiscordMessageF End...");
};

export const TconnectTelegramF = async () => {
  console.log("Sending TconnectTelegramF Start...");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("Sending TconnectTelegramF End...");
};

export const ConditionCheckF = async () => {
  console.log("Evaluating ConditionCheckF Start...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Evaluating ConditionCheckF End...");
};

export const TriggerEventF = async () => {
  console.log("TriggerEventF Start...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("TriggerEventF End...");
};

export const ActionEventF = async () => {
  console.log("Executing ActionEventF Start...");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("Executing ActionEventF End...");
};

export const WaitEventF = async () => {
  console.log("WaitEventF Start...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("WaitEventF End...");
};

export const GoogleCalendarEventF = async () => {
  console.log("Creating GoogleCalendarEventF Start...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Creating GoogleCalendarEventF End...");
};

export const CustomWebhookEventF = async () => {
  console.log("Sending data via CustomWebhookEventF Start...");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("Sending data via CustomWebhookEventF End...");
};

export const TgetRecentMessageF = async () => {
  console.log("Fetching recent message from Telegram...");
  try {
    const response = await fetch("/api/telegram/getRecentMessage", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Telegram Recent Message Response:", data.message?.text);
    return data.message?.text || "No new messages found.";
  } catch (error) {
    console.error("Error fetching recent message:", error);
    throw error;
  }
};

export const TsendMessageF = async (message: string) => {
  console.log("Sending message to Telegram:", message);
  try {
    const response = await fetch("/api/telegram/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Telegram Send Message Response:", data.result.text);
    return data.result.text;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const CopenaiResponseF = async (message: string) => {
  console.log("Fetching OpenAI response with:", message);
  try {
      const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("OpenAI Response:", data.response);
      return data.response || "No response text found.";
  } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      throw error;
  }
};
