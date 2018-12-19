# Gatsby + Storybook + TypeScript

This is an baseline application which shows how to get Gatsby, Storybook, and TypeScript all running together.

Additionally:

- CSS Modules are configured for use. The modules live right next to their associated React files but end in `.module.css` instead of `.tsx`.
- Prettier is set up and ready to go. You may want to ensure that your text editor has a Prettier plugin or extension configured to "format on save" to ensure it runs when needed.

```sh
# Install the gatsby cli globally:
npm install -g gatsby

# Install local dependencies:
npm install

# Start gatsby:
npm start

# In a new terminal window, start Storybook:
npm run storybook
```

Storybook will open itself up at http://localhost:6006.

Gatsby will be running at http://localhost:8000.
