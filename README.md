Вибач за це! Ось весь текст у одному блоці:

# Widgets

This project is built with [Next.js](https://nextjs.org/) and TypeScript. It also includes state management with Redux, UI components from Blueprint.js, and uses Tailwind CSS for styling.

## Getting Started

### Prerequisites

Ensure you have Node.js (v16 or later) installed. You can download it from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone <repository-url>

2.	Navigate into the project directory:

cd widgets

3.	Install the dependencies:

npm install


### Running the Development Server

To start the development server:

npm run dev

Open http://localhost:3000 in your browser to view the application.

Building for Production

To create a production build:

npm run build

After building the project, you can start the production server:

npm start

Linting and Formatting

•	To run the linter and automatically fix any issues:

npm run lint:fix


•	To format the code using Prettier:

npm run format



### Running with Docker

You can also run this project using Docker.

Building the Docker Image

1.	Build the Docker image:

docker build -t widgets .

2.	Run the Docker container:

docker run -p 3000:3000 widgets



The app will now be running at http://localhost:3000.

Dockerfile Explanation

	•	FROM node:16-alpine: Uses Node.js 16 in a lightweight Alpine Linux environment.
	•	WORKDIR /app: Sets the working directory inside the container.
	•	COPY package*.json ./: Copies the package.json and package-lock.json files into the container.
	•	RUN npm install: Installs all project dependencies.
	•	COPY . .: Copies all files from the current directory into the container.
	•	RUN npm run build: Builds the Next.js app.
	•	EXPOSE 3000: Exposes port 3000 to access the app.
	•	CMD ["npm", "start"]: Starts the application.

Technologies Used

	•	Next.js
	•	TypeScript
	•	Redux Toolkit
	•	Blueprint.js
	•	Tailwind CSS
```
