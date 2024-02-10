// Exercici 7: Social Network
// T'han contractat per crear alguns anàlisis dels usuaris d'una xarxa social i necessites crear algunes funcions per ajudar-te. Tens la següent informació:

const socialNetworkData = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    // ... more users
  ],
  friendships: [
    { userId: 1, friendId: 2 },
    { userId: 1, friendId: 3 },
    { userId: 1, friendId: 4 },
    { userId: 2, friendId: 3 },
    { userId: 3, friendId: 4 },
    { userId: 4, friendId: 1 },
    { userId: 4, friendId: 2 },
    // ... more friendships
  ],
  posts: [
    { userId: 1, postId: 101, likes: [2, 3] },
    { userId: 2, postId: 102, likes: [1] },
    { userId: 3, postId: 103, likes: [1, 2] },
    { userId: 4, postId: 104, likes: [1, 3] },
    // ... more posts
  ],
};

// Crea les següents funcions fent ús de Set i Map allà on consideris que pot ser útil:

// getFriends(userId): Rep un userId i retorna un array amb els noms dels amics d'aquest usuari.
function getFriends(userID) {
  const amicsLlista = [];
  //Filtra els ID que té l'usuari que passem el userID
  const amicsID = socialNetworkData.friendships.filter(
    (amics) => amics.userId === userID
  );
  //Fem reduce per obtenir els noms dels amics
  const amics = amicsID.reduce((acc, valor) => {
    acc.push(valor.friendId);
    return acc;
  }, []);
  //Fem un forEach per obtenir els noms dels amics
  amics.forEach((amic) => {
    const amicNom = socialNetworkData.users.find((user) => user.id === amic);
    amicsLlista.push(amicNom.name);
  });
  console.log(amicsLlista);
  return amicsLlista;
}
getFriends(1);
// getMutualFriends(userId1, userId2): Rep dos userId i retorna un array amb els noms dels amics en comú d'aquests usuaris.
function getMutualFriends(userId1, userId2) {
  const usuari1 = getFriends(userId1);
  const usuari2 = getFriends(userId2);
  const usuarisComuns = new Map();
  usuari1.forEach((user) => {
    if (usuari2.includes(user)) {
      usuarisComuns.set(user, [userId1, userId2]);
    }
  });
  return usuarisComuns;
}
getMutualFriends(1, 2);
// getLikes(postId): Rep un postId i retorna un array amb els noms dels usuaris que han fet like a aquest post.
function getLikes(IdPost) {
  const llistaLikes = [];
  //Obtenir objecte que conté el postId que passem
  const likesID = socialNetworkData.posts.find(
    (post) => post.postId === IdPost
  );
  //Fem un reduce per obtenir els ID dels usuaris que han fet like al post
  const likesIdUsers = likesID.likes.reduce((acc, valor) => {
    acc.push(valor);
    return acc;
  }, []);
  //Fem un forEach per obtenir els noms dels usuaris que han fet like al post
  likesIdUsers.forEach((like) => {
    const likeNom = socialNetworkData.users.find((user) => user.id === like);
    llistaLikes.push(likeNom.name);
  });
  console.log(llistaLikes);
}
getLikes(101);
// getPopularPosts(): Retorna un Map amb els postId com a claus i el nombre de likes com a valors.
// Pots intentar que els posts estiguin ordenats de més a menys populars. Per exemple: [[104, 2], [101, 2], [103, 2], [102, 1]].
function getPopularPosts(){
  const postsPopulars = new Map();
  
}