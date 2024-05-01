'use client'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backend/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function NewProduct() {

  const [imageUrl,setImageUrl] =useState("")
  const [loading,setLoading] =useState(false)
  const [tags,setTags] =useState(["Tag-1","Tag-2"])
  const categories = [
    {
      id: 1,
      title:"Product Category - 1",
    },
    {
      id: 2,
      title:"Product Category - 2",
    },
    {
      id: 3,
      title:"Product Category - 3",
    },
  ]
  const farmers = [
    {
      id: 1,
      title:"Farmer - 1",
    },
    {
      id: 2,
      title:"Farmer - 2",
    },
    {
      id: 3,
      title:"Farmer - 3",
    },
  ]
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
      'api/products',
      data,
      "Product",
      reset
    )
    setImageUrl("")
  }

  return (
    <div>
      <FormHeader className="" title="New Products"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-gray-700 mx-auto mt-3 mb-12'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
          label="Product Title"
          name="title"
          register={register}
          errors={errors}
          />
          <TextInput
          label="Product SKU"
          name="sku"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Product Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Product Price (Before Discount)"
          name="productPrice"
          register={register}
          type='number'
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Product Sale Price (Discounted)"
          name="salePrice"
          register={register}
          errors={errors}
          type='number'
          className='w-full'
          />
          <SelectInput
          label="Sales Category"
          name="categoryId"
          register={register}
          errors={errors}
          options={categories}
          multiple = {false}
          className='w-full'
          />
          <SelectInput
          label="Sales Farmer"
          name="farmerId"
          register={register}
          errors={errors}
          options={farmers}
          multiple = {false}
          className='w-full'
          />

          <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint='productImageUploader' label="Product Image" />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <button className='flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4 '>
            <Plus/>
            <span>Add Tags</span>
          </button>
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Product" loadingButtonTitle="Creating product, please wait..."/>
      </form>
    </div>
  )
}
