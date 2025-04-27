import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const ProcessMessageStatus: React.FC = () => {
  const { loading, valid } = useSelector((state: RootState) => state.sendMessage);

  return (
    <div className={`w-full h-[1px] ${loading ? 'bg-green-500' : !valid ? 'bg-transparent' : 'bg-transparent'}`} />
  );
};

export default ProcessMessageStatus;
