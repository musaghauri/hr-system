import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { ASSET_INITIAL_STATE } from '@config/constants/asset';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class CompanyAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'ID',
          name: 'id',
        },
        {
          label: 'Detail',
          name: 'detail',
        },
        {
          label: 'Returnable',
          name: 'returnable',
        },
        {
          label: 'Status',
          name: 'status',
        },
        {
          label: 'Issue date',
          name: 'issueDate',
        },
        {
          label: 'Edit',
          name: 'edit',
        },
        {
          label: 'Remove',
          name: 'remove',
        },
      ]),
    };
  }

  handleChange = (name, value) => {
    const { index } = this.state;
    const { updateValue } = this.props;
    updateValue(['formDetails', 'companyAssets', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry, validateStep } = this.props;
    const { size } = formDetails.getIn(['companyAssets']);
    if (validateStep() && size < 2) {
      const contacts = formDetails.getIn(['companyAssets']).toJS();
      console.log(contacts);
      const value = [...contacts, ASSET_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'companyAssets'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['companyAssets']);
    if (size > 1) {
      deleteEntry(path);
      this.setState({ index: 0 });
    }
  };

  handleEdit = index => {
    this.setState({ index });
  };

  saveAndContinue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  };

  Previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, assets, getAssetsStatus, makeRows } = this.props;
    const { index, headings } = this.state;
    console.log(formDetails.getIn(['companyAssets']).toJS());
    const asssetRows = makeRows(
      headings,
      'companyAssets',
      formDetails.getIn(['companyAssets']),
      this.handleEdit,
      this.deleteEntry
    );
    const returnable = formDetails.getIn([
      'companyAssets',
      index,
      'returnable',
      'value',
    ]);
    const status = formDetails.getIn([
      'companyAssets',
      index,
      'status',
      'value',
    ]);
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Assets Information
        </Header>
        <Form.Group widths="equal">
          <Form.Select
            type="text"
            options={assets.toJS()}
            loading={getAssetsStatus.get('loading')}
            label={formDetails.getIn(['companyAssets', index, 'id', 'label'])}
            name={formDetails.getIn(['companyAssets', index, 'id', 'name'])}
            value={formDetails.getIn(['companyAssets', index, 'id', 'value'])}
            placeholder={formDetails.getIn([
              'companyAssets',
              index,
              'id',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['companyAssets', index, 'id', 'status'])
                ? formDetails.getIn(['companyAssets', index, 'id', 'errorText'])
                : false
            }
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'companyAssets',
              index,
              'detail',
              'label',
            ])}
            name={formDetails.getIn(['companyAssets', index, 'detail', 'name'])}
            value={formDetails.getIn([
              'companyAssets',
              index,
              'detail',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'companyAssets',
              index,
              'detail',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['companyAssets', index, 'detail', 'status'])
                ? formDetails.getIn([
                    'companyAssets',
                    index,
                    'detail',
                    'errorText',
                  ])
                : false
            }
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Button
            toggle
            fluid
            name="returnable"
            active={returnable}
            content={returnable ? 'Returnable' : 'Non-returnable'}
            onClick={(e, { name }) => this.handleChange(name, !returnable)}
          />
          <Form.Button
            toggle
            fluid
            name="status"
            active={status}
            content={status ? 'Activated' : 'Deactivated'}
            onClick={(e, { name }) => this.handleChange(name, !status)}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <DateInput
            fluid
            dateFormat="MM-DD-YYYY"
            iconPosition="left"
            label={formDetails.getIn([
              'companyAssets',
              index,
              'issueDate',
              'label',
            ])}
            name={formDetails.getIn([
              'companyAssets',
              index,
              'issueDate',
              'name',
            ])}
            value={formDetails.getIn([
              'companyAssets',
              index,
              'issueDate',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'companyAssets',
              index,
              'issueDate',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'companyAssets',
                index,
                'issueDate',
                'status',
              ])
                ? formDetails.getIn([
                    'companyAssets',
                    index,
                    'issueDate',
                    'errorText',
                  ])
                : false
            }
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Asset
        </Button>
        <h3>Assets</h3>
        <TableGenerator headings={headings} rows={asssetRows} name="assets" />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.Previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default CompanyAsset;
