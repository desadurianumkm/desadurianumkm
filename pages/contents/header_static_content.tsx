import { url } from "inspector"

import HalamanUtama from "./halaman_utama";
import HalamanUtamaHeader from "./halaman_utama_header";
import HalamanHeaderDaftarUMKM from "./halaman_daftar_umkm_header";
import { useState, useEffect } from "react";

export default function HeaderStaticContent() {
  const [menu, setMenu] = useState('halaman_utama');

  return (
    <>
      {/* <div className="fh5co-loader"></div> */}

      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center logo-wrap">
                <div id="fh5co-logo"><a href="index.html">DESA DURIAN<span>.</span></a></div>
              </div>
              <div className="col-xs-12 text-center menu-1 menu-wrap">
                <ul>
                  <li className="active"><a href="#" onClick={() => {
                    setMenu('halaman_utama');
                  }}>Halaman Utama</a></li>
                  <li><a href="#" onClick={() => {
                    setMenu('halaman_daftar_umkm');
                  }}>Daftar UMKM</a></li>
                  <li className="has-dropdown">
                    <a href="gallery.html">Album Foto</a>
                  </li>
                  <li><a href="reservation.html">Peta UMKM</a></li>
                  <li><a href="#"> Admin </a></li>
                  {/* <li><img src="https://th.bing.com/th/id/R.30c5a0fd22a1f824b140c0ccd13979b8?rik=oaSnmwK9N6lcdg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_537428.png&ehk=q8C%2fJIX8LCKcmiu0C2O89SXQH1yT4%2fKW5aCXd5iAmFw%3d&risl=&pid=ImgRaw&r=0" width="30" height="30"/></li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {menu === 'halaman_utama' ? <HalamanUtamaHeader /> : null}
        {menu === 'halaman_daftar_umkm' ? <HalamanHeaderDaftarUMKM /> : null}
      </div>
      {menu === 'halaman_utama' ? <HalamanUtama /> : null}
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
      </div>
    </>
  );
}