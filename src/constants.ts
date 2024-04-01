export interface User {
  name: string;
  age: number;
  avatarUrl: string;
  job: string;
  about: string;
}

export const usersList: Array<User> = [
  {
    name: "John Cena",
    age: 46,
    avatarUrl:
      "https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg?w=1024",
    job: "Wrestler, Actor",
    about:
      "American professional wrestler, actor, and former rapper. As a wrestler, he has been signed to WWE since 2001, but has been performing part-time since 2018. A record 16-time world champion as recognized by WWE, Cena is widely regarded as one of the greatest professional wrestlers of all time.",
  },
];
