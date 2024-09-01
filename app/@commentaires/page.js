"use client";

import { useState, useEffect } from 'react';
import CommentForm from './form';
import CommentList from './list';

export default function Commentaires() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setComments(data.data);
    } catch (error) {
      console.error('Failed to load comments:', error);
    }
  };

  const handleCommentAdded = () => {
    fetchComments();  // Rafraîchir la liste des commentaires
  };

  return (
    <div className="space-y-6 mx-2 my-2">
        <div className="flex flex-col space-y-6">
            <CommentList comments={comments} />
            <CommentForm onCommentAdded={handleCommentAdded} />
        </div>
    </div>
  );
}
