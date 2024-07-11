import React from 'react'
import {
    FormField, 
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage
} from "@/components/ui/form"
import { Control } from 'react-hook-form'

import { Input } from './input'
import { FormFieldType } from '../forms/PatientForm'
import Image from 'next/image'

interface CustomProps{
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?:string,
    placeholder?:string,
    iconSrc?:string,
    iconAlt?:string,
    disabled?:string,
    dateFormat?:string,
    showTimeSelect?:string,
    children?:string,
    renderSkeleton?:(filed:any) => React.ReactNode,
}

const RenderField = ({field, props}:{field:any, props:CustomProps})=>{
    const { fieldType, iconSrc, iconAlt, placeholder } = props
    switch (fieldType) {
        case FormFieldType.INPUT:
            return(
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {iconSrc &&(
                        <Image
                        src={iconSrc}
                        height={24}
                        width={24}
                        alt={iconAlt || 'icon'}
                        className='ml-2'

                        />
                    )}
                    <FormControl>
                        <Input
                        placeholder={placeholder}
                        {...field}
                        className='shad-input border-0'
                        />
                    </FormControl>
                </div>
            )
            
        
    
        

        case FormFieldType.PHONE_INPUT:
            return(
                <FormControl>
                    {/* <PhoneInput/> */}
                </FormControl>
            )
            break;

        
            
            
        
            
    }
}
    


const CustomFormField = (props:CustomProps) => {
    const { control, fieldType, name, label } = props
    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className='flex-1'>
                        {fieldType !== FormFieldType.CHECKBOX && label &&(
                            <FormLabel>{label}</FormLabel>
                        )}

                        <RenderField
                        field={field}
                        props={props}
                        />

                        <FormMessage className='shad-error'/>
                    </FormItem>
                )}
            />

        </div>
    )
}

export default CustomFormField