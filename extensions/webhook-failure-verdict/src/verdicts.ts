export type VerdictKey = "webhook-not-triggered" | "webhook-delivered-but-ignored";

export const VERDICTS = [
  {
    key: "webhook-not-triggered",
    title: "Webhook Not Triggered",
    subtitle: "Event generation verdict",
  },
  {
    key: "webhook-delivered-but-ignored",
    title: "Webhook Delivered But Ignored",
    subtitle: "Receiver handling verdict",
  },
] as const;
