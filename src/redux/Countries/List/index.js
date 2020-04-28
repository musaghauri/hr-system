import React, { Component } from 'react';
import CountriesList from '@components/views/Countries/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteCountry } from './actions';
import {
  selectHeadings,
  selectCountries,
  selectGetCountriesStatus,
  selectDeleteCountryStatus,
} from './selectors';

class CountriesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteCountry = (id, index) => {
    const { onDeleteCountry } = this.props;
    onDeleteCountry(id, index);
  };

  makeRows = countries => {
    const { headings } = this.props;
    return countries.toArray().map((country, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/country/[countryId]/edit',
                `/country/${country.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/country/[countryId]',
                `/country/${country.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteCountry(country.get('_id'), eIndex),
          };
        }
        return {
          value: country.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, countries, deleteCountryStatus } = this.props;
    const rows = this.makeRows(countries.get('items'));
    if (deleteCountryStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <CountriesList headings={headings} countries={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  countries: selectCountries(),
  getCountriesStatus: selectGetCountriesStatus(),
  deleteCountryStatus: selectDeleteCountryStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteCountry: bindActionCreators(deleteCountry, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesListContainer);
