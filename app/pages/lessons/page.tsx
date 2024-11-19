import React from 'react';
import { Play, FileText, MessageCircle, CheckCircle } from 'lucide-react';

const LessonPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/watch?v=rGrBHiuPlT0&pp=ygUhaW50cm9kdWN0aW9uIHRvIGphcGFuZXNlIGxhbmd1YWdl" // Japanese tutorial
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Introduction to Japanese Grammar</h1>
          <p className="text-gray-600 mb-6">Learn the basics of Japanese grammar, including sentence structure and essential particles.</p>
          
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="flex items-center">
                <Play className="text-blue-600 mr-2" size={20} />
                <span>Video Length: 20:15</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="flex items-center">
                <FileText className="text-blue-600 mr-2" size={20} />
                <span>Lesson Transcript</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold mb-4">Lesson Content</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Introduction to Japanese Grammar</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span>Basic Vocabulary and Phrases</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-gray-300 mr-2" size={20} />
                <span>Verb Conjugation Basics</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-gray-300 mr-2" size={20} />
                <span>Common Sentence Patterns</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Discussion</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-start mb-4">
                <img src="https://source.unsplash.com/random/100x100?face" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-gray-600">Great explanation of sentence particles! Could you provide examples of how to use them in casual conversation?</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-blue-600 mr-2" size={20} />
                <span className="text-blue-600 cursor-pointer">Reply to this comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
