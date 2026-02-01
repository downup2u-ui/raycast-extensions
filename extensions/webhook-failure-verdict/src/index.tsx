import { List, ActionPanel, Action } from "@raycast/api";
import { VERDICTS } from "./verdicts";
import VerdictNotTriggered from "./verdict-not-triggered";
import VerdictDeliveredButIgnored from "./verdict-delivered-but-ignored";

export default function Command() {
  return (
    <List navigationTitle="Webhook Failure Verdict" searchBarPlaceholder="Select a webhook failure scenario…">
      {VERDICTS.map((v) => (
        <List.Item
          key={v.key}
          title={v.title}
          subtitle={v.subtitle}
          actions={
            <ActionPanel>
              <Action.Push
                title="Open Verdict"
                target={v.key === "webhook-not-triggered" ? <VerdictNotTriggered /> : <VerdictDeliveredButIgnored />}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
