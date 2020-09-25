const users = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: 25,
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    age: 25,
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    age: 25,
  },
];
const posts = [
  {
    author: "1",
    id: "1",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    published: true,
  },
  {
    author: "1",
    id: "2",
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    published: true,
  },
  {
    author: "3",
    id: "3",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    published: true,
  },
  {
    author: "1",
    id: "4",
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    published: true,
  },
  {
    author: "2",
    id: "5",
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];
const comments = [
  {
    id: "1",
    text:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    author: "1",
    post: "1",
  },
  {
    id: "2",
    text:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    author: "2",
    post: "1",
  },
  {
    id: "3",
    text:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    author: "2",
    post: "2",
  },
  {
    id: "4",
    text:
      "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    author: "3",
    post: "3",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
