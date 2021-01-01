## Install

```sh
npm i @cassler/eslint-config-react
```


## Use

This config is meant to be applied on top of one of the other base configs.

```js
module.exports = {
  'root': true,
  'extends': [
    '@cassler/eslint-config-ts',
    '@cassler/eslint-config-react'
  ]
};
```
