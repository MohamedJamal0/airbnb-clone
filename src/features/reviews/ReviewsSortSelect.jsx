import { Select } from '../../components/ui/Select';

export default function ReviewsSortSelect({onSort, sortBy}) {
  const options = [
    { value: 'newest', label: 'Most Recent' },
    { value: 'highest', label: 'Highest Rating' },
  ];
  return <Select options={options} value={sortBy} onChange={onSort} />;
}
