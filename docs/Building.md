# Building

In order to build the source / download depends I'm using Yarn V2 here.
Note when opening the VSCode project this will not automatically build the vendor bundle

To build from the command line
```
cd frontends/bootstrap/clientjs

# Install the yarn packages
yarn install

# Build the vendor bundle
yarn build:dev:vendor

# Build the site bundle
yarn build:dev:site
```

There is also equivilent build:prod yarn scripts for building for production
