// SIMPLE DEPENDENCY TREE AGENT -> COMPANY
import agent from './agent';

document.write('\n This is original' + agent());


document.getElementById('load-dynamic-chunk')
  .addEventListener('click', function (e) {
    require.ensure(['./dynamicStuff'], function (require) {
      require('./dynamicStuff');
    }, 'splitPoint');
  }, false);
