import { useState, useEffect } from 'react';

import { Repository, UseRepositories } from '../types';

const useRepositories: UseRepositories = (initialRepositories = []) => {
  const [repositories, setRepositories] = useState<Repository[]>(initialRepositories);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchRepositories(): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.112:5000/api/repositories');
      
      // Temporary asserting json response to avoid TS compiler complaining about unsafe member access
      // Note that this doesn't ensure types coming from API match the ones expected in this code at runtime. Type checking through type guards and so should be applied in production to avoid possible runtime errors
      const json = await response.json() as { edges: { node: Repository }[]};

      if(json && json.edges) {
        console.log(json.edges);
        setLoading(false);
        setRepositories(json.edges.map(({ node }) => node));
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    // Following VSCode editor suggestion regarding ignored floating promises
    void fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;