import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__image-left"> </div>
      <div className="banner__calltoaction-right">
        <h3 className="banner-h3"> Los mejores productos para ti</h3>
        <h2 className="banner__title">Welcome to our store</h2>
        <p className="banner-text">
          Tenemos diversidad de productos para ti, escoge los que mas te gusten,
          recuerda que tenemos 30% DSCT en todas tus compras.
        </p>
        <button className="banner-button">Buy Now</button>
      </div>
    </section>
  );
};

export default Banner;
