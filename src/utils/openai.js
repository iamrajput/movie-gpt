import OpenAI from 'openai';
import {GPT_KEY} from './constant'

const openai = new OpenAI({
  apiKey: GPT_KEY,
   // defaults to process.env["OPENAI_API_KEY"]
   dangerouslyAllowBrowser: true
});


export default openai