import React from 'react';
import { CreateQButton, JoinQButton } from '../../design/Button.stories';
import styles from '../../../styles/homePage.module.scss';

export const Banner = () => {
  return (
    <div>
      <div>
        <h1 className={styles['main-header']}>SimplQ</h1>
        <h3>A long overdue alternative to physical Queues</h3>
      </div>
      <div className={styles['button-group']}>
        <div>
          <CreateQButton />
        </div>
        <div>
          <JoinQButton />
        </div>
      </div>
    </div>
  );
};

export const BenefitsInfo = () => {
  return (
    <div>
      <div>
        {/* <img></img> */}
        <p>Minimize crowding by keeping your queue virtual</p>
      </div>
      <div>
        {/* <img></img> */}
        <p>Enforce social distancing effectively</p>
      </div>
      <div>
        {/* <img></img> */}
        <p>Check your current status in the queue</p>
      </div>
    </div>
  );
};

export const HowToCreate = () => {
  return (
    <div>
      <h2>Create a queue at the click of a button</h2>
      <div>
        <h3>Create Queue</h3>
        <p>Enter queue name and create a queue totally free of cost</p>
      </div>
      <div>
        <h3>Share Queue</h3>
        <p>Share the queue to your users for them to join</p>
      </div>
      <div>
        <h3>Manage Queue</h3>
        <p>Manage your queue seamlessly and efficiently</p>
      </div>
    </div>
  );
};

export const HowToJoin = () => {
  return (
    <div>
      <h2>Join a queue without being there</h2>
      <div>
        <h3>Join Queue</h3>
        <p>Get queue link and join from anywhere</p>
      </div>
      <div>
        <h3>Wait for your turn</h3>
        <p>Get notified when your turn is up without physically being in the queue</p>
      </div>
      <div>
        <h3>Manage Queue</h3>
        <p>Manage your queue seamlessly and efficiently</p>
      </div>
    </div>
  );
};

export const ExtraInfo = () => {
  return (
    <div>
      <div>
        {/* <img></img> */}
        <p>Always free</p>
      </div>
      <div>
        {/* <img></img> */}
        <p>Data security</p>
      </div>
      <div>
        {/* <img></img> */}
        <p>Easy to use</p>
      </div>
    </div>
  );
};
