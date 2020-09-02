import _ from 'lodash';
import PropTypes from 'prop-types';
import { prop } from 'ramda';

export default class PropTypesPresenter {
  constructor(propTypes, methods) {
    this.propTypes = propTypes;

    _.forEach(propTypes, (_type, name) => {
      this[name] = prop(name);
    });

    _.forEach(methods, (method, name) => {
      this[name] = method.bind(this);
    });
  }

  /* eslint-disable react/forbid-foreign-prop-types */
  shape() {
    return PropTypes.shape(this.propTypes);
  }
}
