/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';
import { Typography } from 'components/UI-kit/Typography';
import Button from 'components/UI-kit/Button';
import { ReactComponent as ShapeBgSvg } from 'public/images/shape-bg.svg';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import styles from './SubsctibeSection.module.scss';

const SubsctibeSection: React.FC = () => {
  const handleSubmit = async (
    e: React.SyntheticEvent,
    subscribe: (data: any) => void
  ) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const response = subscribe({
      MERGE0: target.email.value
    });

    console.log('subscribe: ', target.email.value, response);
  };

  const postUrl = `https://xyz.us14.list-manage.com/subscribe/post?u=566a906473fa0f190917e0e7&id=d26a8289a2`;

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <Typography
          variant="h2"
          className={classNames(styles.ctaTitle, styles.sectionTitle)}
          glitch
        >
          Connect with Societal
        </Typography>
        <Typography
          variant="body1"
          className={classNames(styles.ctaText, styles.sectionDescription)}
        >
          Sign up for updates about the project launch and ecosystem
        </Typography>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <form onSubmit={e => handleSubmit(e, subscribe)}>
              <div className={styles.row}>
                <input
                  id="subsctption-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              {status === 'sending' && (
                <div className={classNames(styles.status, styles.sending)}>
                  sending...
                </div>
              )}
              {status === 'error' && (
                <div
                  className={classNames(styles.status, styles.error)}
                  dangerouslySetInnerHTML={{ __html: message.toString() }}
                />
              )}
              {status === 'success' && (
                <div
                  className={classNames(styles.status, styles.success)}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              <Button type="submit" variant="primary" className={styles.ctaBtn}>
                Join the list
              </Button>
            </form>
          )}
        />
      </div>
      <ShapeBgSvg className={styles.ctaBg} />
    </section>
  );
};

export default SubsctibeSection;
