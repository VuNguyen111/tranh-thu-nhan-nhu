export async function getLetters() {
  const res = await fetch("/api/letters");

  if (!res.ok) {
    throw new Error("Không thể lấy danh sách thư.");
  }

  return res.json();
}