import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import github from '../../assets/kissclipart-brand-icon-github-icon-logo-icon-43744a01ea5d154a.png'

const Home = () => {
    return (
        <div className='bg-sky-600 pb-2'>
            <Navbar></Navbar>
            <br />
            <br />
            <section className=''>
                
                 <div className=''>
                 <a className='flex flex-col' href="https://github.com/tanbirsakib" rel='noreferrer' target="_blank">
                    <div>
                        <img className='w-1/12' src={github} alt="" />
                        <p className='text-xl text-white font-semibold font-mono inline'>Github</p>
                    </div>
                    </a>
                 </div>
                    
               
                <div className='  border border-white rounded w-2/6'>
                    <h2 className='text-white ml-2'>info.html</h2>
                    <hr />
                    <pre className='text-white p-1 bg-sky-700'>
                        <h1 className='text-xl'>
                            &lt;h1&gt; Hi, I'm <span className='text-2xl'>Tanbir Sakib</span> 👨🏼‍💻 &lt;/h1&gt;
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
            </section>
        </div>
    );
};

export default Home;