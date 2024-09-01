export default function CommentList({ comments }) {
    return (
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">{comment.username}</h3>
            <p>{comment.message}</p>
            <span className="text-gray-500 text-sm">{new Date(comment.date).toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }