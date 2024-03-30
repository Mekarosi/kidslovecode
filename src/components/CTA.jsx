import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Ready to prepare your kid with skills for tomorrow’s world?<br className='sm:block hidden'/>
        We are here for your kids!
      </p>
      <Link to="/contact" className="btn">
        Contact Us
      </Link>
    </section>
  )
}

export default CTA