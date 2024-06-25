import * as Yup from 'yup';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const SignUpFormSchema = Yup.object({
  name: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(15, 'Username must be at most 15 characters long'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be no more than 20 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character',
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  dateOfBirth: Yup.string()
    .matches(
      dateRegex,
      'Please enter a valid date of birth in the format mm/dd/yyyy',
    )
    .test('min-age', 'You must be at least 7 years old', (value) => {
      if (!value) {
        return false;
      }
      const [year, month, day] = value.split('-').map(Number);
      const dob = new Date(year!, month! - 1, day);
      const today = new Date();
      const minAgeDate = new Date(
        today.getFullYear() - 7,
        today.getMonth(),
        today.getDate(),
      );

      return dob <= minAgeDate;
    })
    .test('max-age', 'Your age must be maximum 100 years old', (value) => {
      if (!value) {
        return false;
      }
      const [year, month, day] = value.split('-').map(Number);
      const dob = new Date(year!, month! - 1, day);
      const today = new Date();
      const maxAgeDate = new Date(
        today.getFullYear() - 100,
        today.getMonth(),
        today.getDate(),
      );

      return dob >= maxAgeDate;
    })
    .required('Please Enter Your Date of Birth'),
  gender: Yup.string()
    .oneOf(['Male', 'Female'], 'Gender Must be either Male or Female')
    .required('Gender is required'),
  interests: Yup.array()
    .of(Yup.string().required('Please enter your interests'))
    .min(3, 'Your interests must be at least 3')
    .test('unique', 'Interests must be unique', (value) => {
      if (!value) return true;
      const uniqueInterests = new Set(value);
      return uniqueInterests.size === value.length;
    })
    .required('Please enter your interests'),
});

export const getTodayDate = () => {
  const today = new Date();

  return today.toISOString().split('T')[0];
};

export default SignUpFormSchema;
