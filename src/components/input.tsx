
import { useField } from 'formik';


export const Input= (props:any) => {
   
    const [field,meta] = useField(props)

    const  {
        label,
    } = props;

    return (
        <div className='container-input'>
            <label htmlFor={field.name}>
                    {label}
            </label>
            <input
                {...field}
                {...props}
               
            />
            {
                meta.error && meta.touched &&
                <div className="input-errors-container">
                    <p className="errors"> {meta.error}  </p>
                </div>
            } 
        </div>
    )
}