import * as yup from 'yup'

export const Uservalidation= new yup.object().shape(
    {
        username:yup.string().required(),
        email:yup.string().email().required(),
        phoneno:yup.string().min(10).max(10).required()
    }
)