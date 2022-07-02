import Story from "../components/Story.js"
import view from '../utils/view.js';

export default async function Stories(path) {
    
 const stories = await getStories(path);
  //const hasStories = stories.length > 0;
                    
  view.innerHTML = `<div class="story">
            stories.map(story => Story(story))
</div>`
}

async function getStories(path){
    if(path === '/'){
      path = '/news'  
    }
    else if (path === '/new') {
    path = '/newest';  
  } 
    const res = await fetch(`https://node-hnapi.herokuapp.com${path}`)
    const data = await res.json()
     return data
}