/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Typography } from 'components/UI-kit/Typography';
import Button from 'components/UI-kit/Button';
import { ReactComponent as ShapeBgSvg } from 'public/images/shape-bg.svg';
import jsonp from 'jsonp';

import { Input } from 'components/UI-kit/Input';
import styles from './SubsctibeSection.module.scss';

import { POST_URL, STATUS_COLORS } from './constants';

type SubsctiptionStatus = 'sending' | 'error' | 'success' | null;
type ResponseData = { msg: string; result?: 'success' };

const SubsctibeSection: React.FC = () => {
  const [status, setStatus] = useState<SubsctiptionStatus>(null);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('sending');
    setMessage('...sending');

    const form = e.currentTarget;
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const url = POST_URL.replace('/post?', '/post-json?');
    const params = new URLSearchParams({
      MERGE0: target.email.value
    }).toString();

    const handleResponse = (err: Error, data: ResponseData) => {
      if (err) {
        setStatus('error');
        setMessage(err.toString());
      } else if (data.result !== 'success') {
        setStatus('error');
        setMessage(data.msg);
      } else {
        setStatus('success');
        setMessage(data.msg);

        setTimeout(() => {
          setStatus(null);
          setMessage('');
          form.reset();
        }, 2000);
      }
    };

    jsonp(`${url}&${params}`, { param: 'c' }, (err: unknown, data: unknown) =>
      handleResponse(err as Error, data as ResponseData)
    );
  };

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
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <Input
              className={classNames(styles.input, styles.emailInput)}
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              helperText={message}
              helperTextColor={status ? STATUS_COLORS[status] : undefined}
            />
            <Button
              type="submit"
              variant="primary"
              className={styles.ctaBtn}
              disabled={status === 'sending'}
            >
              Join the list
            </Button>
          </div>
        </form>
      </div>
      <ShapeBgSvg className={styles.ctaBg} />
    </section>
  );
};

export default SubsctibeSection;
