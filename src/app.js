import React, { Component } from 'react';
import Resume from './components/resume';
import uniqid from 'uniqid';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; 
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            general: {
              name: '',
              surName: '',
              email: '',
              num: '',
              id: uniqid()
            },
            education: {
              schoolName: '',
              category: '',
              date: '',
              id: uniqid()
            },
            experience: {
              compName: '',
              posTitle: '',
              tasks: '',
              id: uniqid()
            },
            educationArr: [],
            experienceArr: [],
            finalArr: [],
            addEdit: [],
            startArr: [1]
        }
        this.addEducation = this.addEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
     
    }

    deleteExperience(key) {
      let newArr = [];
      const { experienceArr } = this.state;
      newArr = experienceArr.filter(j => {
        return j.id !== key;
      });
      this.setState({
        
        experienceArr: newArr
    
      })
    }

    deleteEducation(key) {
      let newArr = [];
      const { educationArr } = this.state;
      newArr = educationArr.filter(j => {
        return j.id !== key;
      });
      this.setState({
        
          
        educationArr: newArr,
        
      })
    }

    handleNameChange = (e) => {
      this.setState({
          general: {
            name: e.target.value,
            surName: this.state.general.surName,
            email: this.state.general.email,
            num: this.state.general.num,
            id: this.state.general.id
            
          }
      })
    }

    handleSurNameChange = (e) => {
      this.setState({
          general: {
            name: this.state.general.name,
            surName: e.target.value,
            email: this.state.general.email,
            num: this.state.general.num,
            id: this.state.general.id
           
          }
      })
    }

    handleEmailChange = (e) => {
      this.setState({
          general: {
            name: this.state.general.name,
            surName: this.state.general.surName,
            email: e.target.value,
            num: this.state.general.num,
            id: this.state.general.id
            
          }
      })
    }

    handleNumChange = (e) => {
      this.setState({
          general: {
            name: this.state.general.name,
            surName: this.state.general.surName,
            email: this.state.general.email,
            num: e.target.value,
            id: this.state.general.id
          }
      })
    }

    handleSchoolNameChange = (e) => {
      this.setState({
          education: {
            schoolName: e.target.value,
            category: this.state.education.category,
            date: this.state.education.date,
            id: this.state.education.id
    
          }
      })
    }

    handleCategoryChange = (e) => {
      this.setState({
          education: {
            schoolName: this.state.education.schoolName,
            category: e.target.value,
            date: this.state.education.date,
            id: this.state.education.id
        
          }
      })
    }

    handleDateChange = (e) => {
      this.setState({
          education: {
            schoolName: this.state.education.schoolName,
            category: this.state.education.category,
            date: e.target.value,
            id: this.state.education.id
          }
      })
    }

    handleCompNameChange = (e) => {
      this.setState({
          experience: {
            compName: e.target.value,
            posTitle: this.state.experience.posTitle,
            tasks: this.state.experience.tasks,
            id: this.state.experience.id
          }
      })
    }

    handlePosTitleChange = (e) => {
      this.setState({
          experience: {
            compName: this.state.experience.compName,
            posTitle: e.target.value,
            tasks: this.state.experience.tasks,
            id: this.state.experience.id
          }
      })
    }

    handleTasksChange = (e) => {
      this.setState({
          experience: {
            compName: this.state.experience.compName,
            posTitle: this.state.experience.posTitle,
            tasks: e.target.value,
            id: this.state.experience.id
          }
      })
    }

    addExperience() {
      let newExp = {
        schoolName: '',
        category: '',
        date: '',
        id: uniqid()
      }
      this.setState({
        
        experienceArr: this.state.experienceArr.concat(newExp)
    
      })
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { general, education, experience, educationArr, experienceArr } = this.state;
      this.setState({
        finalArr: [general, education, experience, educationArr, experienceArr],
        addEdit: [1],
        startArr: []
      })
    }

    editForm = (e) => {
      this.setState({
        finalArr: [],
        addEdit: [],
        startArr: [1]
      })
    }

    handleNewSchoolName = (key, e) => {
      const { educationArr } = this.state
      const rr = [...educationArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].schoolName = e.target.value;
          
        }
      }
      this.setState({
        educationArr: rr
      })
    }

    handleNewCategory = (key, e) => {
      const { educationArr } = this.state
      const rr = [...educationArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].category = e.target.value;
          
        }
      }
      this.setState({
        educationArr: rr
      })
    }

    handleNewDate = (key, e) => {
      const { educationArr } = this.state
      const rr = [...educationArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].date = e.target.value;
          
        }
      }
      this.setState({
        educationArr: rr
      })
    }

    handleNewCompName = (key, e) => {
      const { experienceArr } = this.state
      const rr = [...experienceArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].compName = e.target.value;
          
        }
      }
      this.setState({
        experienceArr: rr
      })
    }

    handleNewTitle = (key, e) => {
      const { experienceArr } = this.state
      const rr = [...experienceArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].posTitle = e.target.value;
          
        }
      }
      this.setState({
        experienceArr: rr
      })
    }

    handleNewTasks = (key, e) => {
      const { experienceArr } = this.state
      const rr = [...experienceArr];
      console.log('value: ' + e.target.value);
      
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].id === key) {
          rr[i].tasks = e.target.value;
          
        }
      }
      this.setState({
        experienceArr: rr
      })
    }

    addEducation() {
      let newEdu = {
        schoolName: '',
        category: '',
        date: '',
        id: uniqid()
      }
      this.setState({
        educationArr: this.state.educationArr.concat(newEdu)
      })
      console.log(`newEduR: ${this.state.educationArr}`)
    }

    render() {
      let { general, education, experience, finalArr, startArr, educationArr, experienceArr } = this.state;
      
        return (
            <div className='content'>
                <header><h1><FontAwesomeIcon icon="fa-solid fa-paper-plane" bounce />&nbsp;Resume builder</h1></header>
                <div className='body'>
                  <Resume array={finalArr} ed={educationArr} exp={experienceArr} />{this.state.addEdit.map((item) => { return <button onClick={this.editForm}className='edit'><FontAwesomeIcon icon={faPenToSquare} /></button> })}
                  {startArr.map((form)=> {
                    return (
                      <form onSubmit={this.onSubmit}>
                    <fieldset className='general'>
                      <legend>General info</legend>
                    <div className='formName'>
                      <input id='name' value={general.name} onChange={this.handleNameChange} placeholder="Name *" name="name" type="text"  pattern="^[^0-9]+$" size="30" maxLength="245" required />
                      <label id='name' htmlFor='name' data-help="enter ur name genius">Name</label>
                    </div>
                    <div className='formSurname'>
                      <input placeholder="Surname *" value={general.surName} onChange={this.handleSurNameChange} name="surName" type="text"  pattern="^[^0-9]+$" size="30" maxLength="245" required />
                      <label htmlFor='surName'>Surname</label>
                    </div>
                    <div className='formEmail'>
                      <input placeholder="Email *" name="email" value={general.email} onChange={this.handleEmailChange} type="email" size="30" maxLength="245" required />
                      <label htmlFor='email'data-help="Format email@email.com">Email</label>
                    </div>
                    <div className='formNum'>
                      <input placeholder="Phone *" value={general.num} onChange={this.handleNumChange} name="phone" type="number"  maxLength="10" required />
                      <label htmlFor='phone'>Phone number</label>
                    </div>
                    </fieldset>
                    <fieldset className='education'>
                      <legend>Educational experience</legend>
                      <div className='formSchoolName'>
                      <input placeholder="School name *" value={education.schoolName} onChange={this.handleSchoolNameChange} name="schoolName" type="text"  maxLength="250" />
                      <label htmlFor='schoolName'>School name</label>
                    </div>
                    <div className='formStudy'>
                      <input placeholder="Field of study *" value={education.category} onChange={this.handleCategoryChange} name="field" type="text"  maxLength="250" />
                      <label htmlFor='field'>Field of study</label>
                    </div>
                    <div className='formGrad'>
                      <input placeholder="Graduation date *" value={education.date} onChange={this.handleDateChange} name="grad" type="date"  />
                      <label htmlFor='grad'>Graduation date</label>
                    </div>
                    <div className='newContainer'>
                    <div className='actualContainer'>
            {this.state.educationArr.map((item) => {
                return (
                <div className='nextContainer'>
                   <div className='formSchoolName'>
                      <input placeholder="School name *"  value={item.schoolName} onChange={(e) => this.handleNewSchoolName(item.id, e)} name="schoolName" type="text"  maxLength="250" />
                      <label htmlFor='schoolName'>School name</label>
                    </div>
                    <div className='formStudy'>
                      <input placeholder="Field of study *" value={item.category} onChange={(e) => this.handleNewCategory(item.id, e)} name="field" type="text"  maxLength="250" />
                      <label htmlFor='field'>Field of study</label>
                    </div>
                    <div className='formGrad'>
                      <input placeholder="Graduation date *" value={item.date} onChange={(e) => this.handleNewDate(item.id, e)} name="grad" type="date"  />
                      <label htmlFor='grad'>Graduation date</label>
                    </div>
                </div>     
                )
            })}
            </div><div className='btnContainer'>{this.state.educationArr.map((item) => <button type='button' onClick={() => {this.deleteEducation(item.id)}}id='deleteBtn'><FontAwesomeIcon icon={faTrashCan} size='2x' shake/></button>)}</div>
                    </div>
                    <div className='btn'><button type='button' onClick={ () => {this.addEducation()}}className='add'><FontAwesomeIcon icon={faCirclePlus} color='blue' id='cicrlePlus' size='3x' beat /></button></div>
                    </fieldset>
                    <fieldset className='experience'>
                      <legend>Experience</legend>
                      <div className='formCompName'>
                      <input placeholder="Company Name *" value={experience.compName} onChange={this.handleCompNameChange} name="field" type="text"  maxLength="250" />
                      <label htmlFor='compName'>Company name</label>
                    </div>
                    <div className='formPosTitle'>
                      <input placeholder="Position title *" value={experience.posTitle} onChange={this.handlePosTitleChange} name="posTitle" type="text"  maxLength="250" />
                      <label htmlFor='posTitle'>Position title</label>
                    </div>
                    <div className='formTasks'>
                      <textarea name='tasks' id='tasks' value={experience.tasks} onChange={this.handleTasksChange} placeholder='Main tasks *' maxLength='250'/>
                      <label id='txtLabel' htmlFor='tasks'>Main tasks</label>
                    </div>
                    <div className='newContainer'>
                    <div className='actualContainer'>
            {this.state.experienceArr.map((item) => {
                return (
                    <div className='nextContainer'>
                        <div className='formCompName'>
                      <input placeholder="Company Name *" value={item.compName} onChange={(e) => this.handleNewCompName(item.id, e)} name="field" type="text"  maxLength="250" />
                      <label htmlFor='compName'>Company name</label>
                    </div>
                    <div className='formPosTitle'>
                      <input placeholder="Position title *" value={item.posTitle} onChange={(e) => this.handleNewTitle(item.id, e)} name="posTitle" type="text"  maxLength="250" />
                      <label htmlFor='posTitle'>Position title</label>
                    </div>
                    <div className='formTasks'>
                      <textarea name='tasks' id='tasks' value={item.tasks} onChange={(e) => this.handleNewTasks(item.id, e)} placeholder='Main tasks *' maxLength='250'/>
                      <label id='txtLabel' htmlFor='tasks'>Main tasks</label>
                    </div>
                    </div>
                )
            })}
            </div><div className='btnContainer'>{this.state.experienceArr.map((item) => <button type='button' onClick={() => {this.deleteExperience(item.id)}}id='deleteBtn'><FontAwesomeIcon icon={faTrashCan} size='2x' shake/></button>)}</div>
                    </div>
                    <div className='btn'><button type='button' onClick={() => this.addExperience()}className='add'><FontAwesomeIcon icon={faCirclePlus} id='cicrlePlus' color='blue' size='3x' beat /></button></div>
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
}

export default App;