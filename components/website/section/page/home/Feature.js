import React from 'react'
import asset from '@/plugins/assets/asset';

export default function Feature() {
    const photos = [
        "https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
        "https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100",
    ];
    return (
        <>
            <section className='Feature'>
                <div className="Feature__firstItem">
                    <h6>green</h6>
                    <img src={asset(photos[0])} alt="" />
                </div>
                <div className="Feature__firstItem">
                    <h6>lily</h6>
                    <img src={asset(photos[1])} alt="" />
                </div>
            </section>
            <style jsx>{`
                .Feature {
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    align-items: center;
                    img {
                        /* clip-path: inset(100% 0% 0% 0%); */
                        clip-path: inset(0% 0% 0% 0%);
                        transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
                        &.is-reveal {
                            clip-path: inset(0% 0% 0% 0%);
                        }
                    }

                }
            `}</style>

        </>
    )
}
