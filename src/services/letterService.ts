export interface CreateLetterData {
  recipient: string;
  message: string;
  color: string;
}

export async function createLetter(data: CreateLetterData) {
  const response = await fetch("/api/letters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return {
    data: response.ok ? result : null,
    error: response.ok ? null : result,
  };
}