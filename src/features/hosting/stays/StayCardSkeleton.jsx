import Skeleton from '../../../components/ui/Skeleton';

export default function StayCardSkeleton() {
  return (
    <div className="w-[300px] border rounded-md overflow-hidden">
      <div className="p-4">
        <div className="mb-4">
          <Skeleton style={'w-[120px] h-[28px] mb-1'} />
          <Skeleton style={'w-[120px] h-[26px] '} />
        </div>
        <div className="mb-2">
          <Skeleton style={'w-[120px] h-[20px] mb-1'} />
          <Skeleton style={'w-[120px] h-[20px]'} />
        </div>
      </div>
    </div>
  );
}
