import React, { useState , useEffect} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector} from 'react-redux';
import { fetchContent, postContent, clearContent, refreshContent } from '../redux/Actions/contentActionCreators.';
import DOMPurify from 'dompurify';

const TextEditor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.contentReducer.content);
  const response = useSelector((state) => state.contentReducer.response);
  const loading = useSelector((state) => state.contentReducer.loading);
  const error = useSelector((state) => state.contentReducer.error);
  const [editorContent, setEditorContent] = useState('');
  const user = useSelector((state) => state.user); 

  // Fetch content when the component mounts
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  // Sync editor content when `content` from Redux changes
  useEffect(() => {
    if (editorContent) {
      setEditorContent(content);
    }
  }, [content]);

  // useEffect(() => {
  //   if (editorContent) {
  //     editorContent.root.innerHTML = content;
  //   }
  // }, [content, editorContent]);

  // useEffect(() => {
  //   setEditorContent(new Quill('#editor-container', { theme: 'snow' }));
  // }, []);

  // const handleSave = () => {
  //   if (editorContent){
  //     const editorContent = editor.root.innerHTML;
  //     dispatch(postContent(editorContent));
  //   }
  // };

  const handleClear = () => {
    dispatch(clearContent());
    setEditorContent('');
  };

  const handleRefresh = () => {
    dispatch(refreshContent());
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSubmit = async () => {
    // setResponse(editorContent);
    try {
      const sanitizedContent = DOMPurify.sanitize(editorContent);
      const session = {
        user: { user: user.name, image: user.image },
        text: sanitizedContent,
        Date: new Date().toLocaleDateString(),
        Qn_No: 'session' + Math.floor(Math.random() * 1000),
      };
      dispatch(postContent(session));
      // setReply(sanitizedContent);
    } catch (error) {
      console.error('An error occured while processing your request.', error);
      // setReply("");
    }
  };

  if (loading) return <div>Loading...</div>;

  // if (error) return <div>Error! {error.message}</div>;

  return (
    <div className='rounded-md px-2 py-3 bg-[#CCBBBB] h-[480px] w-full mb-2'>
      <div className='flex flex-col gap-y-4 h-full'>
        <div className='h-20'>
          <ReactQuill
            value={editorContent}
            // onChange={handleEditorChange}
            onChange={setEditorContent}
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
        <div className='h-40  p-2 rounded-md overflow-auto'>
          <h3 className='text-lg font-semibold'></h3>
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(response) }} />
        </div>
      </div>
    </div>
  )
}

export default TextEditor;
