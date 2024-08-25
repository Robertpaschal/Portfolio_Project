import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { postContent, clearContent, refreshContent, fetchContent } from '../redux/Actions/contentActionCreators.'; 
import DOMPurify from 'dompurify';

const TextEditor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.contentReducer.content);
  const loading = useSelector((state) => state.contentReducer.loading);
  const [editorContent, setEditorContent] = useState('');
  const [title, setTitle] = useState('');


  useEffect(() => {
    // Fetch the latest content
    dispatch(fetchContent());
    }, [dispatch]);

  // Update editorContent when content changes in Redux
  useEffect(() => {
    if (content) {
      setEditorContent(content);
    }
  }, [content]);

  const handleClear = () => {
    dispatch(clearContent());
    setEditorContent('');
    setTitle('');
  };

  const handleRefresh = () => {
    if (title && editorContent) {
      dispatch(refreshContent(editorContent, title));
    } else {
      alert ('Please provide a title and content to submit.')
    }
  };

  const handleSubmit = async () => {
    if (title && editorContent) {
      dispatch(postContent(editorContent, title));
    } else {
      alert('Please provide a title and content to submit.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className='rounded-md px-2 py-3 bg-[#CCBBBB] h-[480px] w-full mb-2'>
      <div className='flex flex-col gap-y-4 h-full'>
        <div className='h-20'>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter a title for your content'
            className='mb-4 p-2 rounded-md w-full'
          />
        </div>
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          theme='snow'
          className='rounded-md h-full'
        />
        <div className='text-right mx-4'>
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !editorContent.trim()}
            className='bg-slate-400 mt-8 hover:bg-slate-700 text-white font-bold py-2 w-20 rounded-lg'
          >
            Submit
          </button>
          <button
            onClick={handleClear}
            className='bg-red-400 ml-2 mt-8 hover:bg-red-700 text-white font-bold py-2 w-20 rounded-lg'
          >
            Clear
          </button>
          <button
            onClick={handleRefresh}
            className='bg-green-400 ml-2 mt-8 hover:bg-green-700 text-white font-bold py-2 w-20 rounded-lg'
          >
            Refresh
          </button>
        </div>
        <div className='h-40 p-2 rounded-md overflow-auto'>
          <h3 className='text-lg font-semibold'></h3>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
