export interface Letter {
  id: number;
  recipient: string;
  message: string;
  color: string;

  status: "pending" | "approved" | "rejected";

  createdAt: string;
}