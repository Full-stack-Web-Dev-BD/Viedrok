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
                        <div className=" card-container">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="my-card">
                                        <img className="top-img" src="/images/endless_siege_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/endless_siege_file_bg@2x.png' />
                                        <h5 className="txt-1">Tower Defense</h5>
                                        <h5 className="txt-2">Competition ends in 10:05:27</h5>
                                        <div className="price-pot">
                                            <p className="pot-title">PRIZE POT</p>
                                            <div className="row price-pot-details">
                                                <div className="col-md-8 col-sm-12 price">
                                                    <h1>1,200</h1>
                                                </div>
                                                <div className="col-md-4 col-sm-12 token-info">
                                                    <p className="first-cp">WAX Tokens</p>
                                                    <p>(23.72 US $)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="fee"> ENTRY FEE 25 WAX</p>
                                        <img className="play-button" src="/images/btn_play_nav_bar@2x.png" />
                                        <img className="i-button" src="/images/i-button.png" />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="my-card card-2">
                                        <img className="top-img" src="/images/candy_fiesta_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/endless_siege_file_bg@2x.png' />
                                        <h5 className="txt-1">Match 3</h5>
                                        <h5 className="txt-2">Competition ends in 10:05:27</h5>
                                        <div className="price-pot">
                                            <p className="pot-title">PRIZE POT</p>
                                            <div className="row price-pot-details">
                                                <div className="col-md-8 col-sm-12 price">
                                                    <h1>1,200</h1>
                                                </div>
                                                <div className="col-md-4 col-sm-12 token-info">
                                                    <p className="first-cp">WAX Tokens</p>
                                                    <p>(23.72 US $)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="fee"> ENTRY FEE 25 WAX</p>
                                        <img className="play-button" src="/images/btn_play_candy_menu@2x.png" />
                                        <img className="i-button" src="/images/i-button.png" />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="my-card card-3">
                                        <img className="top-img" src="/images/endless_siege_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/endless_siege_file_bg@2x.png' />
                                        <h5 className="txt-1">Puzzle</h5>
                                        <h4 className="development-message">Currently under development</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
