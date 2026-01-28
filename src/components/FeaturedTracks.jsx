import React from 'react';

const TrackCard = ({ title, artist, appleMusicLink, amazonMusicLink }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-soul-600 font-medium">{artist}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={appleMusicLink}
          className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
          aria-label={`Listen to ${title} on Apple Music`}
        >
          Apple Music
        </a>
        <a
          href={amazonMusicLink}
          className="flex-1 bg-soul-500 hover:bg-soul-600 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
          aria-label={`Listen to ${title} on Amazon Music`}
        >
          Amazon Music
        </a>
      </div>
    </div>
  );
};

const FeaturedTracks = () => {
  const tracks = [
    {
      title: 'Thank You',
      artist: 'Jermaine',
      appleMusicLink: '#',
      amazonMusicLink: '#',
    },
    {
      title: 'Everybody Get On the Dance Floor',
      artist: 'Jermaine',
      appleMusicLink: '#',
      amazonMusicLink: '#',
    },
    {
      title: 'Joyful Joyful Lord We Adore You',
      artist: 'CMR Entertainment',
      appleMusicLink: '#',
      amazonMusicLink: '#',
    },
  ];

  return (
    <section id="tracks" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Tracks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest releases and classic favorites
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <TrackCard key={index} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTracks;
