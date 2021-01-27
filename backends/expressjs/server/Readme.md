# Readme

## Typescript Compiler

The compiler for this project is setup to use webpack / tsloader instead of tsc
```
# via
yarn build:dev
# or via
NODE_ENV=development webpack --progress
```

If you want to run tsc in a yarn v2 project then you may need the --skipLibCheck flag such as
```
yarn pnpify tsc --skipLibCheck
```
