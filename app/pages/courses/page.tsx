import React from 'react';
import Link  from 'next/link';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Introduction to Japanese',
    category: 'Grammar',
    rating: 4.8,
    students: 1500,
    duration: '8 weeks',
    image: 'https://i.pinimg.com/736x/dc/6c/54/dc6c549505bc3ee9c3741a84f12f2e35.jpg',
  },
  {
    id: 2,
    title: 'Becoming an Expert',
    category: 'Conversation',
    rating: 4.6,
    students: 1200,
    duration: '6 weeks',
    image: 'https://i.pinimg.com/736x/99/25/07/992507274a8384085e5016a6d7ec2125.jpg',
  },
  {
    id: 3,
    title: 'Japanese Speech Contests and Exams',
    category: 'Linguistics',
    rating: 4.9,
    students: 2000,
    duration: '10 weeks',
    image: 'https://i.pinimg.com/736x/9b/5d/6b/9b5d6b3d58fbb7c5b34220ea30e55134.jpg',
  },
  {
    id: 4,
    title: 'German for Beginners',
    category: 'Writing',
    rating: 4.7,
    students: 800,
    duration: '5 weeks',
    image: 'https://i.pinimg.com/736x/27/ec/34/27ec343330e57f107dd66e67237caea5.jpg',
  },
  {
    id: 5,
    title: 'Mastering German: Tips and Tricks',
    category: 'Cultural Studies',
    rating: 4.5,
    students: 1800,
    duration: '12 weeks',
    image: 'https://i.pinimg.com/736x/c9/f4/a2/c9f4a2fc32c7043c9816705a426a14f4.jpg',
  },
  {
    id: 6,
    title: 'German Speech Contests and Exams',
    category: 'Pronunciation',
    rating: 4.8,
    students: 1300,
    duration: '9 weeks',
    image: 'https://i.pinimg.com/736x/01/e7/ca/01e7cae4a13d9b0661fac0cf06cc8f57.jpg',
  },
];

const CoursesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{course.category}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-gray-400 mr-1" size={16} />
                  <span>{course.students} students</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="text-gray-400 mr-1" size={16} />
                <span>{course.duration}</span>
              </div>
              <Link
                href="/lessons"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
