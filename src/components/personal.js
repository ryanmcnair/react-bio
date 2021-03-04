import React from 'react';

export default class Bio extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className='personal'>
          <iframe
            title='awesome video'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </>
    );
  }
}
