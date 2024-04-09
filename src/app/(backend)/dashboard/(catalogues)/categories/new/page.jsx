'use client'
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backend/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function NewCategory() {

  const [imageUrl,setImageUrl] =useState("")
  const [loading,setLoading] =useState(false)
  const {register,reset,handleSubmit,formState:{errors}} = useForm()

  async function onSubmit(data){

    // -id => auto()
    // -title
    // -slug=>auto()
    // -description
    // -images
   
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/categories',
      data,
      "Category",
      reset
    )
    setImageUrl("")
  }

  return (
    <div>
      <FormHeader className="" title="New Category"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-gray-700 mx-auto mt-3 mb-12'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
          label="Category Title"
          name="title"
          register={register}
          errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='categoryImageUploader' label="Category Image" />
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Category" loadingButtonTitle="Creating category, please wait..."/>
      </form>
    </div>
  )
}
