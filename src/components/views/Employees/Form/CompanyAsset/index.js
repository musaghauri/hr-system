import React, { Component } from 'react';
import { Form, Button, Segment, List } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { ASSET_INITIAL_STATE } from '@config/constants/asset';

class CompanyAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChange = (name, value) => {
    const { index } = this.state;
    const { updateValue } = this.props;
    updateValue(['formDetails', 'companyAssets', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry } = this.props;
    const { size } = formDetails.getIn(['companyAssets']);
    if (size < 2) {
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

  back = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, assets, getAssetsStatus } = this.props;
    const { index } = this.state;
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
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Company Asset Details</h1>
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
                  ? formDetails.getIn([
                      'companyAssets',
                      index,
                      'id',
                      'errorText',
                    ])
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
              name={formDetails.getIn([
                'companyAssets',
                index,
                'detail',
                'name',
              ])}
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
            <Button
              toggle
              name="returnable"
              active={returnable}
              content="Returnable"
              onClick={(e, { name }) => this.handleChange(name, !returnable)}
            />
            <Button
              toggle
              name="status"
              active={status}
              content="Status"
              onClick={(e, { name }) => this.handleChange(name, !status)}
            />
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
          <Button onClick={this.addAnotherEntry}>Add More</Button>
          <h3>List of Company Assets</h3>
          <List celled animated ordered>
            {formDetails
              .getIn(['companyAssets'])
              .map((entry, companyAssetsI) => (
                <List.Item key={`companyAssets_item_${companyAssetsI}`}>
                  {`${entry.getIn(['id', 'value'])}      ${entry.getIn([
                    'detail',
                    'value',
                  ])}    ${entry.getIn([
                    'returnable',
                    'value',
                  ])}   ${entry.getIn(['status', 'value'])}   ${entry.getIn([
                    'issueDate',
                    'value',
                  ])}    
                    `}
                  <Button onClick={() => this.handleEdit(companyAssetsI)}>
                    Edit
                  </Button>
                  <Button
                    onClick={() =>
                      this.deleteEntry([
                        'formDetails',
                        'companyAssets',
                        companyAssetsI,
                      ])
                    }
                  >
                    Remove
                  </Button>
                </List.Item>
              ))}
          </List>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default CompanyAsset;
