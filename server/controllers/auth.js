/* eslint-disable */
import httpStatus from 'http-status';
import AuthHelper from '../helpers/Auth';

function login(req, res) {
    const { email, role, password } = req.body;

    AuthHelper.login(email, role, password)
        .then (user => res.json(user))
        .catch(e => {
            const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
            res.status(status).send(err)
        });
}


function forgotPassword(req, res) {
    const { email } = req.body;
    AuthHelper.forgotPassword(email)
        .then(status => res.json(status))
        .catch(e => {
            const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
            res.status(status).send(err)
        });
}

function resetPassword(req, res) {
    AuthHelper.resetPassword(req.body)
        .then(status => res.json(status))
        .catch(e => {
            const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
            res.status(status).send(err)
        });
}

export default { login, forgotPassword, resetPassword };
