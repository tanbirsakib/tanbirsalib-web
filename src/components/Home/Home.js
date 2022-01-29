import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div className='bg-sky-600 p-1 '>
            <Navbar></Navbar>
            <div className='border border-white rounded  w-2/6 mx-auto'>
                <h2 className='text-white ml-2'>info.html</h2>
                <hr />
                <pre className='text-white p-1'>
                    <h1 className='text-xl'>
                        &lt;h1&gt; Hi, I'm Tanbir Sakib 👨🏼‍💻 &lt;/h1&gt;
                    </h1>
                    &lt;ul&gt;
                    <h2 className='font-mono ml-4'>
                        &lt;li&gt; Web Developer ⚡ &lt;/li&gt;
                    </h2>
                    <h2 className='font-mono ml-4'>
                        &lt;li&gt; I love to code 🤞 &lt;/li&gt;
                    </h2>

                    &lt;/ul&gt;

                </pre>

            </div>
        </div>
    );
};

export default Home;