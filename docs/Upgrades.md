# Upgrades

## Upgrading packages

Since I'm using yarn V2 Pnp in these setups, I've put in a upgrade target into package.json
```
cd clientjs
yarn build:upgrade
```

## Upgrading yarn sdk's

In some cases an upgrade to the sdk's that yarn provides is needed for vscode
```
cd clientjs
yarn dlx @yarnpkg/pnpify --sdk vscode
```
