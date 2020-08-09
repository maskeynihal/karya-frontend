import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Returns Routes.
 *
 * @param {Object} routeParameters
 */
export default function makeRoutes(routeParameters) {
  return routeReducer(routeParameters, '');
}

/**
 * @param {Object} routeParameters
 * @param {String} parentPath
 */
function routeReducer(routeParameters, parentPath) {
  const path = parentPath + '/' + routeParameters.path;

  if (!routeParameters.children) {
    routeParameters.children = [];
  }

  return routeParameters.children.reduce(
    (acc, currentValue) => {
      // recursion occurs until it has children
      acc.push(...routeReducer(currentValue, path));

      return acc;
    },
    [getRouteComponent({ ...routeParameters, path })]
  );
}

/**
 * Returns Route Component.
 *
 * @returns {Component}
 */
export function getRouteComponent({ path, component }) {
  return <Route path={path} component={component} exact />;
}

getRouteComponent.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func
};
