export async function fetchBooks() {
    const res = await fetch("https://opensheet.elk.sh/1lT4eJ8GMVCzxJl5wf2cUqI7YtGfax2ZQw2X8_XQB1-M/oplover5"); // Change the URL unless you want boring books (Pun Intended - I love books!)
    return res.json();
  }