import React, { useState } from 'react';
import IndexLayout from '../components/layouts/IndexLayout';
import useFetchSurah from '../hooks/useFetchSurah';
import SurahList from '../components/fragments/SurahList';

export default function Index() {
  const { data: surahs, error } = useFetchSurah();
  const [searchTerm, setSearchTerm] = useState('');

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredData = surahs.filter(item =>
    item.name.transliteration.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <IndexLayout>
      <h1 className="text-center font-extrabold text-4xl text-gray-900 mb-8">Online Qur'an</h1>
      <div className="flex justify-center items-center mb-8">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Surah by Latin Name"
          className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
        />
      </div>
      <SurahList surahs={filteredData} />
    </IndexLayout>
  );
}
