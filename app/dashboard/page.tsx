
import { ContactForm, ExpertServices } from '@/components/contactForm';
import BlogPosts from '@/components/blogposts';
import EmblaCarousel from '@/components/EmblaCarousel';
import MultiSlideCarousel from '@/components/MultiSlideCarousel';
const Dashboard = () => {
  return (
    <>
      <div className="mt-5">
        <EmblaCarousel />
      </div>
      <div className="mt-10">
        <MultiSlideCarousel />
      </div>
      <ExpertServices />
      <ContactForm />
      <BlogPosts />
    </>
  );
};

export default Dashboard;