import * as Yup from "yup";

export const signUpSchema= Yup.object({
    name: Yup.string().min(3).max(30).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(5).required("Please type your message"),
})