define(
  [
  // bower components
  '../../bower_components/rendererjs/src/js/rendererjs',
  '../../bower_components/viewerjs/src/js/viewerjs',
  '../../bower_components/thbarjs/src/js/thbarjs',

  // relative paths to local non-AMD modules
  './lib/xtk',

  ], function(renderer, viewer, thbar) {

    fsurf = {};

    fsurf.init = function() {

      window.console.log('ready to rock');
    };

    fsurf.printBowerDependencies = function() {

      window.console.log('rendererjs', renderer);
      window.console.log('viewerjs', viewer);
      window.console.log('thbarjs', thbar);
      window.console.log('XTK', X);
    };

    fsurf.renderImgVolume = function(imgFileObj, rendererOptions) {

      var  r = new renderer.Renderer(rendererOptions);

      r.init(imgFileObj, function() {
            console.log('rendered!');
        });
    };

    return fsurf;
  });
