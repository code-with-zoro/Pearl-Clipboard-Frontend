# Online Clipboard — Backend

A backend service for an **online clipboard application** that allows users to temporarily store and retrieve text or images using a unique key.

The project supports regular and self-destructive clipboard entries, file storage through AWS S3, Redis caching, rate limiting, and Docker-based deployment.

## 🚀 Features

* 📝 Store and retrieve text content
* 🖼️ Upload and retrieve images
* 🔑 Access clipboard data using a unique key
* 💣 Self-destructive clipboard entries
* ☁️ Image storage using AWS S3
* ⚡ Redis caching for improved performance
* 🛡️ Rate limiting to protect the API from excessive requests
* 🐳 Fully containerized using Docker
* 🔧 Environment-based configuration for easier deployment

---

## 🏗️ Architecture

The application follows a layered backend architecture:

```text
Client
   │
   ▼
Controller
   │
   ▼
Service Layer
   │
   ├── Redis Cache
   │
   ├── Database
   │
   └── AWS S3
```

### Request Flow

1. The client sends text or an image to the backend.
2. The backend generates or stores the provided unique key.
3. Text data is stored in the database.
4. Images are uploaded to AWS S3.
5. Frequently accessed data can be served through Redis caching.
6. When content is retrieved, the backend returns the stored text or image URL.
7. If the clipboard entry is marked as **self-destructive**, it is deleted after retrieval.

---

## 🛠️ Tech Stack

| Technology  | Purpose                              |
| ----------- | ------------------------------------ |
| Java        | Core programming language            |
| Spring Boot | Backend framework                    |
| Spring Web  | REST API development                 |
| Redis       | Caching and rate limiting            |
| AWS S3      | Image/file storage                   |
| Docker      | Containerization                     |
| Maven       | Dependency management and build tool |

---

## 📂 Project Structure

```text
src
├── main
│   ├── java
│   │   └── ... 
│   │       ├── controller
│   │       ├── service
│   │       ├── repository
│   │       ├── model
│   │       ├── dto
│   │       ├── config
│   │       └── exception
│   │
│   └── resources
│       └── application.yml
│
└── test
    └── java
```

---

## 🔐 Environment Variables

The application uses environment variables for configuration.

Example configuration:

```env
SERVER_PORT=8081

REDIS_HOST=localhost
REDIS_PORT=6379

AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET=your_bucket_name
```

You can configure these values based on your local or production environment.

> Never commit sensitive credentials such as AWS access keys or secret keys to GitHub.

---

## 🐳 Running with Docker

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Build the Docker image

```bash
docker build -t online-clipboard-backend .
```

### Run the container

```bash
docker run -p 8081:8081 \
  -e REDIS_HOST=your_redis_host \
  -e REDIS_PORT=your_redis_port \
  -e AWS_ACCESS_KEY=your_access_key \
  -e AWS_SECRET_KEY=your_secret_key \
  -e AWS_REGION=your_aws_region \
  -e AWS_S3_BUCKET=your_bucket_name \
  online-clipboard-backend
```

---

## 🐳 Running with Docker Compose

The project can also be run using Docker Compose along with Redis.

```bash
docker compose up --build
```

This will start the required services defined in the `docker-compose.yml` file.

To stop the containers:

```bash
docker compose down
```

---

## ⚡ Redis

Redis is used to improve application performance and support features such as caching and rate limiting.

The Redis connection can be configured using:

```yaml
spring:
  data:
    redis:
      host: ${REDIS_HOST:localhost}
      port: ${REDIS_PORT:6379}
```

This allows the application to use local Redis during development while switching to a managed Redis service in production through environment variables.

---

## ☁️ AWS S3 Integration

Images uploaded through the application are stored in an AWS S3 bucket.

Instead of storing large image files directly inside the application, the backend stores the file in S3 and manages the associated file information.

This provides:

* Scalable file storage
* Separation between application logic and file storage
* Easier deployment
* Better handling of uploaded media

---

## 💣 Self-Destructive Mode

The application supports self-destructive clipboard entries.

When enabled, the stored content is automatically removed after it has been successfully retrieved.

This feature is useful for sharing temporary or sensitive information without keeping it permanently available.

---

## 🛡️ Rate Limiting

Rate limiting is implemented to prevent excessive requests and protect the API from abuse.

Redis is used to efficiently track and control request limits.

This helps ensure that the service remains stable even when receiving a large number of requests.

---

## 🔌 API Overview

### Store Clipboard Content

Stores text or image content and returns the information required to retrieve it later.

```text
POST /...
```

### Retrieve Clipboard Content

Retrieves stored content using its unique key.

```text
GET /...
```

Depending on the stored content type, the response may contain:

* Text content
* Image URL
* Clipboard metadata

If self-destructive mode is enabled, the content may be deleted after successful retrieval.

> Update the endpoint paths and request/response examples based on your actual API implementation.

---

## 🧪 Testing

The project includes tests for backend functionality.

Run the test suite using:

```bash
./mvnw test
```

Or, if Maven is installed globally:

```bash
mvn test
```

---

## ▶️ Running Locally

### Prerequisites

Make sure you have the following installed:

* Java 21 or the version configured for this project
* Maven
* Redis
* Docker *(optional)*

### Run the application

```bash
./mvnw spring-boot:run
```

Or:

```bash
mvn spring-boot:run
```

The backend will start on:

```text
http://localhost:8081
```

---

## 🌐 Deployment

The backend is designed to be deployed using environment variables.

For production deployment, configure:

* Redis connection details
* AWS credentials
* AWS S3 bucket configuration
* Server port

This makes the application portable across local development, Docker containers, and cloud deployment platforms.

---

## 🔮 Future Improvements

Some possible future improvements include:

* User authentication
* Clipboard expiration time
* Download support for uploaded files
* Support for additional file types
* Monitoring and logging
* API documentation using Swagger/OpenAPI
* Improved distributed rate limiting
* Background cleanup for expired clipboard entries

---

## 📖 What I Learned

Building this project helped me gain practical experience with:

* Designing REST APIs using Spring Boot
* Handling text and multipart file uploads
* Integrating AWS S3 for cloud-based file storage
* Using Redis for caching
* Implementing rate limiting
* Managing environment variables
* Containerizing a backend application with Docker
* Designing features such as temporary and self-destructive data storage
* Preparing an application for cloud deployment

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome.

If you find a bug or have an idea for improving the project, feel free to open an issue or submit a pull request.

---

## 👨‍💻 Author

**Garv Singh**

GitHub: https://github.com/code-with-zoro

---

⭐ If you found this project interesting, consider giving the repository a star!
