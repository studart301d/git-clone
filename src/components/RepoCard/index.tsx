import React from 'react';
import { Link } from 'react-router-dom'; 

import { 
  Container,
  Topside,
  RepoIcon,
  Botside,
  StartIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  reponame: string;
  descripton?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  descripton,
  language,
  starts,
  forks,
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other';

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{descripton}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}/>
            <span>{language}</span>
          </li>
          <li>
            <StartIcon />
            <span>{starts}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;