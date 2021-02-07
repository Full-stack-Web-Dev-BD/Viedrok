import React, { useEffect } from 'react'

const Nav = () => {

    useEffect(() => {
        var playToEarn = document.getElementById("playToEarn")
        playToEarn.addEventListener('scroll', function () {
            // var header = document.getElementById("mynavbar")
            // header.classList.toggle('sticky', window.scrollY > 0)
            // playToEarn.classList.toggle('sticky', playToEarn.scrollY > 0)
        })
    }, [])
    return (
        <div id="mynavbar" className="my-nav">
            <div className="row">
                <div className="col-xs-12 col-sm-12  col-md-3 ">
                    <div className="logo">
                        <img src="/images/clashdome_logo_compact@2x.png" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                    <ul className="menu">
                        <li> <span className="bar"></span>ENDLESS SIEGE  </li>
                        <li> <span className="bar"></span>CANDY FIESTA </li>
                        <li> <span className="bar"></span>MORE COMING SOON </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 text-center">
                    <ul className="power">
                        <li>WELCOME TO  <a> CCDAL.WAT</a></li>
                        <li><i class="fas fa-edit"></i></li>
                        <li> <span><i class="fas fa-power-off"></i></span> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
