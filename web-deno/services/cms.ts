import { Directus } from "@directus";

const directus = new Directus<CMS>("http://localhost:8055/");

export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  bio: string;
};

export type Subscription = {
  name: string;
  description: string;
};

export type CMS = {
  directus_users: Array<User>;
  subscriptions: Array<Subscription>;
};

const users = directus.items<User>("users");
const subscriptions = directus.items<Subscription>("subscriptions");

export { subscriptions, users };
