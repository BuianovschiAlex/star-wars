import PropTypes from 'prop-types';
import loaderBlack from '../UiLoading/img/laoder-black.svg'
import loaderWhite from '../UiLoading/img/loader-white.svg'
import loaderBlue from '../UiLoading/img/loader-blue.svg'
import { useEffect, useState } from 'react';
import cn from 'classnames'
import styles from './UiLoading.module.css';


const UiLoading = ({theme = 'white', isShadow = true, classes}) => {
  const [loaderIcon, setLoaderIcon] = useState(null)

  useEffect(() => {
    switch (theme) {
      case 'white': setLoaderIcon(loaderWhite); break;
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
      default: setLoaderIcon(loaderWhite);
    }
  }, [])

  return (

    <img 
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt='Loader'
    />
  )
}

UiLoading.propTypes = {
theme: PropTypes.string,
isShadow: PropTypes.bool,
classes: PropTypes.string,
}

export default UiLoading