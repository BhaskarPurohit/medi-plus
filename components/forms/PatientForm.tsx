"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import CustomFormField from "../ui/CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/router"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATEPICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PatientForm = () => {
  // const router = useRouter()
  const[isLoading, setIsLoading] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    setIsLoading(true)

    try{
      const userData = {name, email, phone}

      const user = await createUser(userData)

      // if(user) router.push(`/patients/${user.$id}/register`)

    }catch(error){
      console.log(error);
      
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
          <section className="mb-12 space-y-4">
            <h1 className="header">Hi There! 🙋‍♂️</h1>
            <p className="text-dark-700">Schedule your first appointment</p>
          </section>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="jogndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(91) 12456-44587"
            
          
          />

          
            <SubmitButton  isLoading={isLoading}>Get Started</SubmitButton>
          
        </form>
      </Form>
    </div>
  )
}

export default PatientForm

