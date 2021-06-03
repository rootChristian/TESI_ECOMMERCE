/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

module.exports.signUpErrors = (err) => {
    let errors = { nickname: '', email: '', password: '' };

    if (err.message.includes('nickname'))
        errors.nickname = 'Nickname incorrect or already taken';

    if (err.message.includes('email'))
        errors.email = 'Incorrect email';

    if (err.message.includes('password'))
        errors.password = 'The password must be 6 characters minimum';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('nickname'))
        errors.nickname = 'This username is already taken';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'This email is already registered';

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' }

    if (err.message.includes('email'))
        errors.email = 'Unknown email';

    if (err.message.includes('password'))
        errors.password = 'Password does not match';

    return errors;
}