# Dev Stack

Dev Stack is a responsive web application that helps developers explore different technologies and create their own development stack. Users can browse technologies, check their details, and add or remove technologies from their personal stack.

## Live Demo

Add your live website link here.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON
- HTML5
- CSS3

## Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, styling, language, and DevOps technologies.

### 2. Build Your Own Stack

Users can add technologies to their personal stack and remove them whenever they want.

### 3. Responsive Design

The website is fully responsive and works smoothly on desktop, tablet, and mobile devices.

## Project Structure


src/
├── assets/
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── technology-card.tsx
│   ├── technology-section.tsx
│   ├── your-stack.tsx
│   └── footer.tsx
├── types/
│   └── technology.ts
├── App.tsx
├── index.css
└── main.tsx

public/
└── technologies.json


### React Questions and Answers
1. What is JSX, and why is it used in React?

It is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses it to describe how the user interface should look.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data inside a component that can change over time, or I can say it is the memory of the component.

3. What does the useState hook do, and where did you use it in this project?

The useState hook creates and manages component state.

In this project, I used useState to store:

 -> The technology data
 -> The selected technologies in the stack
 -> The loading status

Example : const [stack, setStack] = useState<Technology[]>([]);


4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs side effects after rendering of a component.

I used it to fetch the technology data from technologies.json file when the application loads.


5. Why does every item in a .map() list need a unique key prop?

Because the key prop identifies each item in a list. It helps React to understand that which items were added, removed or changed.


6. What is conditional rendering? Show one place you used it.

Conditional rendering is showing different UI elements based on a condition.

In this project, I showed an empty stack message when no technology was selected:
{stack.length === 0 ? (
  <p className="text-sm text-gray-500">No technologies selected yet.</p>
) : (
  <div className="space-y-3">
    {/* Selected technologies */}
  </div>
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props.
A child can send something back to the parent by calling a function received through props.


