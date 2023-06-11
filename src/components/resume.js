import React from 'react';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = (props) => {
    const { array } = props;
    
    console.log(props);
    if(array.length > 0) {
        return (
            <div className='resumeContainer'>
                <header className='headerContainer'>
                    <h1 className='resumeHeader'>{array[0].name}&nbsp;{array[0].surName}</h1>
                    
                </header>
                <div className='flexContainer'>
                <div className='infoContainer'>
                        <h1 className='contactTitle'>Contact</h1>
                        <div className='resEmail'><FontAwesomeIcon icon={faEnvelopeCircleCheck} /><div className='emailEl'>{array[0].email}</div></div>
                        <div className='resNum'><FontAwesomeIcon icon={faPhoneVolume} /><div className='numEl'>{array[0].num}</div></div>
                    </div>
                <div className='bodyContainer'>
                    <h3>Education</h3>
                    <div className='educationContainer'>
                    <div>{array[1].schoolName}</div>
                    <div>{array[1].category}</div>
                    <div>{array[1].date}</div>
                    {array[3].map((oj) => {
                        return (
                            <div>
                            <div>{oj.schoolName}</div>
                            <div>{oj.category}</div>
                            <div>{oj.date}</div>
                            </div>
                        )
                    })}
                    </div>
                    <h3>Experience</h3>
                    <div className='experienceContainer'>
                    <div>{array[2].compName}</div>
                    <div>{array[2].posTitle}</div>
                    <div>{array[2].tasks}</div>
                    {array[4].map((it) => {
                        return (
                            <div>
                                <div>{it.compName}</div>
                                <div>{it.posTitle}</div>
                                <div>{it.tasks}</div>
                            </div>
                        )
                    })}
                    </div>

                </div>
                </div>
            </div>
        )
    } 
}

export default Resume; 