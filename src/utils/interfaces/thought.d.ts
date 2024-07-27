import type { ExtendedaUser } from './user';

interface IThought {
  _id: string;
  userId: string | ExtendedaUser;
  looks: number;
  reposts: number;
  isApproved: boolean;
  approvedDate: Date | null;
  thoughtTitle: string;
  thoughtBody: string;
  tags: Array<string>;
  publishedDate: Date;
  createdDate: Date;
}

export default IThought;
