import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

const url01 = 'https://proofd.app/'
const url02 = 'https://cryptogym.netlify.com/'
const url03 = 'https://professorjonesmusic.com/'
const url04 =
  'https://devpost.com/software/b-c-a-d-boock-chain-artifact-database/'
const url05 = 'https://react-movies-jeremy-jones.netlify.com/'
const url06 = 'https://walletwatcher.netlify.com/'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: url01,
    thumbnail: thumb01,
    caption: 'Proofd',
    description: 'A blockchain enabled verification platform',
  },
  {
    id: '2',
    src: url02,
    thumbnail: thumb02,
    caption: 'CryptoGym',
    description: 'An interactive training center for blockchain technology',
  },
  {
    id: '3',
    src: url03,
    thumbnail: thumb03,
    caption: 'Professor Jones Music',
    description: 'A full responsive, modern artist website',
  },
  {
    id: '4',
    src: url04,
    thumbnail: thumb04,
    caption: 'BC/AD — Block Chain Artifact Database',
    description:
      'A system for authenticating unique artifacts, antiques & collectibles verified by experts (ETH SF hackathon project)',
  },
  {
    id: '5',
    src: url05,
    thumbnail: thumb05,
    caption: 'React Movies',
    description:
      'A UI-focused app with real-time search that displays details & trailers of films',
  },
  {
    id: '6',
    src: url06,
    thumbnail: thumb06,
    caption: 'WalletWatcher',
    description:
      'An app that allows users to monitor ETH address & receive SMS notifications on go (3rd place hackathon winner)',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Jeremy A. Jones'
    const siteDescription =
      'Jeremy A. Jones is a full stack developer in San Francisco, CA'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Ipsum lorem dolor aliquam ante commodo
                <br />
                magna sed accumsan arcu neque.
              </h2>
            </header>
            <p>
              Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
              nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
              lobortis tortor primis integer massa adipiscing id nisi accumsan
              pellentesque commodo blandit enim arcu non at amet id arcu magna.
              Accumsan orci faucibus id eu lorem semper nunc nisi lorem
              vulputate lorem neque cubilia.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://www.thehackhive.com/profile/jeremyjones"
                  target="_blank"
                  className="button"
                >
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    San Francisco, CA
                    <br />
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:jeremyjones.a@gmail.com">
                      jeremyjones.a@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
