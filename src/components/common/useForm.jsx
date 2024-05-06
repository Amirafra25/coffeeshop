import Joi from "joi-browser";
import Input from "./Input";

const useForm = (args) => {
    const { data, setData, errors, setErrors, schema, doSubmit} = args;

    const validate = () => {
        const options = {abortEarly: false}
        const result = Joi.validate(data, schema, options)

        if(!result.error) return null;

        const errors = {};
        for(let item of result.error.details) errors[item.path[0]] = item.message

        return errors;
    };

    const validateProperty = ({name, value}) => {
        const obj = { [name]: value };
        const newSchema = { [name]: schema[name] };
        const { error } = Joi.validate(obj, newSchema);
        return error ? error.details[0].message : null;
    };

    const handleChange = ({ currentTarget: input }) => {
        const newErrors = {...errors};
        const errorMessage = validateProperty(input);
        if(errorMessage) newErrors[input.name] = errorMessage;
        else delete newErrors[input.name];

        const account = {...data};
        account[input.name] = input.value;

        setData(account);
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalErrors = validate();
        setErrors(finalErrors || {})
        if(finalErrors) return;

        //server
        console.log(data);
        doSubmit();
    };

    const renderButton = (label) => {
        return (
            <button 
                disabled={validate()}
                type="submit" 
                class="btn btn-primary">
                {label}
            </button>
        )
    };

    const renderInput = ({name, label, type = "text"}) => {
        return (
            <Input 
                name={name} 
                label={label} 
                value={data[name]}
                error={errors[name]}
                type={type}
                onChange={handleChange} 
            />
        )
    };
    
    return {
        handleSubmit,
        renderButton,
        renderInput
    }
};

export default useForm;