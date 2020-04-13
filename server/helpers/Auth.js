/* eslint-disable */
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from './common/APIError';
import uuid from 'node-uuid';
import EncryptHelper from './common/encrypt';
import TokenHelper from './Token';
import UserHelper from './User';

import { JWT_SECRET_TOKEN, BASE_URL } from '@config';

import {
  SendTemplatedEmail
} from './common/email';

function login(email, password) {
  return new Promise((resolve, reject) => {
    UserHelper.GetOne({ email }).then((user) => { //, isVerified: true 
      if (!user) {
        const err = new APIError('Incorrect username or password', httpStatus.UNAUTHORIZED);
        return reject({
          status: httpStatus.UNAUTHORIZED,
          err,
        });
      }
      else {
        if(!user.isVerified) {
          const err = new APIError('Check your email! Just one more step for registration! Please activate your account via the link in the email we just sent to you', httpStatus.UNAUTHORIZED);
          reject({
              status: httpStatus.UNAUTHORIZED,
              err
          });
        } else if(!user.isActive) {
          const err = new APIError('This account is not active. Please contact support', httpStatus.UNAUTHORIZED);
          reject({
              status: httpStatus.UNAUTHORIZED,
              err
          });
        } else {
          EncryptHelper.compare(password, user.password).then((res) => {
            if(res){
              resolve(getSignInResponse(user));
            }
            else{
                const err = new APIError('Incorrect username or password', httpStatus.UNAUTHORIZED);
                reject({
                    status: httpStatus.UNAUTHORIZED,
                    err
                });
            }
          })
          .catch(e => reject(e));
        }
      }
    })
    .catch(e => reject(e));
  });
}

function forgotPassword(email) {
  return new Promise((resolve, reject) => {
    UserHelper.GetOne({ email })
      .then(user => {
        if(!!user) {
          if(user.isVerified){
            TokenHelper.Create({ type: 'reset-password', user: user._id, token: uuid.v4()  })
              .then(token => {
                SendTemplatedEmail(user.email, 'reset-password-template', { firstname: user.name, link: `${BASE_URL}/reset-password/${token.token}` })
              })
              .catch(e => reject(e));
            resolve(true);
          } else {
            const err = new APIError('You can\'t reset password for this account', httpStatus.UNAUTHORIZED);
            reject({
                status: httpStatus.UNAUTHORIZED,
                err
            });
          }
        } else {
          const err = new APIError('This user doesn\'t exist', httpStatus.UNAUTHORIZED);
          reject({
              status: httpStatus.UNAUTHORIZED,
              err
          });
        }
      })
      .catch(e => reject(e));
  });
}

function resetPassword(requestBody) {
  return new Promise((resolve, reject) => {
    const { password, confirmPassword, token } = requestBody;
    if(password !== confirmPassword) {
      const err = new APIError('The provided passwords do not match', httpStatus.UNAUTHORIZED);
      reject({
          status: httpStatus.UNAUTHORIZED,
          err
      });
    } else {
      TokenHelper.GetOne({ token })
        .then(tokenObject => {
          if(!!tokenObject) {
            UserHelper.UpdateById(tokenObject.user.toString(), { password })
              .then(updatedUser => {
                TokenHelper.Remove(tokenObject._id.toString()); // Then delete the token
                resolve({ status: true });
              })
              .catch(e => reject(e));
          } else {
            const err = new APIError('This link is not working', httpStatus.UNAUTHORIZED);
            reject({
                status: httpStatus.UNAUTHORIZED,
                err
            });
          }
        })
        .catch(e => reject(e));
      }
  });
}


function getSignInResponse(user) {
  const token = jwt.sign({
    role: user.role,
    name: user.name,
    _id: user._id,
  }, JWT_SECRET_TOKEN);
  return {
    token,
    role: user.role,
    _id: user._id,
    name: user.name,
    image: user.avatar,
    isSocial: !!user.social && !!user.social.id,
  };
}


export default { login, forgotPassword, resetPassword };
