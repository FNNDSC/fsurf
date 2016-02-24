require.config({
  baseUrl: '../',
  paths: {
    jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', 'bower_components/jquery/dist/jquery.min'],
    jquery_ui: ['https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min', 'bower_components/jquery-ui/jquery-ui.min']
  },
  // use packages to be able to use relative path in the package
  packages: [

    {
      name: 'fsurf', // used for mapping...
      location: './', // relative to base url
      main: 'src/js/fsurf'
    }
  ]
});

require(['fsurf'], function(fsurf) {

  fsurf.init();
  fsurf.printBowerDependencies();
  fsurf.printLocalDependencies();

  // Image file object
  var baseUrl = '../bower_components/'

  var imgFileObj = {
    baseUrl: baseUrl,
    imgType: 'vol',
    files: [{url: baseUrl + 'mri_testdata/volumes/nii/s34654_df.nii', name: 's34654_df.nii', remote: true}],
    json: {'url': baseUrl + 'mri_testdata/json/s34654_df.json', name: 's34654_df.json', 'remote': true}
  };

  // renderer options object
  var renderOptions = {
    container: 'renderercontainer',
    rendererId: 'xtkrenderercont',
    orientation: 'Z'
  };

  fsurf.renderImgVolume(imgFileObj, renderOptions);

});
