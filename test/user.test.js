// import request from 'supertest-as-promised';
// import httpStatus from 'http-status';
// import chai, { expect } from 'chai';
// import app from '../../index';

// chai.config.includeStack = true;

// describe('## User APIs', () => {
//   let user = {
//     username: 'musa',
//     mobileNumber: '1234567890',
//     email: 'kk@kkk.com',
//     role: 'superadmin',
//     password: '123456',
//     profile: { name: 'kk' }
//   };

//   describe('# POST /api/users', () => {
//     it('should create a new user', (done) => {
//       request(app)
//         .post('/api/users')
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           expect(res.body.role).to.equal(user.role);
//           expect(res.body.profile.name).to.equal(user.profile.name);
//           expect(res.body.email).to.equal(user.email);
//           expect(res.body.password).to.equal(user.password);
//           user = res.body;
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# GET /api/users/:userId', () => {
//     it('should get user details', (done) => {
//       request(app)
//         .get(`/api/users/${user._id}`)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           done();
//         })
//         .catch(done);
//     });

//     it('should report error with message - Not found, when user does not exists', (done) => {
//       request(app)
//         .get('/api/users/56c787ccc67fc16ccc1a5e92')
//         .expect(httpStatus.NOT_FOUND)
//         .then((res) => {
//           expect(res.body.message).to.equal('Not Found');
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# PUT /api/users/:userId', () => {
//     it('should update user details', (done) => {
//       user.profile.name = 'kkk';
//       request(app)
//         .put(`/api/users/${user._id}`)
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           expect(res.body.role).to.equal(user.role);
//           expect(res.body.password).to.equal(user.password);
//           expect(res.body.profile.name).to.equal('kkk');
//           expect(res.body.email).to.equal(user.email);
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# GET /api/users/', () => {
//     it('should get all users', (done) => {
//       request(app)
//         .get('/api/users')
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body).to.be.an('array');
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# POST /api/auth/login', () => {
//     it('should login the requested user', (done) => {
//       request(app)
//         .post('/api/auth/login')
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           user.token = res.body.token;
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# POST /api/auth/deactivate-user', () => {
//     it('should deactivate the requested user', (done) => {
//       request(app)
//         .put('/api/auth/deactivate-user')
//         .set('authorization', `Bearer ${user.token}`)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.active).to.equal(false);
//           user.active = res.body.active;
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# POST /api/auth/reset-password', () => {
//     it('should reset password of the requested user', (done) => {
//       user.password = '12345678';
//       request(app)
//         .post('/api/auth/reset-password')
//         .set('Authorization', `Bearer ${user.token}`)
//         .send(user)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.password).to.equal('12345678');
//           done();
//         })
//         .catch(done);
//     });
//   });

//   describe('# DELETE /api/users/', () => {
//     it('should delete user', (done) => {
//       request(app)
//         .delete(`/api/users/${user._id}`)
//         .expect(httpStatus.OK)
//         .then((res) => {
//           expect(res.body.username).to.equal(user.username);
//           expect(res.body.mobileNumber).to.equal(user.mobileNumber);
//           done();
//         })
//         .catch(done);
//     });
//   });
// });
