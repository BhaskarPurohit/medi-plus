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

interface CustomProps{
    control: Control<any>,
    fieldType: FormFieldType
}


const CustomFormField = ({control, fieldType}:CustomProps) => {
    return (
        <div>
            <FormField
                control={control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="username" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}

export default CustomFormField