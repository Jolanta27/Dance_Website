import React from 'react';
import '../../App.css';
import '../styles/Timetable.css';


function TimeTable() {
  return (
    <>
      <div className="timetable">
          <h1 className="welcome">Adult/Mature Age Beginner Dance Classes Perth</h1>
            <img className="pic" src="images/dance.png" alt="TimeTable" width="90%" />
              <p>All of our classes allow for drop-in attendance</p>
              <p>All classes are 75min</p>
              <p>Please contact us for more information</p>
              <footer className="footer">
              <p className="copy-right__footer">DanseSkole<i className="far fa-copyright"></i>2021</p>
            </footer>
        </div>
    </>
  );
}
export default TimeTable;
