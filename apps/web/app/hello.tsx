import {useState} from 'react';
import {trpc} from './trpc';

export function Hello() {
  // const {data} = trpc.hello.useQuery();
  const [val, setVal] = useState('');

  // const {data} = trpc.log.useQuery({
  //   message: 'helloas',
  // });

  const {mutate} = trpc.add.useMutation();

  const handleSubmit = (e: any) => {
    mutate(val);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={val}
        onChange={e => {
          setVal(e.target.value);
        }}
      />
      <button>add book</button>
    </form>
  );
}
