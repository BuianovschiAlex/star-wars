import { useNavigate } from 'react-router';
import iconBack from './img/back.svg'

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
  const navigate  = useNavigate()

  const handleGoBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href='#'
      onClick={handleGoBack}
      className={styles.link}
    >
      <img className={styles.link__img} src={iconBack} alt='Go Back' color='yellow'></img>
      <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack