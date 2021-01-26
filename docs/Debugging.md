# Debugging

It should be possible to add breakpoints to the javascript / typescript within VSCode or for the server backend code as well

### Frontends

To Start debugging

  * Under vscode start the build:dev:server task from the task explorer
  * Launch the Browser debugger which should auto naviagate to http://localhost:3001/

### Backends

To Start debugging

  * Under vscode start the build:dev:server task from the task explorer
  * Launch the Compound launch profile which should launch both the server and the browser
  * Sometimes it can take a bit of time for the server part to come up, so hit refresh on the browser if nothing shows
