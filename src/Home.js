import React from 'react';
import Boards from './components/Boards';
import Header from './components/Header';
import NewBoard from './components/NewBoard';

const Home = () => {
    // const iconHome = <i className="fas fa-home"></i>;
    // const goHome = <button>{iconHome}</button>;
    return (
        <div>
            {/* <Header home={goHome} /> */}
            <Header />
            <section>
                <h1>My Boards</h1>
                <Boards>
                    <NewBoard />
                </Boards>
            </section>
            <section>
                <h1>Others Boards</h1>
            </section>
        </div>
    )
}

export default Home
