import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than {#limit} characters',
      'string.pattern.base': 'First Name must be in capitalize format',
      'any.required': 'First Name is required',
    }),
  meddleName: Joi.string(),
  lastName: Joi.string().alphanum().required().messages({
    'string.base': 'Last Name must be a string',
    'string.empty': 'Last Name is required',
    'any.required': 'Last Name is required',
  }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOcapetion: Joi.string().required(),
  fatherContractNo: Joi.string().required(),
  matherName: Joi.string().required(),
  matherOcapetion: Joi.string().required(),
  matherContractNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  ocapetion: Joi.string().required(),
  address: Joi.string().required(),
  contractNo: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema,
  gender: Joi.string().valid('Male', 'Female', 'other').required().messages({
    'string.base': 'Gender must be a string',
    'any.only': 'Gender must be Male, Female, or Other',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string(),
  contractNo: Joi.string().required(),
  emergencyContractNo: Joi.string().required(),
  email: Joi.string().email().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Blood Group is not valid',
    }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'block').messages({
    'any.only': 'Status must be Active or Blocked',
  }),
});

export default studentValidationSchema;
