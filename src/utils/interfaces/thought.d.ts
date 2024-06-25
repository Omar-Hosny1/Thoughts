import type AddThoughtFormType from '../types/AddThoughtForm';

interface Thought extends AddThoughtFormType {
  id: string;
  isAdmin: boolean;
  publishedDate: Date;
  looks: number;
  reposts: number;
  isApproved: boolean;
  approvedDate: Date | null;
}
