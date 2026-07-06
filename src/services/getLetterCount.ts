export async function getLetterCount() {
  const response = await fetch("/api/letters/count");

  if (!response.ok) {
    return 0;
  }

  return response.json();
}