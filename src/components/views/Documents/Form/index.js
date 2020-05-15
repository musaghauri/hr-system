import React, { Component } from 'react';
import Link from 'next/link';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import _assign from 'lodash/assign';
import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf'

class DocumentForm extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      fName: 'Jon',
      lName: 'Doe',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { validateForm, updateValue, handleSubmit } = this.props;
    const { formDetails } = this.props;
    const modifiedUser = formDetails.toJS();
    const result = validateForm(modifiedUser);
    const newFormDetails = _assign(modifiedUser, result.updatedFormData);
    updateValue(['formDetails'], newFormDetails);
    if (result.validateFlag) {
      handleSubmit(newFormDetails);
    }
  };

  export2Doc = (element, name = '') => {
    console.log(this.myRef);
    const preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    const postHtml = '</body></html>';
    const html = `${preHtml} ${
      document.getElementById('document').innerHTML
    } ${postHtml}`;

    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword',
    });

    // Specify link url
    const url = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(
      html
    )}`;

    // Specify file name
    const filename = name ? `${name}.doc` : 'document.doc';

    // Create download link element
    const downloadLink = document.createElement('a');

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      // triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  };

  generatePdf = () => {
    const { fName, lName } = this.state;
    const doc = new jsPDF();
    doc.setFont('Calibri');
    doc.setFontType('normal');
    doc.setFontSize(11);

    // doc.text(10, 10, `jspdf version ${jsPDF.version}`);
    // first page
    doc.text(15, 20, '257 G4, Johar Town');
    doc.text(15, 25, 'Lahore, Pakistan.');
    doc.setFontSize(16);
    // let textWidth =
    //   (doc.getStringUnitWidth('Personal & Confidential') *
    //     doc.internal.getFontSize()) /
    //   doc.internal.scaleFactor;
    // let pageWidth = doc.internal.pageSize.width;
    // doc.text(pageWidth - textWidth - 20, 10, 'Personal & Confidential');
    // let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.setFontType('bold');
    doc.text(77.6, 40, 'Personal & Confidential');

    doc.setFontSize(11);
    doc.setFontType('normal');
    doc.text(15, 60, 'Tuesday, January 28');
    doc.text(47, 59, 'th');
    doc.text(50, 60, ', 2020');
    doc.text(15, 65, 'Ref #: Bitbytes/HR.LHR/0013');

    doc.text(15, 80, `Mr. ${fName} ${lName}`);
    doc.text(15, 85, `CNIC # 31104888719319`);

    doc.text(15, 100, 'Subject:');
    doc.setFontType('bold');
    doc.text(29, 100, 'LETTER OF APPOINTMENT');
    doc.line(29, 101, 81, 101); // underlined
    doc.setFontType('normal');
    doc.text(15, 106, 'Dear');
    doc.setFontType('bold');
    doc.text(24, 106, `${fName},`);
    doc.setFontType('normal');
    doc.text(
      15,
      120,
      'With reference to your interviews and interactions with the management, we are pleased to offer you a position'
    );
    doc.text(15, 125, 'in our company as ');
    doc.setFontType('bold');
    doc.text(45, 125, `"Software Engineer"`);
    doc.setFontType('normal');
    doc.text(80, 125, '. Your');
    doc.text(91, 125, 'assignment will commence from');
    doc.setFontType('bold');
    doc.text(143, 125, '1');
    doc.text(145, 124, 'st');
    doc.text(148, 125, ' February 2020 ');
    doc.setFontType('normal');
    doc.text(175, 125, 'with the');
    doc.text(15, 130, 'following terms and conditions*.');

    // salary
    doc.text(15, 145, 'Basic Salary');
    const pageWidth = doc.internal.pageSize.width;
    let textWidth =
      (doc.getStringUnitWidth('Rs. 20,000/- Per month') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 145, 'Rs. 20,000/- Per month');
    doc.text(15, 150, 'Medical Allowance');
    textWidth =
      (doc.getStringUnitWidth('Rs. 2,000/- Per month') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 150, 'Rs. 2,000/- Per month');
    doc.text(15, 155, 'House Rent and Utilities');
    textWidth =
      (doc.getStringUnitWidth('Rs. 12,000/- Per month') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 155, 'Rs. 12,000/- Per month');
    doc.text(15, 160, 'Conveyance Allowance');
    textWidth =
      (doc.getStringUnitWidth('Rs. 6,000/- Per month') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 160, 'Rs. 6,000/- Per month');
    doc.setFontType('bold');
    doc.text(15, 170, 'Total');
    textWidth =
      (doc.getStringUnitWidth('Rs. 40,000/- Per month') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 170, 'Rs. 40,000/- Per month');
    doc.setFontType('normal');
    textWidth =
      (doc.getStringUnitWidth('(RUPEES FORTY THOUSAND ONLY)') *
        doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    doc.text(pageWidth - textWidth - 20, 175, '(RUPEES FORTY THOUSAND ONLY)');

    // communication
    doc.setFontType('bold');
    doc.text(15, 200, 'Communication');
    doc.line(15, 201, 42, 201);
    doc.setFontType('normal');
    doc.text(
      15,
      210,
      'You will be entitled to not get in contact with the BitBytes` clients directly or indirectly for at least two years'
    );
    doc.text(
      15,
      215,
      'effective from the day you leave the job. Also, company will have the right to take any legal action  against the'
    );
    doc.text(15, 220, 'candidate in case of the violation.');

    // Probation Period
    doc.setFontType('bold');
    doc.text(15, 235, 'Probation Period ');
    doc.line(15, 236, 44, 236);
    doc.setFontType('normal');
    doc.text(
      15,
      246,
      'You will be on probation for a period of two months. On successful completion of this period, you will be'
    );
    doc.text(
      15,
      251,
      ' confirmed in the service of the company  and your salary would be raised to 45 thousand Rs.'
    );
    doc.addPage();
    // second page

    // Notice Period
    doc.setFontType('bold');
    doc.text(15, 15, 'Notice Period');
    doc.line(15, 16, 38, 16);
    doc.setFontType('normal');
    doc.text(
      15,
      26,
      'From the employer side, during the initial training and probation period One Week notice and after successful'
    );
    doc.text(
      15,
      31,
      'completion of it, one-month notice, effective from the date of issue, will be applicable. From the employee side,'
    );
    doc.text(
      15,
      36,
      'the notice period is two months throughout the term of employment, including probation period, effective from'
    );
    doc.text(
      15,
      41,
      'from the first calendar day of the successive month. It is mandatory on both parties to complete and honor the'
    );
    doc.text(
      15,
      46,
      'the terms of the notice periods as mentioned in this appointment letter or as agreed in writing by both parties.'
    );

    // Other Benefits
    doc.setFontType('bold');
    doc.text(15, 61, 'Other Benefits');
    doc.line(15, 62, 40, 62);
    doc.setFontType('normal');
    doc.text(
      15,
      72,
      "Your entitlement of leave, travelling expenses and daily allowance whilst travelling on company's business shall"
    );
    doc.text(
      15,
      77,
      'be governed by the standing rules of the company as amended from time to time**.'
    );
    doc.text(
      15,
      87,
      'Wishing you a successful career with our Organization, we are sure that you will putall your efforts towards'
    );
    doc.text(
      15,
      92,
      'the success of the company and prove yourself a worthy asset for the company'
    );

    // signature
    doc.setFontType('bold');
    doc.text(15, 115, 'Signed by');
    doc.text(120, 115, 'Accepted by');
    doc.text(15, 150, 'Muhammad Musa');
    doc.text(120, 150, `Mr. ${fName} ${lName}`);
    doc.setFontType('normal');
    doc.text(15, 155, 'Co-Founder');
    doc.text(15, 170, 'BitBytes');
    doc.text(15, 175, 'musaghauri@bitbytes.io');

    doc.text(15, 185, '*Please note that your remuneration information is');
    doc.setFontType('bold');
    doc.text(95, 185, 'strictly confidential');
    doc.setFontType('normal');
    doc.text(128, 185, 'and should not be disclosed to other');
    doc.text(
      15,
      190,
      'staff members under any circumstances. In case of a breach, Company reserves the right to  withdraw the'
    );
    doc.text(
      15,
      195,
      'above adjustment and take appropriate action against any such breach.'
    );

    doc.text(
      15,
      215,
      '**BitBytes Services Employment T&Cs will be available to you after your joining.'
    );
    doc.save('sample.pdf');
  };

  render() {
    const {
      formDetails,
      submitStatus,
      submitLabel,
      successMessage,
      submitColor,
    } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Appointment Letter
              </Header>
              {submitStatus.get('error') && (
                <Message negative floating>
                  {submitStatus.get('error')}
                </Message>
              )}
              {submitStatus.get('loaded') && (
                <Message success>{successMessage}</Message>
              )}
              <Form onSubmit={this.handleSubmit} stacked="true">
                {/* here goes the dynamic input fileds */}
                <Button fluid onClick={this.generatePdf}>
                  Download
                </Button>
                <Link href="/documents">
                  <a>Back to Documents</a>
                </Link>
                {/* <Button
                  loading={submitStatus.get('loading')}
                  fluid
                  color={submitColor}
                  type="submit"
                >
                  {submitLabel}
                </Button> */}
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DocumentForm;
