'use client'
import ImageInput from '@/components/FormInputs/ImageInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backend/FormHeader'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import { generateSlug } from '@/lib/generateSlug'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function NewCoupons() {

  const [imageUrl,setImageUrl] =useState("")
  const [loading,setLoading] =useState(false)
  const [couponCode,setCouponCode] =useState('')
  const {register,reset,watch,handleSubmit,formState:{errors}} = useForm()

  // const title = watch('title')
  // const expiryDate = watch('expiryDate')
  // const coupon = generateCouponCode(title,expiryDate)
  // console.log(coupon)

  async function onSubmit(data){

    // -id => auto()
    // -title
    // -slug=>auto()
    // -description
    // -images
   
    // const slug = generateSlug(data.title)
    // data.imageUrl = imageUrl
    const couponCode = generateCouponCode(data.title,data.expiryDate)
    data.couponCode = couponCode
    console.log(data)
    makePostRequest(setLoading,'api/coupons',data,"Coupon", reset)
    // setImageUrl("")
  }

  return (
    <div>
      <FormHeader title="New Coupon"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-gray-700 mx-auto mt-3 mb-12'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
          label="Coupon Title"
          name="title"
          register={register}
          errors={errors}
          className='w-full'
          />
          {/* 
          <TextInput
          label="Coupon Code"
          name="couponCode"
          register={register}
          defaultValue='fgfsgfdgsffgd'
          errors={errors}
          className='w-full'
          /> */}
          <TextInput
          label="Coupon Expiry Date"
          name="expiryDate"
          register={register}
          errors={errors}
          type='date'
          className='w-full'
          />

        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Coupons" loadingButtonTitle="Creating Coupons, please wait..."/>
      </form>
    </div>
  )
}
