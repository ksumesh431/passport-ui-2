import { CarouselComponent } from '@/components/carasoul'
import SkillStoneFeatures from '@/components/slider'
import ContactForm from '@/components/contactForm'
import BlogPosts from '@/components/blogposts'
const Dashboard = () => {
  return (
    <>
      <CarouselComponent />
      {/* <div className="relative w-full max-w-screen-lg mx-auto"> */}
        <SkillStoneFeatures />
      {/* </div> */}
      <ContactForm />
      <BlogPosts />
    </>
  )
}

export default Dashboard