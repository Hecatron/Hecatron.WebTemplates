# Readme

Client side code template for using vuesax components within a vuetify app

## Dark theme

For vuetify we can force the use of the dark theme with
```
const vuetify = new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: { dark: true },
})
``

For vuesax we can force the use of the dark theme by adding a tag to the body element
```
<body vs-theme="dark">
```

