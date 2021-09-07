import ButtonCart from '../components/MovieDetails/ButtonCart'
import ButtonWish from '../components/MovieDetails/ButtonWish'
import Trailer from '../components/MovieDetails/Trailer'
import Description from '../components/MovieDetails/Description'
import Image from '../components/MovieDetails/Image'
import Rating from '../components/MovieDetails/Rating'
import Labels from '../components/MovieDetails/Labels'

const MovieDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <Image />
        </div>
        <div className="col-4">
          <Trailer />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Labels />
        </div>
        <div className="col"></div>
        <div className="col-4">
          <Rating />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Description />
        </div>
        <div className="col"></div>
        <div className="col-4">
          <div className="row">
            <div className="col">
              <ButtonCart />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ButtonWish />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;