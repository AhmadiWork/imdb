import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {signIn} from '../../redux/actions/auth';
import {VALIDATORS} from '../../helpers/validators';
import {toastr} from 'react-redux-toastr';
import {Helmet} from 'react-helmet';

class SignIn extends React.Component {
    onSubmit = formValues => {
        this.props.signIn(formValues).then(
            res => {
                toastr.success('موفق', 'با موفقیت وارد شدید');
            },
            res => {
                toastr.error('خطا', 'در ورود به سامانه خطایی رخ داده است');
            }
        );
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <React.Fragment>
                <Helmet><title>ورود</title></Helmet>

                <form onSubmit={handleSubmit(this.onSubmit)}>
                    {/* Form Fields Here! */}

                    <button type="submit">
                        SingIn
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.email) {
        errors.email = 'فیلد ایمیل نمی‌تواند خالی باشد';
    } else if (!VALIDATORS.email(formValues.email)) {
        errors.email = 'آدرس ایمیل غیر معتبر می‌باشد';
    }

    if (!formValues.password) {
        errors.password = 'فیلد پسورد نمی‌تواند خالی باشد';
    } else if (!VALIDATORS.password(formValues.password)) {
        errors.password = 'پسورد غیر معتبر است';
    }

    return errors;
};

export default compose(
    connect(null, {signIn}),
    reduxForm({form: 'signIn', validate})
)(SignIn);