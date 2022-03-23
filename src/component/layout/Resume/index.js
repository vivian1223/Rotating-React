import classNames from "classnames";
import Intro from "./../../organisms/Intro";

import './index.scss';

const iconListData = [
    {
        id:1,    
        iconClass: "fa-brands fa-github",
        link: 'https://github.com/vivian1223'
    },
    {
        id:2,       
        iconClass: "fa-brands fa-linkedin",
        link: 'https://www.linkedin.com/in/vivian-yeh-36b21a1b7/'
    },
]

const skillList =[
    {
        id:1,
        title: '前端框架',
        skills:['React、Redux', 'Vue 2、Vue 3', 'Vuex、Vue Router', 'TypeScript']
    },
    {
        id:1,
        title: '前端框架',
        skills:['React、Redux', 'Vue 2、Vue 3', 'Vuex、Vue Router', 'TypeScript']
    },
    {
        id:1,
        title: '前端框架',
        skills:['React、Redux', 'Vue 2、Vue 3', 'Vuex、Vue Router', 'TypeScript']
    },
    {
        id:1,
        title: '前端框架',
        skills:['React、Redux', 'Vue 2、Vue 3', 'Vuex、Vue Router', 'TypeScript']
    },
    {
        id:1,
        title: '前端框架',
        skills:['React、Redux', 'Vue 2、Vue 3', 'Vuex、Vue Router', 'TypeScript']
    },
    
]

export const SkillList = ({list}) => {
    return (
        <ul className={classNames('skill-list')}>
            {
                list.map(({id, title, skills})=>{
                    return (
                      <li key={id} className={classNames('skill-list-item')}>
                        <h3>{title}</h3>
                        <ul>
                            {skills.map((item,index) => {
                                return (
                                 <li key={index}>
                                    {item}
                                </li>   
                                ) 
                            })}
                        </ul>
                    </li>  
                    ) 
                })
            }
        </ul>
    )
}

const Resume = () => {
    return(
        <div className={classNames('resume')}>
            <Intro iconListData={iconListData} />
            <div className={classNames('skill')}>
                <h2>前端開發技能</h2>
                <SkillList list={skillList}/>
            </div>
        </div>
        
    )
}

export default Resume;