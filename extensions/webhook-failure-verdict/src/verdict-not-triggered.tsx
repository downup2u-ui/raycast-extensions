import { Detail, ActionPanel, Action } from "@raycast/api";

export default function VerdictNotTriggered() {
  return (
    <Detail
      markdown={`
# Webhook Not Triggered

## 🛑 Verdict
**STOP treating this as a webhook problem.**

## Structural fact
If no event is generated, no webhook can fire.  
This precedes delivery.

## Boundary
Webhook delivery systems cannot deliver nonexistent events.

## Responsibility
Event generation is owned by the sender system.

## What would change this verdict
- Verified event generation at the source
`}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser
            title="Open Full Checklist"
            url="https://webhookverdict.com/raycast/webhook-not-triggered?from=raycast"
          />
        </ActionPanel>
      }
    />
  );
}
