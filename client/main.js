/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import 'bootstrap/dist/css/bootstrap.css';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
