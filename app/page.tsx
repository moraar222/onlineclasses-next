import React from 'react';
import Link from 'next/link';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Welcome to Little Explorers School Kenya</h1>
          <p className="text-xl text-gray-900">
            Empowering learners worldwide through accessible online education
          </p>
        </section>

        <section className="mb-12">
          <div
            className="bg-white rounded-lg shadow-lg p-8"
            style={{
              backgroundImage: 'url("https://i.pinimg.com/736x/ec/34/90/ec34901d9fa21e29507cf91f37e98586.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">Start Your Learning Journey Today</h2>
              <p className="text-white mb-6">Explore our Japanese and German language courses</p>
              <Link
                href="/schedules"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Schedule a Lesson
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Why Choose Grace Awiti?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BookOpen size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-black mb-2">Language Courses</h3>
              <p className="text-gray-600">Learn Japanese and German from expert instructors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-black mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from native speakers and experienced educators</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-black mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose class times that fit your schedule</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-black mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your language learning journey</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Our Language Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                language: 'Japanese',
                image:
                  'https://i.pinimg.com/736x/cf/f3/25/cff325d63d9eee7e1d1423f47eaa6fd6.jpg',
              },
              {
                language: 'German',
                image:
                  'https://i.pinimg.com/736x/c9/c5/e8/c9c5e8b93e1c588fb6b5cb2898b7e2ea.jpg',
              },
            ].map(({ language, image }, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={image}
                  alt={`${language} course`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{language} Language Course</h3>
                  <p className="text-gray-600 mb-4">
                    Master {language} with our comprehensive curriculum and interactive lessons.
                  </p>
                  <Link href="/schedules" className="text-blue-600 hover:text-blue-800">
                    Schedule a Lesson →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
