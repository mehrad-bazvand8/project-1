export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'نام کاربری را وارد کنید';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'ایمیل لازم است';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'آدرس ایمیل معتبر نیست';
    }
    if (!values.password) {
      errors.password = 'رمز عبور را وارد کنید';
    } else if (values.password.length < 6) {
      errors.password = 'رمز ورود باید 6 حرف یا بیشتر باشد';
    }
  
    if (!values.password2) {
      errors.password2 = 'رمز عبور را وارد کنید';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'رمزهای ورود مطابقت ندارند';
    }
    return errors;
  }