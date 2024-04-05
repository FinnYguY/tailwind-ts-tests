export interface User {
  id: string;
  name: string;
  username: string;
  age: number;
  avatarUrl: string;
  job: string;
  about: string;
}

export const usersList: Array<User> = [
  {
    id: crypto.randomUUID(),
    name: "Benedict Cumberbatch",
    username: "Cucumbersnatch",
    age: 47,
    avatarUrl:
      "https://cdn.britannica.com/05/187505-050-6BB9F835/Benedict-Cumberbatch-2014.jpg",
    job: "Actor",
    about:
      "English actor. Known for his work on screen and stage, he has received various accolades, including a BAFTA Award, a Primetime Emmy Award and a Laurence Olivier Award, in addition to nominations for two Academy Awards and four Golden Globes. In 2014, Time magazine named him one of the 100 most influential people in the world, and in 2015, he was appointed a CBE for services to performing arts and charity.",
  },
  {
    id: crypto.randomUUID(),
    name: "John Cena",
    username: "JohnCena64",
    age: 46,
    avatarUrl:
      "https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg?w=1024",
    job: "Wrestler, Actor",
    about:
      "American professional wrestler, actor, and former rapper. As a wrestler, he has been signed to WWE since 2001, but has been performing part-time since 2018. A record 16-time world champion as recognized by WWE, Cena is widely regarded as one of the greatest professional wrestlers of all time.",
  },
];
