import React, { Component } from 'react';
import CitiesList from '@components/views/Cities/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteCity } from './actions';
import {
  selectHeadings,
  selectCities,
  selectGetCitiesStatus,
  selectDeleteCityStatus,
} from './selectors';

class CitiesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteCity = (id, index) => {
    const { onDeleteCity } = this.props;
    onDeleteCity(id, index);
  };

  makeRows = cities => {
    const { headings } = this.props;
    return cities.toArray().map((city, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/city/[cityId]/edit',
                `/city/${city.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace('/city/[cityId]', `/city/${city.get('_id')}`),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteCity(city.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'state') {
          return {
            value: city.getIn([heading.get('name'), 'name']),
            isFunctional: false,
          };
        }
        if (heading.get('name') === 'country') {
          return {
            value: city.getIn(['state', heading.get('name'), 'name']),
            isFunctional: false,
          };
        }
        return {
          value: city.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, cities, deleteCityStatus } = this.props;
    const rows = this.makeRows(cities.get('items'));
    console.log({ cities: cities.toJS() });
    if (deleteCityStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <CitiesList headings={headings} cities={rows} />;
  }
}
const mapCityToProps = createStructuredSelector({
  headings: selectHeadings(),
  cities: selectCities(),
  getCitiesStatus: selectGetCitiesStatus(),
  deleteCityStatus: selectDeleteCityStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteCity: bindActionCreators(deleteCity, dispatch),
  };
}

export default connect(mapCityToProps, mapDispatchToProps)(CitiesListContainer);
