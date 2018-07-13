# vue-cli-plugin-commentary

[![vue-cli3](https://img.shields.io/badge/vue--cli-3.x-brightgreen.svg)](https://github.com/vuejs/vue-cli)

**:rocket: Start building a Vue app with Style Guide**

This is a vue-cli 3.x plugin to add Style guide tool for Vue in your Vue project.

```
$ vue add vue-cli-plugin-commentary
$ yarn commentary
```

![image](https://user-images.githubusercontent.com/728384/42693201-52124218-86e9-11e8-9829-6af2ef4e27d4.png)


```
//projectRoot/commentary/index.js
import Component from '...'
storyOf('atoms/Component', Component)
    .add('title', {props: {color:'red'}})
```
