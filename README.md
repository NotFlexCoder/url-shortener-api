# 🔗 URL Shortener API

This lightweight Node.js API built with Express lets you shorten any URL and retrieve the original using a unique ID. Ideal for creating basic link shorteners, redirect tools, or integrating with other apps.

## 🚀 Features

- ✂️ Shorten URLs using a UUID-based short ID.
- 🔄 Retrieve and redirect to the original URL with the `id` parameter.
- 📦 In-memory data storage for fast access (great for small-scale or test projects).
- 🧪 Debug all stored links via `/data` endpoint.

## 🛠️ Requirements

- Node.js v14 or higher.
- Express installed (`npm install express uuid`).

## 📡 Usage

1. **Setup**:

   - Save the following code to a file, e.g. `index.js`.

2. **Install dependencies**:
   ```bash
   npm install express uuid
   ```

3. **Run your server**:
   ```bash
   node index.js
   ```

4. **Test the API**:
   - Shorten a URL:
     ```
     http://localhost:3000/?url=https://example.com
     ```
   - Access a shortened URL:
     ```
     http://localhost:3000/?id=abcd1234
     ```
   - View all stored URLs:
     ```
     http://localhost:3000/data
     ```

## 📄 Example Responses

**Shorten a URL**:
```json
{
  "status": "success",
  "message": "URL shortened successfully",
  "short_url": "http://localhost:3000/?id=abcd1234",
  "id": "abcd1234",
  "original_url": "https://example.com"
}
```

**Redirect with ID (if valid)**:  
🔁 Redirects to the original URL.

**Invalid or Missing Input**:
```json
{
  "status": "error",
  "message": "Use ?url= to shorten or ?id= to retrieve original URL"
}
```

## ⚠️ Notes

- Data is stored in memory and resets on server restart.
- This is ideal for demos, testing, or personal use—not production-grade.

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/NotFlexCoder/blob/main/LICENSE) file for details.
