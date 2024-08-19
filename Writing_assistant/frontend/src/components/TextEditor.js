import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [response, setResponse] = useState('');

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSubmit = () => {
    setResponse(editorContent);
  };

  return (
    <div className='rounded-md px-2 py-3 bg-[#CCBBBB] h-[480px] w-full mb-2'>
      <div className='flex flex-col gap-y-4 h-full'>
        <div className='h-20'>
          <ReactQuill
            value={editorContent}
            onChange={handleEditorChange}
            theme='snow'
            className='rounded-md h-full'
          />
        </div>
        <div className='text-right mx-4'>
          <button
            onClick={handleSubmit}
            className='bg-slate-400 mt-8 hover:bg-slate-700 text-white font-bold py-2 w-20  rounded-lg'
          >
            Submit
          </button>

        </div>
        <div className='h-40  p-2 rounded-md overflow-auto'>
          <h3 className='text-lg font-semibold'></h3>
          <div dangerouslySetInnerHTML={{ __html: response }}  />
        </div>
      </div>
    </div>
  )
}

export default TextEditor;
