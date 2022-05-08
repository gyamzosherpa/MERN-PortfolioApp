import { Typography } from '@mui/material';
import React from 'react';
import './About.css';

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>hey baby</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUShKogpY3MaX-rvtGbBg0RYm4FKkS_un3iA&usqp=CAU"
            alt="Abhi"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: '1vmax 0', color: 'black' }}
          >
            hey baby
          </Typography>

          <Typography>hey baby</Typography>

          <Typography style={{ margin: '1vmax 0', textAlign: 'center' }}>
            hey baby
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: '5px',
              lineHeight: '50px',
              letterSpacing: '5px',
              textAlign: 'right',
            }}
          >
            nice baby
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
