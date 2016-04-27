# webpack-playground

## Examples to understand basic webpack ideas

This example shows us how to introduce a splint point in the code and how to load chunks on demand.

We have 'Load Dynamic Chunk button', when clicked will load the chunk which consists of jQuery and the module, `dynamicStuff.js`.

After webpack builds, we would have two files

-  bundle.js
-  1.bundle.js

`1.bundle.js` is not loaded initially. It gets loaded and computed if only we click the button, 'Load Dynamic Chunk'
