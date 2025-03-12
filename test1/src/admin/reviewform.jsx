import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [propertyId, setPropertyId] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/reviews', {
        propertyId,
        reviewerName,
        rating,
        comment,
      });
      alert("Review submitted successfully!");
      setPropertyId('');
      setReviewerName('');
      setRating(1);
      setComment('');
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Error submitting review.");
    }
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Property ID</label>
          <input
            type="text"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
