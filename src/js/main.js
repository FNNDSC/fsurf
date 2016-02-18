require.config({
  baseUrl: 'js',
  paths: {
    jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', '../../bower_components/jquery/dist/jquery.min'],
    jquery_ui: ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min', '../../bower_components/jquery-ui/jquery-ui.min']
  },
  // use packages to be able to use relative path in the package
  packages: [
  // bower packages
  {
    name: 'rendererjsPackage',
    location: '../../bower_components/rendererjs/src',
    main: 'js/rendererjs'
  },
  {
    name: 'viewerjsPackage',
    location: '../../bower_components/viewerjs/src',
    main: 'js/viewerjs'
  },
  {
    name: 'thbarjsPackage',
    location: '../../bower_components/thbarjs/src',
    main: 'js/thbarjs'
  }
  ]
});
require([
  'rendererjsPackage',
  'viewerjsPackage',
  'thbarjsPackage',
  'jquery', 'jquery_ui'], function(renderer, viewer, thbar, $) {

   window.console.log('ready to rock');
   window.console.log(renderer);
   window.console.log(viewer);
   window.console.log(thbar);

   // Image file object
    var imgFileObj = {
      baseUrl: 'volumes/nii/',
      imgType: 'vol',
      files: [{url: 'mri_testdata/volumes/nii/s34654_df.nii', name: 's34654_df.nii', remote: true}],
      json: {'url': 'mri_testdata/json/s34654_df.json', name: 's34654_df.json', 'remote': true}
    };

    // renderer options object
    var options = {
      container: 'renderercontainer',
      rendererId: 'xtkrenderercont',
      orientation: 'Z'
    };

    var  r = new rendererjs.Renderer(options);
        
    r.init(imgFileObj, function() {
          console.log('rendered!');
        });

});

