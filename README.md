# React Tic-Tac-Toe

## Please Read First!

The digital campus' version of Tic-Tac-Toe differs from the original in the following ways:
- We will *not* be using `main` branch. Follow step 6 in the **One-Time Project Setup** to change branches.
- Wave 1 has been completed for you; however, it would help you understand the flow of data by reviewing the code written for Wave 1.
- Wave 3's `checkForWinner` function has been created for you; however, read through Wave 3 instructions to figure out how and where to use it.

## Skills Assessed

- Following directions and reading comprehension
- Using git as part of the development workflow
- Demonstrating understanding of the front-end layer, and the relationship between user interaction and the UI

Working with the React JS library:

- Sending data to nested components through `props`
- Receiving and using `props` within a component
- Initializing and using state within a component
- Passing callback functions to child components and use them to update state
- Practice independent research
- Practice reading and running tests

## Goal

Building a game is an exciting coding challenge! Game development requires us to practice skills in:

- Handling user events
- Updating the UI
- Updating the state of the game

Our goal is to create a playable version of Tic-Tac-Toe in the browser.

In Tic-Tac-Toe, the game board is a 3x3 grid of squares.

Each square can be marked with an "X," an "O," or it can remain blank. All squares start blank.

Player "X" and Player "O" take turns marking blank squares. Within the 3x3 grid, if the most recent player turn creates a line of three matching marks (horizontal, vertical, or diagonal), then that player wins.

If there are no remaining blank squares and no winner, then the game ends.

We can read more about the rules of Tic-Tac-Toe [in this rules reference](https://www.thesprucecrafts.com/tic-tac-toe-game-rules-412170).

### Demo

[A demo of our project goal is available online](https://adagold.github.io/react-tic-tac-toe/)!

## How to Complete and Submit

Go through the waves one-by-one and build the features of this API.

At submission time, no matter where you are, submit the project via Learn.

## One-Time Project Setup

Follow these directions once at the beginning of your project:

1. Fork the project repo to your own GitHub account

2. Navigate to your projects folder named `projects`

```bash
$ cd ~/Developer/projects
```

3. Clone the project into your `projects` folder. This command makes a new folder called `react-tic-tac-toe`, and then puts the project into this new folder:

```bash
$ git clone ...
```

Use `ls` to confirm there's a new project folder

4. Move your location into this project folder

```bash
$ cd react-tic-tac-toe
```

5. Install the dependencies that are already determined and defined for us.

```bash
$ yarn install
```

We can run `yarn install` multiple times safely, but we only need to do this once in the beginning.

The file `package.json` contains details about our project, the scripts available, and the dependencies needed. We can inspect this file when we are curious about the details of our dependencies.

6. We will not being using `main` branch. Make sure you are working from `digital-starter` by running:

```bash
$ git checkout digital-starter
```

7. Follow the directions in the "Getting Started" section.

8. Follow the directions in the "Project Requirements" section.

## Project Development Workflow

1. To run the server, use this command:

```bash
$ yarn start
```

Then visit `localhost:3000` in the browser.

2. Follow the project requirements below.

3. After finishing each feature, capture your work in a git commit with a git message that describes what was implemented or changed.

## Getting Started

### Provided Components

The project includes the following components with partial implementations. Before beginning the project, read through the contents of these files once.

Component | Responsibility
--- | ---
`App` | Container component. Responsible for holding data about the game state (X's and O's marked and their locations), player information, determining the winner, and rendering the board.
`Board` | Presentational component. Responsible for rendering a 3x3 grid of squares appropriately.
`Square` | Presentational component. Responsible for rendering an "X," "O," or nothing (empty string). When it's clicked, it should update the game's state.

### Provided CSS Files

Each of the CSS files contains classes that are relevant to the appropriate component. These are the styles used in [the project demo](https://adagold.github.io/react-tic-tac-toe/). It's not required to use these classes, and you are allowed to modify them or add styles.

- `components/App.css`
- `src/components/Board.css`
- `src/components/Square.css`

### Provided Test Files

This project utilizes [the Jest library to test React apps](https://jestjs.io/docs/tutorial-react).

Each project wave describes how to use these test files.

The included files are the following:

- `src/App.test.js`
- `src/components/Board.test.js`
- `src/components/Square.test.js`

## Project Requirements

The three waves can be summarized as follows:

1. Render a board. The board should render a 3x3 grid of squares. The squares should display their value.
1. Handle click functionality in squares. When a user clicks on a square, the game state must update.
1. Implement logic that checks the game state if there is a winner, and their name shows up.

## Wave 1: Rendering `Board` and `Squares`

In this wave, fulfill the following requirements.

### `App`

The `App` component should:

- Represent the state of the game board in a 2D array of objects
  - A helper function named `generateSquares` is already implemented. You can use this to create the initial value of this state.
- Render a `Board`

The functionality of updating the game state will be covered in wave 2.

### `Board`

The `Board` component should render nine `Square` components, passing the appropriate information from the game state to each `Square`.

To do this, implement the function `generateSquareComponents`. This function should take in a 2D array, and transform it into a 1D array of nine `Square` components. A 1D array of nine `Square` components is better for the `Board` to render!

### `Square`

The `Square` component should display the `value` passed into it.

The `Square` component should also hold an `id`. `Square` doesn't need to render this ID, but it will be used when handling events!

The functionality of handling click events will be covered in wave 2.

### Hints

- Take time to understand the shape of the 2D array created by `generateSquares`. Take notes on it, so you can refer to it throughout the project.
- Use PropTypes to help determine the required props for each component. In particular, check `Square`.

### Testing Requirement

Follow the [testing directions in this project doc](./ada-project-docs/testing-requirements.md) to read more.

## Wave 2: Add Click Functionality

When a user clicks on a square, it should set the square's value to `"X"` or `"O"`, depending on the current player's turn. This should update the game's state.

To facilitate this feature, fulfill the following requirements:

- In `App`, create a method that updates the game state appropriately
- The PropTypes of `Board` state that there is a required prop named `onClickCallback`
  - The value of this prop must be a function
- The PropTypes of `Square` state that there is a required prop named `onClickCallback`
  - The value of this prop must be a function

### Hints

- When updating the game state, there needs to be a way to identify the exact `Square` that is being updated. Try utilizing the `Square`'s ID value.

### Tests

Follow the [testing directions in this project doc](./ada-project-docs/testing-requirements.md) to read more.

## Wave 3: Check For Winner

When a user places an "X" or "O" mark, the game should check if there is a winner. If a mark creates a line of three matching marks (lines can be horizontal, vertical, or diagonal), then:

- The player who made the mark becomes the winner.
- The winner's "name" ("X" or "O") appears in the heading.
- All squares become unclickable.

The game is a tie if there are no more available squares and no winner has been declared. At this point, all squares are unclickable.

To accomplish this:

- Implement the function `checkForWinner` in the `App` component
- Ensure that the winner's name appears

### Hints

- Begin implementing `checkForWinner` by creating a "brute force" solution first

### Tests

Follow the [testing directions in this project doc](./ada-project-docs/testing-requirements.md) to read more.

## Optional Enhancements

Should a project be completed before submission, and there is a desire for more practice, check out our [list of optional enhancements](./ada-project-docs/optional-enhancements.md)!
