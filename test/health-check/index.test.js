/* eslint-disable no-undef */
import request from 'supertest';
import app from '@server/test-server';
// import { expect } from 'chai';
import { API_PREFIX } from '@config';
import conn from '../db';

const { expect } = require('chai');

process.env.NODE_ENV = 'test';
console.log('MUSA', app);
describe('GET /health-check', () => {
  //   before(done => {
  //     conn
  //       .connect()
  //       .then(() => done())
  //       .catch(err => done(err));
  //   });

  //   after(done => {
  //     conn
  //       .close()
  //       .then(() => done())
  //       .catch(err => done(err));
  //   });

  it('OK, getting countries has no countries', done => {
    request(app)
      .get(`${API_PREFIX}/health-check`)
      .then(res => {
        const { body } = res;
        console.log({ body });
        // expect(body.total_count).to.equal(0);
        // expect(body.items.length).to.equal(0);
        done();
      })
      .catch(err => done(err));
  });
});
