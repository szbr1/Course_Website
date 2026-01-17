"use client"
import React from 'react'
import {CldUploadButton, type CldUploadButtonProps} from "next-cloudinary"

function Upload(props: CldUploadButtonProps) {
  return <CldUploadButton  {...props} />
}

export default Upload