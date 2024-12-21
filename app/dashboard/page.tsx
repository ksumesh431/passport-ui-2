import {CarouselComponent} from '@/components/carasoul'
import SkillStoneFeatures from '@/components/slider'
import ContactForm from '@/components/contactForm'
import BlogPosts from '@/components/blogposts'
const Dashboard = () => {
  return (
    <>

       <CarouselComponent/>
      <div>
        <SkillStoneFeatures/>
      </div>
      
      <div>
        <ContactForm/>
      </div>
      <div>
        <BlogPosts/>
      </div>
    </>
  )
}

export default Dashboard