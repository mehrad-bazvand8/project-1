import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         برای دریافت جدید ترین خبر ها به ما بپیوندید
        </p>
        <p className='footer-subscription-text'>
        در هر زمان می توانید اشتراک خود را لغو کنید.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>اشتراک در</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>درباره ما</h2>
            <Link to='/sign-up'>چگونه کار میکند</Link>
            <Link to='/'>توضیعات</Link>
            <Link to='/'>مشاغل</Link>
            <Link to='/'>سرمایه گذاران</Link>
            <Link to='/'>شرایط استفاده از خدمات</Link>
          </div>
          <div class='footer-link-items'>
            <h2>با ما تماس بگیرید</h2>
            <Link to='/'>مخاطب</Link>
            <Link to='/'>حمایت کردن</Link>
            <Link to='/'>مقصد</Link>
            <Link to='/'>حمایت مالی</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>فیلم ها</h2>
            <Link to='/'>ارسال ویدیو</Link>
          </div>
          <div class='footer-link-items'>
            <h2>رسانه های اجتماعی</h2>
            <Link to='/'>اینستگرام</Link>
            <Link to='/'>یوتیوب</Link>
            <Link to='/'>تیوتر</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SEREN
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>joker © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;