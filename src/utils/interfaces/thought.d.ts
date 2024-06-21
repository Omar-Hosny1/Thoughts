import type AddThoughtFormType from '../types/AddThoughtForm';

interface Thought extends AddThoughtFormType {
  id: string;
  isAdmin: boolean;
  publishedDate: Date;
}
