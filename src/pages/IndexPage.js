import React from 'react'
import Nav from '../components/Nav'

const IndexPage = () => {
    return (
        <div className="index-page">
            <Nav />
            <div className="play-to-earn">
                <div className="play-to-earn-contant">
                    <div className="container">
                        <h1><span>PLAY TO EARN</span> ON 24h CRYPTO-TOURNAMENTS</h1>
                        <div className="wax">
                            <div className="wax-content">
                                <h2>powered by</h2>
                                <img src="/images/wax_logo@2x.png" />
                            </div>
                        </div>
                        <h4>Are you skillful enough to multiply your cryptocash? Test yourself and compete in our async game competitions.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
