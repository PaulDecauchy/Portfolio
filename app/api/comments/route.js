import dbConnect from "../libs/database";
import Comment from "../models/discussion.model";

export async function GET(request) {
  await dbConnect();
  try {
    const comments = await Comment.find({});
    return new Response(JSON.stringify({ success: true, data: comments }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const comment = await Comment.create(body);
    return new Response(JSON.stringify({ success: true, data: comment }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
