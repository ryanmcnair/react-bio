import React from 'react';

export default class Bio extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className='bio'>
          <img
            class='ryan-pic'
            src='https://user-images.githubusercontent.com/67588177/89426465-cf3b5c80-d6ff-11ea-9c9b-8db91c8fe8db.jpg'
            alt='Ryan McNair'
          />
          <div className='bio-details'>
            <p>
              After growing up in the suburbs of San Diego CA, I
              spent many years traveling and living across the southwest US,
              staying in both Phoenix AZ and Los Angeles CA. During this period
              I was pursuing music, constantly practicing and playing with
              anyone who would have me. I became a manager at local record store
              chain, Zia Records, in Phoenix AZ and worked in retail at Amoeba
              Records in Los Angeles CA. In 2004, I left Los Angeles for
              Brooklyn NY and spent the next 10 years there. I found myself
              working in finance for a corporate travel company,{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.ovationtravel.com/'
              >
                Ovation Travel Group
              </a>
              , and have been employed with them since 2005. In 2014, my family
              relocated to Nashville TN and we are currently residing in the
              Donelson area.
            </p>
            <p>
              In 2020, I decided to continue my education by applying to
              Nashville Software School. I'm currently enrolled in a full stack
              developement cohort set to graduate in summer 2021.
            </p>
          </div>
        </div>
        <h2 class='proficiencies'>Technologies used include:</h2>
        <ul>
          <p>VS Code</p>
          <p> || </p>
          <p>GitHub</p>
          <p> || </p>
          <p>HTML5</p>
          <p> || </p>
          <p>CSS</p>
          <p> || </p>
          <p>Sass</p>
          <p> || </p>
          <p>React</p>
          <p> || </p>
          <p> ES6 Javascript</p>
          <p> || </p>
          <p>Bootstrap</p>
          <p> || </p>
          <p>jQuery</p>
          <p> || </p>
          <p>Webpack</p>
          <p> || </p>
          <p>Firebase</p>
        </ul>
        <ul>
          <p>Visual Studio</p>
          <p> || </p>
          <p>C#/.Net Core</p>
          <p> || </p>
          <p>T-SQL</p>
          <p> || </p>
          <p>CSS</p>
          <p> || </p>
          <p>Sass</p>
          <p> || </p>
          <p>React</p>
          <p> || </p>
          <p>Javascript</p>
          <p> || </p>
          <p>Bootstrap</p>
          <p> || </p>
          <p>jQuery</p>
          <p> || </p>
          <p>Webpack</p>
          <p> || </p>
          <p>Figma - wireframes</p>
        </ul>
      </>
    );
  }
}
