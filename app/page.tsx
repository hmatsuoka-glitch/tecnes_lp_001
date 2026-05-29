import Header from '@/components/Header/Header';
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator';
import MainVisual from '@/components/MainVisual/MainVisual';
import Business from '@/components/Business/Business';
import Flow from '@/components/Flow/Flow';
import About from '@/components/About/About';
import People from '@/components/People/People';
import Environment from '@/components/Environment/Environment';
import Recruit from '@/components/Recruit/Recruit';
import ApplyForm from '@/components/ApplyForm/ApplyForm';
import FootNav from '@/components/FootNav/FootNav';
import Footer from '@/components/Footer/Footer';
import ApplyPopup from '@/components/ApplyPopup/ApplyPopup';

export default function Page() {
  return (
    <>
      <Header />
      <main className="l-main">
        <MainVisual />
        <Business />
        <Flow />
        <About />
        <People />
        <Environment />
        <Recruit />
        <ApplyForm />
        <FootNav />
      </main>
      <Footer />
      <ApplyPopup />
      <ScrollAnimator />
    </>
  );
}
