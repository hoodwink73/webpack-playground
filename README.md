# webpack-playground

## Examples to understand basic webpack ideas

This example explains how Webpack can chunk repeating modules in one place.

Here we have two entries
-  `main.js`
-  `other.js`

Both depends on the module `agent`.

Instead of including the `agent` in both `main.bundle.js` and `other.bundle.js`, we ask Webpack to extract any module required twice in its own bundle.

```javascript
  new CommonsPlugin({
    'minChunks': 2,
    'name': 'common'
  })
```

And we do this with the help of CommonsChunkPlugin.

And after the build we get `common.bundle.js` along with `main.bundle.js` and `other.bundle.js`.

The `common.bundle.js` also contains the webpack runtime. The other bundles just contains its own code.
