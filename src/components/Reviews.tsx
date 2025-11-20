import { useState } from 'react';
import { Star, ThumbsUp, VerifiedIcon } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  content: string;
  helpful: number;
  size: string;
  fit: 'Small' | 'Perfect' | 'Large';
}

export function Reviews() {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'rating'>('recent');
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2025-11-15',
      verified: true,
      title: 'Best running shoes I\'ve owned!',
      content: 'These shoes are incredible! The cushioning is perfect for long runs, and they\'re surprisingly lightweight. I\'ve been using them for my marathon training and my feet feel great even after 15+ mile runs. The grip is excellent too - no slipping on wet surfaces.',
      helpful: 24,
      size: '8.5',
      fit: 'Perfect',
    },
    {
      id: 2,
      author: 'Michael R.',
      rating: 4,
      date: '2025-11-10',
      verified: true,
      title: 'Great quality, runs slightly small',
      content: 'Really impressed with the build quality and comfort. The only reason I\'m giving 4 stars instead of 5 is that they run a bit small. I usually wear size 10, but I needed a 10.5 in these. Once I got the right size, they\'re perfect!',
      helpful: 18,
      size: '10.5',
      fit: 'Small',
    },
    {
      id: 3,
      author: 'Jessica L.',
      rating: 5,
      date: '2025-11-08',
      verified: true,
      title: 'Worth every penny',
      content: 'I was hesitant about the price, but these shoes are worth it. The support is amazing, and they look great too. I\'ve gotten so many compliments. They\'re comfortable enough to wear all day, not just for working out.',
      helpful: 15,
      size: '7',
      fit: 'Perfect',
    },
    {
      id: 4,
      author: 'David K.',
      rating: 5,
      date: '2025-11-05',
      verified: false,
      title: 'Perfect for CrossFit',
      content: 'These shoes have become my go-to for CrossFit workouts. They provide excellent stability for lifting while still being flexible enough for cardio. The durability is impressive - they still look brand new after 3 months of heavy use.',
      helpful: 12,
      size: '11',
      fit: 'Perfect',
    },
    {
      id: 5,
      author: 'Emma T.',
      rating: 3,
      date: '2025-11-02',
      verified: true,
      title: 'Good, but not great for wide feet',
      content: 'The shoes are well-made and comfortable, but if you have wide feet like me, they might feel a bit tight. The quality is excellent, and I love the design. I wish they came in wide sizes.',
      helpful: 8,
      size: '8',
      fit: 'Small',
    },
    {
      id: 6,
      author: 'James P.',
      rating: 5,
      date: '2025-10-28',
      verified: true,
      title: 'Excellent arch support',
      content: 'I have high arches and usually struggle to find comfortable shoes. These are a game-changer! The arch support is phenomenal, and I can wear them all day without any discomfort. Highly recommend for anyone with similar issues.',
      helpful: 20,
      size: '9.5',
      fit: 'Perfect',
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 256, percentage: 75 },
    { stars: 4, count: 52, percentage: 15 },
    { stars: 3, count: 20, percentage: 6 },
    { stars: 2, count: 10, percentage: 3 },
    { stars: 1, count: 4, percentage: 1 },
  ];

  const averageRating = 4.7;
  const totalReviews = 342;

  const filteredReviews = filterRating
    ? reviews.filter((review) => review.rating === filterRating)
    : reviews;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl mb-8">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b">
        {/* Overall Rating */}
        <div>
          <div className="flex items-end gap-3 mb-4">
            <span className="text-5xl">{averageRating}</span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? 'fill-yellow-400 stroke-yellow-400'
                        : 'stroke-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">Based on {totalReviews} reviews</p>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-2">
            {ratingDistribution.map((dist) => (
              <button
                key={dist.stars}
                onClick={() =>
                  setFilterRating(filterRating === dist.stars ? null : dist.stars)
                }
                className={`w-full flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded transition-colors ${
                  filterRating === dist.stars ? 'bg-blue-50' : ''
                }`}
              >
                <span className="w-12 text-right">{dist.stars} star</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all"
                    style={{ width: `${dist.percentage}%` }}
                  />
                </div>
                <span className="w-12 text-gray-600">{dist.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Fit Rating */}
        <div>
          <h3 className="text-xl mb-4">How does it fit?</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Small</span>
                <span>Perfect</span>
                <span>Large</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                67% say fits perfectly
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm">
                Most customers find these shoes true to size. If you have wide feet, consider
                going up half a size.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sort and Filter */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="text-sm text-gray-600">Sort by:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('recent')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              sortBy === 'recent'
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Most Recent
          </button>
          <button
            onClick={() => setSortBy('helpful')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              sortBy === 'helpful'
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Most Helpful
          </button>
          <button
            onClick={() => setSortBy('rating')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              sortBy === 'rating'
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Highest Rating
          </button>
        </div>
        {filterRating && (
          <button
            onClick={() => setFilterRating(null)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
          >
            Clear filter ({filterRating} stars)
          </button>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.author}</span>
                  {review.verified && (
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                      <VerifiedIcon className="w-3 h-3" />
                      Verified Purchase
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 stroke-yellow-400'
                            : 'stroke-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>

            <h4 className="font-medium mb-2">{review.title}</h4>
            <p className="text-gray-700 mb-3">{review.content}</p>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span>Size: US {review.size}</span>
              <span>•</span>
              <span>Fit: {review.fit}</span>
            </div>

            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <ThumbsUp className="w-4 h-4" />
              Helpful ({review.helpful})
            </button>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
