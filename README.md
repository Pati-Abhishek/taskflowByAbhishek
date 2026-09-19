# TaskFlow

A modern, responsive, and lightweight task management application built with **Angular**, **TypeScript**, and modern CSS. TaskFlow helps users organize their daily workflow with intuitive categorization, priority indicators, due date tracking, and client-side data persistence.

---

## Features

- **Full Task Lifecycle (CRUD):** Easily create, view, complete, and delete tasks.
- **Priority Management:** Categorize tasks into **Low**, **Medium**, and **High** priority levels with distinct color-coded badges.
- **Due Date Scheduling:** Set deadlines for tasks to keep track of upcoming deliverables.
- **Dynamic Filtering:** Filter tasks instantly across **All**, **Active**, and **Completed** states.
- **Local Persistence:** Retains task state seamlessly across browser sessions using `localStorage`.
- **Responsive UI:** Clean, mobile-friendly interface designed with accessibility and performance in mind.
- **Standalone Architecture:** Powered by modern Angular standalone components for lean and modular architecture.

---

## Tech Stack

- **Framework:** [Angular](https://angular.dev/) (Standalone Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Modern CSS (Flexbox / CSS Grid, CSS Variables)
- **Build Tool:** Angular CLI / Vite
- **Storage:** Browser `localStorage` API

---

## Getting Started

Follow these instructions to get a local copy up and running on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.x, v20.x, or newer)
- **npm** (v9.x or newer)
- **Angular CLI** (optional, or use `npx`):
  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pati-Abhishek/taskflowByAbhishek.git
   cd taskflowByAbhishek
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

## Running the Application

1. **Start the local development server:**
   ```bash
   npm start
   ```
   *(or run `ng serve`)*

2. Open your browser and navigate to:
   ```text
   http://localhost:4200/
   ```

The application will automatically reload whenever you modify any source files.

---

## Project Structure

```text
taskflowByAbhishek/
├── public/                 # Static assets and icons
├── src/
│   ├── app/
│   │   ├── app.config.ts   # Application configuration and providers
│   │   ├── app.ts          # Core task state, logic, and localStorage handling
│   │   ├── app.html        # Main application template and layout
│   │   └── app.css         # Custom styling, badges, and responsive rules
│   ├── index.html          # Root HTML template
│   ├── main.ts             # App bootstrap entry point
│   └── styles.css          # Global styles
├── angular.json            # Angular CLI configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode at `http://localhost:4200` |
| `npm run build` | Builds the project for production inside the `dist/` directory |
| `npm test` | Executes unit tests via Karma / Web Test Runner |

---

## Contributing

Contributions are always welcome! If you'd like to improve TaskFlow:

1. Fork the Project (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

**Abhishek Pati**  
- GitHub: [@Pati-Abhishek](https://github.com/Pati-Abhishek)