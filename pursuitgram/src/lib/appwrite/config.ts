import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65868af21b219da9ef74',
  databaseId: '6586cf39370ae7a9e3ee',
  storageId: '6586cee046d36d476579',
  userCollectionId: '6586cfd840620caf1f92',
  postCollectionId: '6586cf7bc240e51df3d8',
  savesCollectionId: '6586cfa8dbb4c8f3fd2d',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);