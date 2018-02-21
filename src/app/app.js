import angular from 'angular';
import 'jquery';
import '../../node_modules/popper.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.min';

// Controller import
import AppCtrl from './app-controller'

// Service import
import AppService from './app-service';

// styles
import '../style/app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

var module = angular.module(MODULE_NAME, [])
  .directive('app', app)
  .service(AppService.name, AppService)
  .controller('AppCtrl', AppCtrl);

module.config( () => {
});

export default MODULE_NAME;