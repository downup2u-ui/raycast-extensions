import { Detail, ActionPanel, Action } from "@raycast/api";

export default function VerdictDeliveredButIgnored() {
  return (
    <Detail
      markdown={`
# Webhook Delivered But Ignored

## 🛑 Verdict
**STOP retrying webhook delivery.**

## Structural fact
The webhook request was delivered successfully.

## Boundary
Delivery success does not imply correct processing.

## Responsibility
The receiver system owns handling and acknowledgment logic.

## What would change this verdict
- Verified receiver-side processing
- Explicit acknowledgment from the receiver
`}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser
            title="Open Full Checklist"
            url="https://webhookverdict.com/raycast/webhook-delivered-but-ignored?from=raycast"
          />
        </ActionPanel>
      }
    />
  );
}
