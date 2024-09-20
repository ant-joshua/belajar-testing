describe("Testing Post API", () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const notFoundUrl = "https://jsonplaceholder.typicode.com/posts/99999";

  test("Status Code is 200", async () => {
    const a = await fetch(url);
    const b = await fetch(url);
    expect(response.status).toBe(200);
  });

  test("Status Code is 404", async () => {
    const response = await fetch(notFoundUrl);
    expect(response.status).toBe(404);
  });

  test("Response is JSON", async () => {
    const response = await fetch(url);
    const data = await response.json();
    expect(data).toBeDefined();
  });
});
