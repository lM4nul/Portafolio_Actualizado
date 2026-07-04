import aboutContext from './pages/about_page';
import experienceContext from './pages/experience_page';
import projectsContext from './pages/projects_page';


export default (page)=>{
    switch(page){
        case '/index.html':
            return {...experienceContext, ...aboutContext, ...projectsContext} ;
        default:
            return {};
    }
};




