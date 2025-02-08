# HNG12 Stage 1 Backend Task - Number Classification API

## 📋 Project Description
This API is developed as part of the HNG12 Stage 1 backend task. It classifies numbers based on interesting mathematical properties and provides a fun fact about each number.

### Features:
- Checks if a number is **prime** or **perfect**.
- Identifies **Armstrong numbers** and parity (**odd**/**even**).
- Calculates the **sum of the digits**.
- Retrieves a **fun fact** from the [Numbers API](http://numbersapi.com/#42).

## 🚀 Live Demo
**[API Endpoint](<your-deployed-api-url>)**

## ⚙️ Technology Stack
- **Programming Language:** <Your Chosen Language (e.g., JavaScript/Node.js, Python, PHP, etc.)>
- **Framework (if applicable):** <Framework Name>
- **Deployment Platform:** <Deployment Platform (e.g., Vercel, Render, Railway, etc.)>

## 🗂️ Project Structure
```
├── index.js        # Main API logic
├── .gitignore
├── README.md
└── package.json / requirements.txt (depending on the language)
```

## ⚡ API Documentation

### **GET /api/classify-number?number=371**
- **Description:** Classifies the provided number and returns its mathematical properties.
- **Endpoint:** `GET <your-deployed-api-url>/api/classify-number?number=371`
- **Response Format:** `application/json`

### ✅ Successful Response (200 OK)
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### 🔴 Error Response (400 Bad Request)
```json
{
  "number": "alphabet",
  "error": true
}
```

## 📊 Property Classification Rules
- **Armstrong:** Verified by checking if the sum of its digits raised to the power of the number of digits equals the number.
- **Odd/Even:** Determined using modulo operation.
- **Prime:** Verified if the number has exactly two distinct positive divisors.
- **Perfect:** Verified if the sum of its proper divisors equals the number.

### 🔀 Possible Property Combinations
- `["armstrong", "odd"]` - Armstrong and odd number.
- `["armstrong", "even"]` - Armstrong and even number.
- `["odd"]` - Odd number, not Armstrong.
- `["even"]` - Even number, not Armstrong.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/number-classification-api.git
cd number-classification-api
```

### 2️⃣ Install Dependencies
For **Node.js:**
```bash
yarn install  # or npm install
```

### 3️⃣ Run the Project Locally
For **Node.js:**
```bash
yarn start  # or npm start
```

### 4️⃣ Test the API
Using `curl`:
```bash
curl <http://localhost:port/api/classify-number?number=371>
```
Or with [Postman](https://www.postman.com/).

---

## 🌍 Deployment
The API is deployed and publicly accessible via:
**[Deployed API](<your-deployed-api-url>)**

## ⏱️ Performance
- **Response Time:** <500ms
- **CORS:** Properly configured to allow cross-origin requests.

## 📌 Related Link
- https://hng.tech/hire/nodejs-developers

---

## 🤝 Contributing
Pull requests are welcome. For significant changes, please open an issue first to discuss proposed changes.

