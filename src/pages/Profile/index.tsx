import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
    const TabContent = () => (
        <div className="content">
            <RepoIcon />
            <span className="label">Repositories</span>
            <span className="number">26</span>
        </div>
    );

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset" />
                    <TabContent />
                </div>

                <span className="line" />
            </Tab>

            <Main>
                <LeftSide>
                    <ProfileData
                        username={'studart301d'}
                        name={'Gabriel Studart'}
                        avatarUrl={'https://avatars0.githubusercontent.com/u/40727351?s=460&u=910de2d69c6dcb3b0ace476cd668f9a2041015ae&v=4'}
                        followers={887}
                        following={7}
                        company={'Estudante'}
                        location={'Fortaleza, Brazil'}
                        email={'gabrielstudart1@hotmail.com'}
                        blog={undefined}
                    />
                </LeftSide>

                <RightSide>
                    <Tab className = "mobile">
                        <TabContent />
                        <span className="line"/>
                    </Tab>

                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n =>(
                                <RepoCard 
                                    key={n}
                                    username={'studart301d'}
                                    reponame={'git-clone'}
                                    descripton={'Contains all of my YouTube lessons code'}
                                    language={n % 2 === 0 ? 'JavaScript' : 'TypeScript'}
                                    starts={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>

                    <CalendarHeading>
                        Random Calendar ( do not represent actual data )
                    </CalendarHeading>

                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;