import type { ExtendedaUser } from './user';

interface IThought {
  id: string;
  userId: ExtendedaUser | string;
  looks: number;
  reposts: number;
  status: 'approved' | 'pending' | 'rejected';
  approvedDate: Date | null;
  rejectedDate: Date | null;
  thoughtContent: string;
  tags: Array<string>;
  publishedDate: Date;
  createdDate: Date;
}

export default IThought;
