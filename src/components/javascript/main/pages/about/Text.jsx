import '../../../../css/main/pages/about/Text.css'
import { aboutText } from '../../../../../data/AboutData'

// Todo: make it into list 
const Text = () =>{
    return <section className="about-text">
    
    {
      aboutText.map( (item) => {
       return <p key={item.id}>
          {item.text}
        </p>
      })
    }
  </section>
}

export default Text