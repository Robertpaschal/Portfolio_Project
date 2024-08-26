import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import { setInputValue, setPromptResponses, setLoading } from '../redux/Actions/geminiCreators';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useUser } from '@clerk/clerk-react';
import { FaCircleUser } from "react-icons/fa6";

const apiKey = process.env.REACT_APP_API_KEY;


const TextEditor = ({ inputValue, promptResponses, loading, setInputValue, setPromptResponses, setLoading }) => {
  const { user } = useUser();
  const genAI = new GoogleGenerativeAI(apiKey);

  const handleInputChange = (content) => {
    setInputValue(content);
  };

  const markdownToHtml = (text) => {
    const lines = text.split('\n');
    let result = '';
    let insideCodeBlock = false;

    lines.forEach(line => {
      if (/^### /.test(line)) {
        // Convert H3 headings
        line = line.replace(/^### (.*)$/, '<h3>$1</h3>');
      } else if (/^## /.test(line)) {
        // Convert H2 headings
        line = line.replace(/^## (.*)$/, '<h2>$1</h2>');
      } else if (/^# /.test(line)) {
        // Convert H1 headings
        line = line.replace(/^# (.*)$/, '<h1>$1</h1>');
      } else if (/\*\*(.*?)\*\*/.test(line)) {
        // Convert bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<br/><b>$1</b> </br>');
      } else if (/^_(.*)_$/.test(line)) {
        // Convert italic text
        line = line.replace(/^_(.*)_$/, '<i>$1</i>');
      } else if (/\*(.*)/.test(line)) {
        // Convert lines starting with * to unordered list items
        line = line.replace(/\*(.*)/g, '</br>- $1');
      } else if (/(.*)\*/.test(line)) {
        line = line.replace(/(.*)\*/g, '')
      } else if (/^```/.test(line)) {
        // Convert code blocks (handling opening and closing tags separately)
        if (!insideCodeBlock) {
          // Opening of a code block
          line = '<pre style="background-color: grey; color: white; padding: 10px; border-radius: 5px;"><code>' + line.replace(/^```/, '');
          insideCodeBlock = true;
        } else {
          // Closing of a code block
          line = line.replace(/^```/, '') + '</code></pre>';
          insideCodeBlock = false;
        }
      } else if (/`(.*?)`/.test(line)) {
        // Convert inline code with styling
        line = line.replace(/`(.*?)`/g, '<code style="background-color: grey; color: white; padding: 2px 4px;  border-radius: 5px;">$1</code>');
      } else if (line.trim() === '') {
        // Empty line means a paragraph break
        line = '</p><p>';
      } else {
        // Regular text should be within <p> tags
        line = `<p>${line}</p>`;
      }

      result += line + '\n';
    });

    result = result.replace(/^\s*<p>/, ''); // Remove opening <p> if present
    result = result.replace(/<\/p>\s*$/, ''); // Remove closing <p> if present
    return result;

    // Trim the result to remove excess newlines or spaces
    return result.trim();
  };

  const getResponseForPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      console.log('Model:', model);
      const result = await model.generateContent(inputValue);
      console.log('Full Result:', result);
      setInputValue('');

      if (!result || !result.response) {
          throw new Error('Invalid response from API');
      }

      let response = result.response;
      let text = response.text();
      console.log('Raw Response Text:', text);

      response = DOMPurify.sanitize(text);
      response = markdownToHtml(text);

       // Prepare card data
      //  const cardData = {
      //   user: {
      //     name: user ? user.fullName : 'Unknown User',
      //     image: user ? user.profileImageUrl : <FaCircleUser className='size-6'/>,
      //   },
      //   text: response,
      //   date: new Date().toISOString(),
      //   Qn_No: promptResponses.length + 1,
      // };

      // Append the question (inputValue) and response to promptResponses
      setPromptResponses([...promptResponses, { question: inputValue, response: response }]);

      // Clear the input field after submission
      setLoading(false);
    } catch (error) {
      // console.log(error);
      console.log('Something went wrong', error);
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setPromptResponses([]);
  };

  const handleRefresh = () => {
    getResponseForPrompt();
  };

  return (
    <div className='rounded-md px-2 py-3 bg-[#CCBBBB] h-[480px] w-full mb-2'>
      <div className='flex flex-col gap-y-4 h-full'>
        <div className='h-20'>
          <ReactQuill
            value={inputValue}
            onChange={handleInputChange}
            theme='snow'
            className='rounded-md h-full'
          />
        </div>
        <div className='text-right mx-4'>
          <button
            onClick={getResponseForPrompt}
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
        {loading ? (
          <div className="text-center mt-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className='h-60 flex flex-col gap-y-4  overflow-auto'>
            {(promptResponses || []).map((item, index) => (
              <div key={index} className='flex flex-col gap-y-2'>
                <div className='p-2 rounded-md bg-slate-600 '>
                  <strong>Question:</strong> {(item.question).replace('<p>', '').replace('</p>', '')}
                </div>
                <div className='p-2 rounded-md'>
                  <strong>Response:</strong>
                  <div dangerouslySetInnerHTML={{ __html: item.response }} />
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  promptResponses: state.promptResponses,
  loading: state.loading,
});

const mapDispatchToProps = {
  setInputValue,
  setPromptResponses,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);