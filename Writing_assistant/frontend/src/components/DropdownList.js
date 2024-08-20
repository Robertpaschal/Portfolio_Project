import React from 'react'
import DropDownItem from './DropDownItem'

const DropdownList = () => {
  return (
    <div className='space-y-6'>
      <DropDownItem
        question='How does Essay AI assist with writing essays?'
        notes='Essay AI provides suggestions, helps with structuring, and offers a range of tools to improve writing quality.'
      />
      <DropDownItem
        question='Are there any usage limits with AI Writer?'
        notes='There may be usage limits depending on your subscription plan. Check your plan details for more information.'
      />
      <DropDownItem
        question='How accurate is the information provided by Scholar AI?'
        notes='Scholar AI strives for accuracy but always double-check sources as it may not always be 100% correct.'
      />
      <DropDownItem
        question='Is there a limit to the number of searches or queries?'
        notes='The number of searches or queries might be limited based on your plan or subscription. Please refer to your plan details.'
      />
    </div>
  )
}

export default DropdownList