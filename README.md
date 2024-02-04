# React Hook Form: 3SC Party Registry Form Experimentation

## Description

This repository delves into the world of React Hook Form, exploring its versatility in building different versions of a Party Registry form. We'll embark on a journey through three distinct implementations, each showcasing the library's power and flexibility:

1. **Simple Guest Name Form (Pure HTML):** Our baseline, a straightforward HTML form capturing guest names. While functional, it lacks the interactivity and validation benefits of pure html.
2. **Simple Guest Name Form (React Hook Form):** Level up your form with React Hook Form! This version leverages the library's intuitive hooks for efficient form management, validation, and error handling.
3. **Nested Guest Form with Dietary & Plus One Options (React Hook Form Context Provider):** Embark on the most intricate form exploration. Utilizing the Context Provider, we'll create a nested structure to manage complex data like dietary preferences and a list of plus ones using `useFieldArray` hook.

## Why React Hook Form?

- **Ease of Use:** The simple yet powerful API enables you to build robust forms without boilerplate code, making it a dream for developers of all levels.
- **Flexible Validation:** Define validation rules in a declarative manner, ensuring data integrity and providing meaningful feedback to users.
- **Built-in Error Handling:** Seamlessly manage validation errors, displaying them to users in a clear and user-friendly way.
- **Data Synchronization:** Keep your form data in sync with your application state without manual effort.
- **Context Provider Integration:** Handle complex form structures gracefully, making React Hook Form an ideal choice for nested forms and intricate data relationships.

### Getting Started

1. **Clone the Repository:** Use `git clone https://github.com/miladehghani/react-form-tutorial` to get started.
2. **Install Dependencies:** Run `npm install`to install all required packages.
3. **Start the Development Server:** Use `npm run dev` to launch the development server and access the application.

#### Branches

- Master: This branch contains only the essential tools of the project, including libraries and base styling. Implement mentioned features when you are ready.
- Develop: This branch contains all implemented features, serving as a reference for learners.

#### Explore the Code

Each form version resides in its own separate folder within the `src` directory, checkout to `develop` branch and explore:

- `src/page/simple/pure-html-form.tsx`
- `src/page/simple/react-hook-form.tsx`
- `src/page/simple/react-hook-form-with-context.tsx`
- `src/page/nested/react-hook-form-with-context.tsx`

Dive into each folder to examine the implementation and gain hands-on experience with React Hook Form in different scenarios.

## Contributing

We welcome contributions to this project! Feel free to fork the repository, make changes, and submit pull requests.
