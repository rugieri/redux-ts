import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepos } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepos(term);

  };
  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
  </div>
  )
};

export default ReposList;