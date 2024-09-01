export async function GET(request) {
  return new Response("Utlisez /comments afin de lire ou d'ajouter un commentaire", {
    status: 200,
  });
}