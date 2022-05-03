
import { useField } from 'formik';
import './input.scss'

export const Input= (props:any) => {
   
    const [field,meta] = useField(props)

    const  {
        label,
    } = props;

    return (
        <div className='container-input'>
            <label className='label-Admin' htmlFor={field.name}>
                    {label}
            </label>
            <input
                {...field}
                {...props}
               className="Admin-input"
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