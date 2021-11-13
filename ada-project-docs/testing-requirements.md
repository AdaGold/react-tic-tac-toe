# Testing Requirements

This project utilizes [the Jest library to test React apps](https://jestjs.io/docs/tutorial-react).

The tests should guide your development. The tests are not comprehensively testing all required features of the project. They should help you check if you're going in the right direction.

## Goal

The goal of introducing tests within this project is to practice reading them, running them, and doing independent research to work with them.

It is more important to implement all the required features than it is to get the tests to pass.

## Introduction

[Snapshot tests](https://jestjs.io/docs/snapshot-testing) are a kind of test that focus on validating the correctness of _UI_.

Snapshot Tests | Unit Tests
--- | ---
Validate the correctness of how UI renders | Validate the correctness of a small unit, such as a function
Can be written in JavaScript, using Jest | Can be written in JavaScript, using Jest
Can simulate rendering one or more components | Can simulate invoking one or more functions

### Running Tests

We run the provided tests with this command:

```bash
$ yarn test
```

Running tests with this command puts us in _watch mode_. When running tests in _watch mode_, the terminal window becomes dedicated to _watching for code changes_ and then _re-running the tests after each code change_.

When we run tests, the output will show our test passes, failures, warnings, etc.

In _watch mode_, we can use the following commands inside the terminal to control our terminal window:

```
› Press a to run all tests.
› Press f to run only failed tests.
› Press q to quit watch mode.
```

To stop running the tests while in watch mode, we press `q`.

### Skipped Test Syntax

Usually, when we run tests, we run the entire test suite. Using the Jest library, we can skip running individual tests.

Our tests are comprised of `describe` blocks and `test` blocks.

`test` blocks that begin with this `test.skip` syntax are skipped:

```js
    test.skip('some test description', () => {
```

To stop skipping this test, we can remove the `.skip`:

```js
    test('some test description', () => {
```

### Running Individual Tests

Instead of running the entire test suite, we can run one test file at a time. This is helpful when we need to focus on running one set of tests.

We run individual test files by providing a relative path to the test file.

For example, to run the `Square.test.js` file, we should run:

```bash
$ yarn test src/components/Square.test.js
```

**We should always run tests from the project root directory**. Unintended consequences happen if we `cd` into another folder and run tests there.

## Reminder

Recall that our goal for using tests within this project is to practice reading them, running them, and doing independent research to work with them.

Running tests should help us check if we're going in the right direction. It is more important to implement all the required features than it is to get the tests to pass.

## Wave 1

The wave 1 tests exist in the files:

- `src/components/Board.test.js`
- `src/components/Square.test.js`

The wave 1 tests verify that:

- The `Square` and `Board` components are rendered and present on the screen
- The `Square` component displays either an `"x"`, an `"O"`, or an empty string `""`.

## Wave 2

The wave 2 tests exist in all three test files:

- `src/App.test.js`
- `src/components/Board.test.js`
- `src/components/Square.test.js`

They are skipped by default. Modify the syntax to unskip them.

The wave 2 tests verify that:

- Clicking on a square makes an `"X"` or `"O"` appear.
- In the `Square` component, the `prop` named exactly `onClickCallback` is a function. When the `Square` is clicked, the `onClickCallback` function is called.

### Hints

- If the tests cannot find an element, consider checking the element selectors that the test use. Then, modify your components to match the selectors, so that the tests can find the right element.

## Wave 3

The wave 3 tests only exist in `src/App.test.js`.

They are skipped by default. Modify the syntax to unskip them.

The wave 3 tests verify that:

- If x wins, the text "Winner is x" appears
- If o wins, the text "Winner is o" appears
