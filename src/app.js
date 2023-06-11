import React, { useState, useEffect } from 'react';
import Resume from './components/resume';
import uniqid from 'uniqid';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; 
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './app.css';

const App = () => {
        const [general, setGeneral] = useState({
              name: '',
              surName: '',
              email: '',
              num: '',
              id: uniqid()
            })
            const [education, setEducation] = useState({
              schoolName: '',
              category: '',
              date: '',
              id: uniqid()
            }) 
            const [experience, setExperience] = useState({
              compName: '',
              posTitle: '',
              tasks: '',
              id: uniqid()
            }) 
            const [arr, setArr] = useState({
            educationArr: [],
            experienceArr: [],
            finalArr: [],
            addEdit: [],
            startArr: [1]
            })

  
      const deleteExperience = (key) => {
        let newArr = [];
        
        newArr = arr.experienceArr.filter(j => {
          return j.id !== key;
        });
        setArr({
          
          ...arr, experienceArr: newArr
      
        })
      }

   

      const deleteEducation = (key) => {
        let newArr = [];
        newArr = arr.educationArr.filter(j => {
          return j.id !== key;
        });
        setArr({
          ...arr, educationArr: newArr
        })
      }

    

     const handleNameChange = (e) => {
        setGeneral({
            ...general, name: e.target.value
        })
      }

    

      const handleSurNameChange = (e) => {
        setGeneral({
            ...general, surName: e.target.value
        })
      }
 
    
  
      const handleEmailChange = (e) => {
        setGeneral({
            ...general, email: e.target.value
        })
      }

    
      const handleNumChange = (e) => {
        setGeneral({
            ...general, num: e.target.value
        })
      }

    
  
      const handleSchoolNameChange = (e) => {
        setEducation({
            ...education, schoolName: e.target.value
        })
      }

    

      const handleCategoryChange = (e) => {
        setEducation({
            ...education, category: e.target.value
        })
      }


      const handleDateChange = (e) => {
        setEducation({
            ...education, date: e.target.value
        })
      }

    

      const handleCompNameChange = (e) => {
        setExperience({
            ...experience, compName: e.target.value
        })
      }

    

      const handlePosTitleChange = (e) => {
        setExperience({
            ...experience, posTitle: e.target.value
        })
      }

    
      const handleTasksChange = (e) => {
        setExperience({
            ...experience, tasks: e.target.value
        })
      }

    
      const addExperience = () => {
        let newExp = {
          schoolName: '',
          category: '',
          date: '',
          id: uniqid()
        }
        setArr({
          
          ...arr, experienceArr: arr.experienceArr.concat(newExp)
      
        })
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        
        setArr({
          ...arr,
          finalArr: [general, education, experience, arr.educationArr, arr.experienceArr],
          addEdit: [1],
          startArr: []
        })
      }
   
      const editForm = (e) => {
        setArr({
          ...arr,
          finalArr: [],
          addEdit: [],
          startArr: [1]
        })
      }
    
      const handleNewSchoolName = (key, e) => {
        const rr = [...arr.educationArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].schoolName = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          educationArr: rr
        })
      }
    
      const handleNewCategory = (key, e) => {
        const rr = [...arr.educationArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].category = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          educationArr: rr
        })
      }
    
      const handleNewDate = (key, e) => {
        const rr = [...arr.educationArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].date = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          educationArr: rr
        })
      }
    
      const handleNewCompName = (key, e) => {
        const rr = [...arr.experienceArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].compName = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          experienceArr: rr
        })
      }
    
      const handleNewTitle = (key, e) => {
        const rr = [...arr.experienceArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].posTitle = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          experienceArr: rr
        })
      }
    
      const handleNewTasks = (key, e) => {
        const rr = [...arr.experienceArr];
        console.log('value: ' + e.target.value);
        
        for (let i = 0; i < rr.length; i++) {
          if (rr[i].id === key) {
            rr[i].tasks = e.target.value;
            
          }
        }
        setArr({
          ...arr,
          experienceArr: rr
        })
      }

    
      const addEducation = () => {
        let newEdu = {
          schoolName: '',
          category: '',
          date: '',
          id: uniqid()
        }
        setArr({
          ...arr,
          educationArr: arr.educationArr.concat(newEdu)
        })
        console.log(`newEduR: ${arr.educationArr}`)
      }

    

      
    return (
        <div className='content'>
            <header><h1><FontAwesomeIcon icon="fa-solid fa-paper-plane" bounce />&nbsp;Resume builder</h1></header>
            <div className='body'>
              <Resume array={arr.finalArr} ed={arr.educationArr} exp={arr.experienceArr} />{arr.addEdit.map((item) => { return <button onClick={editForm}className='edit'><FontAwesomeIcon icon={faPenToSquare} /></button> })}
              {arr.startArr.map((form)=> {
                return (
                  <form onSubmit={onSubmit}>
                <fieldset className='general'>
                  <legend>General info</legend>
                <div className='formName'>
                  <input id='name' value={general.name} onChange={handleNameChange} placeholder="Name *" name="name" type="text"  pattern="^[^0-9]+$" size="30" maxLength="245" required />
                  <label id='name' htmlFor='name' data-help="enter ur name genius">Name</label>
                </div>
                <div className='formSurname'>
                  <input placeholder="Surname *" value={general.surName} onChange={handleSurNameChange} name="surName" type="text"  pattern="^[^0-9]+$" size="30" maxLength="245" required />
                  <label htmlFor='surName'>Surname</label>
                </div>
                <div className='formEmail'>
                  <input placeholder="Email *" name="email" value={general.email} onChange={handleEmailChange} type="email" size="30" maxLength="245" required />
                  <label htmlFor='email'data-help="Format email@email.com">Email</label>
                </div>
                <div className='formNum'>
                  <input placeholder="Phone *" value={general.num} onChange={handleNumChange} name="phone" type="number"  maxLength="10" required />
                  <label htmlFor='phone'>Phone number</label>
                </div>
                </fieldset>
                <fieldset className='education'>
                  <legend>Educational experience</legend>
                  <div className='formSchoolName'>
                  <input placeholder="School name *" value={education.schoolName} onChange={handleSchoolNameChange} name="schoolName" type="text"  maxLength="250" />
                  <label htmlFor='schoolName'>School name</label>
                </div>
                <div className='formStudy'>
                  <input placeholder="Field of study *" value={education.category} onChange={handleCategoryChange} name="field" type="text"  maxLength="250" />
                  <label htmlFor='field'>Field of study</label>
                </div>
                <div className='formGrad'>
                  <input placeholder="Graduation date *" value={education.date} onChange={handleDateChange} name="grad" type="date"  />
                  <label htmlFor='grad'>Graduation date</label>
                </div>
                <div className='newContainer'>
                <div className='actualContainer'>
        {arr.educationArr.map((item) => {
            return (
            <div className='nextContainer'>
                <div className='formSchoolName'>
                  <input placeholder="School name *"  value={item.schoolName} onChange={(e) => handleNewSchoolName(item.id, e)} name="schoolName" type="text"  maxLength="250" />
                  <label htmlFor='schoolName'>School name</label>
                </div>
                <div className='formStudy'>
                  <input placeholder="Field of study *" value={item.category} onChange={(e) => handleNewCategory(item.id, e)} name="field" type="text"  maxLength="250" />
                  <label htmlFor='field'>Field of study</label>
                </div>
                <div className='formGrad'>
                  <input placeholder="Graduation date *" value={item.date} onChange={(e) => handleNewDate(item.id, e)} name="grad" type="date"  />
                  <label htmlFor='grad'>Graduation date</label>
                </div>
            </div>     
            )
        })}
        </div><div className='btnContainer'>{arr.educationArr.map((item) => <button type='button' onClick={() => {deleteEducation(item.id)}}id='deleteBtn'><FontAwesomeIcon icon={faTrashCan} size='2x' shake/></button>)}</div>
                </div>
                <div className='btn'><button type='button' onClick={ () => {addEducation()}}className='add'><FontAwesomeIcon icon={faCirclePlus} color='blue' id='cicrlePlus' size='3x' beat /></button></div>
                </fieldset>
                <fieldset className='experience'>
                  <legend>Experience</legend>
                  <div className='formCompName'>
                  <input placeholder="Company Name *" value={experience.compName} onChange={handleCompNameChange} name="field" type="text"  maxLength="250" />
                  <label htmlFor='compName'>Company name</label>
                </div>
                <div className='formPosTitle'>
                  <input placeholder="Position title *" value={experience.posTitle} onChange={handlePosTitleChange} name="posTitle" type="text"  maxLength="250" />
                  <label htmlFor='posTitle'>Position title</label>
                </div>
                <div className='formTasks'>
                  <textarea name='tasks' id='tasks' value={experience.tasks} onChange={handleTasksChange} placeholder='Main tasks *' maxLength='250'/>
                  <label id='txtLabel' htmlFor='tasks'>Main tasks</label>
                </div>
                <div className='newContainer'>
                <div className='actualContainer'>
        {arr.experienceArr.map((item) => {
            return (
                <div className='nextContainer'>
                    <div className='formCompName'>
                  <input placeholder="Company Name *" value={item.compName} onChange={(e) => handleNewCompName(item.id, e)} name="field" type="text"  maxLength="250" />
                  <label htmlFor='compName'>Company name</label>
                </div>
                <div className='formPosTitle'>
                  <input placeholder="Position title *" value={item.posTitle} onChange={(e) => handleNewTitle(item.id, e)} name="posTitle" type="text"  maxLength="250" />
                  <label htmlFor='posTitle'>Position title</label>
                </div>
                <div className='formTasks'>
                  <textarea name='tasks' id='tasks' value={item.tasks} onChange={(e) => handleNewTasks(item.id, e)} placeholder='Main tasks *' maxLength='250'/>
                  <label id='txtLabel' htmlFor='tasks'>Main tasks</label>
                </div>
                </div>
            )
        })}
        </div><div className='btnContainer'>{arr.experienceArr.map((item) => <button type='button' onClick={() => {deleteExperience(item.id)}}id='deleteBtn'><FontAwesomeIcon icon={faTrashCan} size='2x' shake/></button>)}</div>
                </div>
                <div className='btn'><button type='button' onClick={() => addExperience()}className='add'><FontAwesomeIcon icon={faCirclePlus} id='cicrlePlus' color='blue' size='3x' beat /></button></div>
                </fieldset>
                <button type='submit' className='submit'>Submit</button>
                </form>
                );
              })}
                
                </div> 
            <footer><h4>Copyright &#169; {(new Date().getFullYear())} by Maninder Pahal</h4></footer>
            
        </div>
    )
            }
export default App;