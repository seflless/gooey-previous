# gooey
Coming Soon


# Contributing

To build the code and watch for changes while running the example/test.html test bed page, do the following:

```bash
git clone git@github.com:francoislaberge/gooey.git
cd gooey
npm install
# Starts watching for changes
npm run-script watch
# Open a new terminal instance, this starts a basic http server and opens up the test page in your browser
npm start
# Change code, refresh, rinse and repeat
```

To publish the module:

```bash
npm version major | minor | patch
npm publish
git push; git push --tags
```
