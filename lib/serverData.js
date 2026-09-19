// ServerData.js (Intended as Server Component)
import User from '../models/User';
import { connectDB } from './mongodb';

export default async function ServerData() {
    await connectDB()
  const users = await User.find({}); // Server-only logic
  return <div>{users.length} Users</div>;
}