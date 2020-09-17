import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container,
    Breadcrumb,
    RepoIcon,
    Stats,
    StarIcon,
    ForkIcon,
    LinkButton,
    GithubIcon, 
} from './styles';

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={'username'} to={'/studart301d'} >
                    studart301d
                </Link>
                <span>/</span>
                <Link className={'reponame'} to={'/studart/git-clone'} >
                    git-clone
                </Link>
            </Breadcrumb>

            <p>Contains clone of Git in React</p>

            <Stats>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={"https://github.com/studart301d/git-clone"}>
                <GithubIcon />
                <span>View on GitHub</span>
            </LinkButton>

        </Container>
    );
}

export default Repo;