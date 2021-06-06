import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);
 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepos(term);

  };
  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button className='btn btn-primary'>Search</button>
    </form>
    {error && <h3>{error} </h3> }
    {!error && !loading &&
     data.map((name) => <div key={name}>{name}</div>)}
  </div>
  )
};

export default ReposList;