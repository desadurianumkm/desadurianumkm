import { url } from "inspector"

import HalamanUtama from "./halaman_utama";
import HalamanUtamaHeader from "./halaman_utama_header";

export default function HeaderStaticContent() {
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
                  <li className="active"><a href="index.html">Halaman Utama</a></li>
                  <li><a href="menu.html">Daftar UMKM</a></li>
                  <li className="has-dropdown">
                    <a href="gallery.html">Album Foto</a>
                    <ul className="dropdown">
                      <li><a href="#">Events</a></li>
                      <li><a href="#">Food</a></li>
                      <li><a href="#">Coffees</a></li>
                    </ul>
                  </li>
                  <li><a href="reservation.html">Peta UMKM</a></li>
                  <li><a href="contact.html">Kontak</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
        <HalamanUtamaHeader />
      </div>
      <HalamanUtama />
      <div className="gototop js-top">
        <a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
      </div>
    </>
  );
}