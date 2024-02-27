import FooterHalamanUtama from "./footer_static_content";

export default function HalamanUtama() {
  return (
    <>
      <div id="fh5co-about" className="fh5co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-pull-4 img-wrap animate-box" data-animate-effect="fadeInLeft">
              <img src="images/umkm_Ikan_asin_1.jpeg" alt="Gambar UMKM Ikan Asin" />
            </div>
            <div className="col-md-5 col-md-push-1 animate-box">
              <div className="section-heading">
                <h2>UMKM DESA DURIAN</h2>
                <p style={{ color: "white" }}>Desa Durian, sebuah desa yang terletak di pesisir pantai, terkenal dengan mayoritas UMKM-nya yang bergerak di bidang pengolahan ikan asin. Aroma khas ikan asin tercium di udara saat memasuki desa ini, menandakan geliat ekonomi yang berputar dari hasil laut.</p>
                {/* <p><a href="#" className="btn btn-primary btn-outline">Our History</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-featured-menu" className="fh5co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 fh5co-heading animate-box">
              <h2>SAMPLE UMKM</h2>
              {/* <div className="row">
                <div className="col-md-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit
                    itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam
                    voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique
                    commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>
                </div>
              </div> */}
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
              <div className="fh5co-item">
                <img src="images/gallery2.jpeg" className="img-responsive"
                  alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co" />
                <h3>MIE PENTOL & MIE AYAM</h3>
                
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
              <div className="fh5co-item margin_top">
                <img src="images/gallery3.jpeg" className="img-responsive"
                  alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co" />
                <h3>ES JAGUNG HAWAI & BATAGOR</h3>
                
              </div>
            </div>
            <div className="clearfix visible-sm-block visible-xs-block"></div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
              <div className="fh5co-item">
                <img src="images/gallery1.jpeg" className="img-responsive"
                  alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co" />
                <h3>ANGKRINGAN "KUNCINGAN"</h3>
                
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
              <div className="fh5co-item margin_top">
                <img src="images/gallery4.jpeg" className="img-responsive"
                  alt="Free Restaurant Bootstrap Website Template by FreeHTML5.co" />
                <h3>KUE BASAH & KERING</h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
       
        
      
      <FooterHalamanUtama />
    </>
  );
}