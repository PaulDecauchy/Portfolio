import { useState } from 'react';

export default function CommentForm({ onCommentAdded }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = { username, message };

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        onCommentAdded();
        setUsername('');
        setMessage('');
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Votre nom"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Votre commentaire"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Ajouter un commentaire
      </button>
    </form>
  );
}
