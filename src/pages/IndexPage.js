import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import MyChart from '../components/MyChart'
const IndexPage = () => {
    useEffect(() => {
        var playToEarn = document.getElementById("playToEarn")
        playToEarn.addEventListener('scroll', function () {
            var header = document.getElementById("mynavbar")
            header.classList.toggle('sticky', playToEarn.scrollTop > 50)
            console.log(playToEarn.scrollTop)
        })
    }, [])
    return (
        <div className="index-page">
            <div className="play-to-earn">
                <div className="play-to-earn-contant" id="playToEarn">
                    <Nav />
                    <div className="container inner-content-earn">
                        <h1 className="txt-header"><span>PLAY TO EARN</span> ON 24h CRYPTO-TOURNAMENTS</h1>
                        <div className="wax">
                            <div className="wax-content">
                                <h2>powered by</h2>
                                <img src="/images/wax_logo@2x.png" />
                            </div>
                        </div>
                        <h4>Are you skillful enough to multiply your cryptocash? Test yourself and compete in our async game competitions.</h4>
                        <div className=" card-container">
                            <div className="row">
                                <div className="col-md-4 mt-5 ">
                                    <div className="my-card">
                                        <div className="overlay"></div>
                                        <img className="top-img" src="/images/endless_siege_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/endless_siege_file_bg@2x.png' />
                                        <h5 className="txt-1">Tower Defense</h5>
                                        <h5 className="txt-2">Competition ends in 10:05:27</h5>
                                        <div className="price-pot">
                                            <p className="pot-title">PRIZE POT</p>
                                            <div className="row price-pot-details">
                                                <div className="col-md-7 price">
                                                    <h1>1,200</h1>
                                                </div>
                                                <div className="col-md-5  token-info">
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
                                <div className="col-md-4 mt-5 ">
                                    <div className="my-card card-2">
                                        <div className="overlay"></div>

                                        <img className="top-img" src="/images/candy_fiesta_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/candy_fiesta_file_bg@2x.png' />
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
                                <div className="col-md-4 mt-5">
                                    <div className="my-card card-3">
                                        <div className="overlay"></div>

                                        <img className="top-img" src="/images/endless_siege_title_file@2x.png" />
                                        <img className="my-card-bg" src='/images/gamename-thumb-tall@2x.png' />
                                        <h5 className="txt-1">Puzzle</h5>
                                        <h4 className="development-message">Currently under development</h4>
                                        <div className="my-progress-bar">
                                            <div className="inner-bar">
                                                <div className="bar-content">
                                                    <div className="text-content" style={{ width: '50%' }}>
                                                        <p>PROGRESS</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chart-area">
                        <div className="chart-content">
                            <div className="container">
                                <div className="chart-inner">
                                    <div className="title">
                                        <h1>GAMES & PRIZES</h1>
                                        <div className="border-bt"></div>
                                    </div>
                                    <div className="my-chart">
                                        <div className="my-chart-inner-text">
                                            <h2>Previous 30 Days Pots</h2>
                                            <h3>15,000 waxp</h3>
                                        </div>
                                        <MyChart />
                                    </div>
                                </div>
                                <div className="blockchain">
                                    <div className="title">
                                        <h1>NEW TO BLOCKCHAIN GAMES?</h1>
                                        <div className="border-bt"></div>
                                    </div>
                                    <div className="row pl-3  mt-5" style={{ padding: '0 30px' }}>
                                        <div className="col-md-3 blockchain-card">
                                            <h2>SECURE TRANSACTIONS</h2>
                                            <img src="/images/icon_blockchain@2x.png" />
                                            <p>Reliable payments are guaranteed thanks to our transparent <a href="#">smart contracts.</a></p>
                                        </div>
                                        <div className="col-md-3 blockchain-card">
                                            <h2>CREATE YOUR ACCOUNT</h2>
                                            <img src="/images/token-small@2x.png" />
                                            <p>Create a WAX Cloud Wallet in 1 minute <a href="#">here</a> . You can also play using an Anchor wallet.</p>
                                        </div>
                                        <div className="col-md-3 blockchain-card">
                                            <h2>ADD SOME FUNDS</h2>
                                            <img src="/images/icon_funds@2x.png" />
                                            <p>Add some funds to start competing. Just visit <a href="#">Cryptolocally.</a></p>
                                        </div>
                                        <div className="col-md-3 blockchain-card">
                                            <h2>TRANSPARENT COMPETITION</h2>
                                            <img src="/images/icon_replays@2x.png" />
                                            <p>You can watch your rival’s replays to master their tricks and overcome them.</p>
                                        </div>
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
